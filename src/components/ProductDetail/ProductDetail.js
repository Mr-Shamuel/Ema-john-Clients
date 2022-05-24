import React, {useEffect,useState}from 'react';
import { useParams } from 'react-router-dom';
 
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
  const [products,setProducts] = useState({})
useEffect(()=>{

    fetch('http://localhost:4000/product/' + productKey)
    .then(response => response.json())
    .then(data=>setProducts(data ))

},[productKey])
    const product = products.find(pd => pd.key === productKey);
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;