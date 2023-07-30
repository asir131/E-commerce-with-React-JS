import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {


     
    console.log(props)
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className='product'>
            <div className='productImg'>
                <img src={img} alt="" />
            </div>
            <div className='productName'>
              <h4>{name}</h4>
              <br />
              <p><small>By : {seller}</small></p>
              <p>${price}</p>
              <p><small>Only {stock} left in stock - Order soon</small></p>
              <button 
              onClick={()=>props.handleAddProduct(props.product)}
              className='btn' ><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;