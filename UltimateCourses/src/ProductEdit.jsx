import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { createProduct, retrieveProduct, updateProduct, deleteProduct } from "./ProductsService";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = ({isEdit}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (!isEdit) {
      setForm({
        id: '',
        name: '',
        price: 0,
        description: '',
      });
      return;
    }

    (async () => {
      try {
        const product = await retrieveProduct(id);
        setForm(product);
      } catch (e) {
        console.warn(e);
        navigate(`/admin`, {replace: true});
      }
    })();

  }, [id]);

  const updateField = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      const {id} = await createProduct(form);
      navigate(`/admin/${id}`);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateProduct(form);
      alert(`Update ${form.name}`);
      navigate(`/admin`);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Really delete ${form.name}?`)) {
      return;
    }
    try {
      await deleteProduct(form.id);
      navigate(`/admin`);
    } catch (e) {
      console.warn(e);
    }
  };

  if (form === null) {
    return <div>Loading...❌</div>;
  }

  return (
    <form className={styles.productEdit}>
      <input
        className={styles.productEditInput}
        type="text"
        name="id"
        value={form.id}
        placeholder="ID"
        onChange={({ target }) => updateField(target)}
      />
      <input
        className={styles.productEditInput}
        type="text"
        name="name"
        value={form.name}
        placeholder="Name"
        onChange={({ target }) => updateField(target)}
      />
      <input
        className={styles.productEditInput}
        type="text"
        name="price"
        value={form.price}
        placeholder="Price"
        onChange={({ target }) => updateField({name: target.name, value: parseInt(target.value, 10)})}
      />
      <textarea
        className={`${styles.productEditInput} ${styles.productEditTextArea}`}
        name="description"
        value={form.description}
        placeholder="Description"
        onChange={({ target }) => updateField(target)}
      />
      {!isEdit && (
        <button type="button" className={styles.productEditButton} onClick={handleCreate}>
        Create
      </button>
                  )}

      {isEdit && (
      <button type="button" className={styles.productEditButton} onClick={handleUpdate}>
        Update
      </button>
            )}

      {isEdit && (
        <button type="button" className={styles.productEditButton} onClick={handleDelete}>
        Delete
      </button>
      )}
    </form>
  );
};

export default ProductEdit;
