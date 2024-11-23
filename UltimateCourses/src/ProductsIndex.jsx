import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import { listProducts } from "./ProductsService";
import ProductCard from "./ProductCard";

const ProductsIndex = () => {
    const [products, setProducts] = useState(null);
    const {state} = useLocation();
  
    useEffect(() => {
      if (state) {
        console.warn(`Nothing found for ${state.id}`);
      }
    }, []);
  
    useEffect(() => {
      setTimeout(async function () {
        const data = await listProducts();
        setProducts(data);
        
      }, 1000)
    }, [])
  
    if (products === null) {return <p>loading...</p>}
  
    return (
      <>
        {products.map((product) => <ProductCard key={product.id} product={product}/>)}
      </>
    )
  }

  export default ProductsIndex