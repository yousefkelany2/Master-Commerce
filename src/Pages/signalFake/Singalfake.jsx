import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar,FaCartPlus } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import './singal.css'

// eslint-disable-next-line react/prop-types
const Singalfake = ({addCart}) => {
    let {id} = useParams();
    let [singalproducts, setSingal] = useState([])
    let [loading ,setLoading] = useState(false);
    useEffect(function(){
      setLoading(true);
   setTimeout(function(){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(function(data){
        setSingal(data);
        setLoading(false)
    })
   },1500)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (

    <>
    {
      loading ? <ImSpinner9 className="spinner "/>
      :
      <div className="singalProducts container">
        <div className="imagePro">
        <img src={singalproducts.image} alt="priducts" />
        </div>
        <div className="detailProFd">
          <h1>{singalproducts.category}</h1>
          <h2>{singalproducts.title}</h2>
          <p>{singalproducts.description}</p>
          <div className="StarFD">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
          
          <h1>Price :<span>${singalproducts.price}</span></h1>
          <button className="cart" onClick={() => addCart(singalproducts)}>
          <FaCartPlus />
          <span>Add To Cart</span>
          </button>
          
        </div>
       
      
    </div>
    }
    </>
  );
}

export default Singalfake;
