import React from 'react';
 
const Inventory = () => {

    
    const handleClick = () => {
        
        const product = {};
      
         fetch('http://localhost:4000/addproducts',{
             method: 'POST',  
             headers: { 'Content-Type': 'application/json'},
             body: JSON.stringify(product)
           
         })
         
 
    } 

    return (
        <div>
            <form method="" >
                <p><span>Name: </span><input type="text" /></p>
                <p><span>Price: </span><input type="text" /></p>
                <p><span>Quantity: </span><input type="text" /></p>
                <p><span>Upload Image: </span><input type="file" /></p>

            <button onClick={handleClick}>Add Products</button>
            </form>
             
      
        </div>
    );
};

export default Inventory;