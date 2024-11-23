import { replace, useNavigate, useParams } from "react-router-dom";
import { retrieveProduct } from "./ProductsService";
import { useEffect, useState } from "react";

import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const product = await retrieveProduct(id);
        setProduct(product);
      } catch (e) {
        console.warn(e);
        navigate('/', {replace: true, state: {id}});
      }
    })();
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.product}>
      <div className={styles.productTitle}>
        <img
          src={`/assets/img/products/${product.id}.svg`}
          alt={product.name}
          className={styles.productIcon}
        />
        <div>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productPrice}>{`${product.price / 100}`}</p>
        </div>
      </div>

      <div>
        <p>{product.description}</p>
        <button type="button" className={styles.productButton} onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Product;
