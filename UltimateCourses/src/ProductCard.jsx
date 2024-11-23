import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css"

const ProductCard = ({product}) => {
  return (
    <Link to={product.id} className={styles.list}>
        <img className={styles.productCardIcon} src={`/assets/img/products/${product.id}.svg`} alt={product.name} />
        <div>
            <h2 className={styles.productCardName}>{product.name}</h2>
            <p className={styles.productCardPrice}>{`${product.price / 100}`}</p>
        </div>
    </Link>
  )
}

export default ProductCard