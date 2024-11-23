import {Routes, Route} from "react-router-dom";
import ProductsIndex from "./ProductsIndex";
import Product from "./Product";

const Products = () => {
    return (
      <>
        <h1>Products</h1>
  
        <Routes>
            <Route path='/' element={<ProductsIndex />}/>
            <Route path='/:id' element={<Product />}/>
        </Routes>
      </>
    )
  }
  export default Products  