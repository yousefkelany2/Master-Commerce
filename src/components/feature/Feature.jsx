/* eslint-disable react/jsx-key */
import {  useEffect, useState } from "react";
import { Feproducts } from "./Fature";
import './feature.css'
import { FaStar ,FaHeart,FaCartPlus } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line react/prop-types
const Feature = ({addCart,addWatchlist}) => {
  let [products , setProducts] = useState([])
  useEffect(function(){
    setProducts(Feproducts);
  },[])
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (

   
    <div className="container">
       <div className="TittleHome"  data-aos = 'fade-down'>
          <h1>Feature Products</h1>
       </div>
       <div className="productsF">
       {products.map(function(product){
        return(
          <div className="productF  " data-aos = 'fade-up'>
          <img src={product.image} alt="Products" />
          <h1>{product.title}</h1>
          <div className="price">
            <h2>${product.price}</h2>
            <h2 className="old">${product.primaryC}</h2>
          </div>
          <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
          <div className="btnF">
         <button onClick={() => addWatchlist(product)}> <FaHeart /></button>
         <button onClick={() => addCart(product)}> <FaCartPlus /></button>

          </div>
          </div>
        )
       })}
       </div>
        
      
    </div>
  );
}

export default Feature;
