import {Routes, Route, Link} from "react-router-dom";
import ProductsIndex from "../ProductsIndex";
import ProductEdit from "../ProductEdit";
import styles from '../style.module.css'

const Admin = () => {
    return (
      <div className={styles.admin}>
        <div className={styles.adminHeader}>
        <h1>Admin</h1>
        <Link to='new' className={styles.adminNew}>New</Link>
        </div>
        <Routes>
          <Route path='/' element={<ProductsIndex />} />
          <Route path='new' element={<ProductEdit isEdit={false}/>} />
          <Route path='/:id' element={<ProductEdit isEdit={true}/>} />
        </Routes>
      </div>
    )
  }
export default Admin  