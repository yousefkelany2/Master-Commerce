import { useEffect, useState } from "react";
import { FaHeart,FaCartPlus } from "react-icons/fa";
import { ImSpinner10 } from "react-icons/im";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line react/prop-types
const Dummy = ({addCart ,addWatchlist}) => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
    let [products,setProduct] = useState([]);
    let [loading ,setLoading] = useState(false);

    useEffect(function(){
        setLoading(true)
        setTimeout(function(){fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data =>{
            setProduct(data.products);
            setLoading(false)
          })},1000)

    },[])
    return (

        <>
        {
            loading ? <ImSpinner10 className="spinner "/>
            :
            <div className="container">
            <div className="main-tittle" data-aos = 'fade-down' >
                <h1>Dummy <span>Products</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!

</p>
            </div>
            <div className="productsFD">
                {products.map(function(product){
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div className="productFD" data-aos = 'fade-up' >
                           <Link to={`/Singaldummy/${product.id}`}>
                           <img src={product.thumbnail} alt="Items" />
                           </Link>
                            <h1>{product.title.slice(0,10)}...</h1>
                            <div className="Probtn">
                            <button  onClick={() => addWatchlist(product)}> <FaHeart className="iconpro"/></button>
                             <button  onClick={() => addCart(product)}><FaCartPlus className="iconpro" /></button>
                            </div>
                        
                        </div>
                    )
                })
    
                }
            </div>
          
        </div>
        }
        </>
       
      );
}

export default Dummy;
