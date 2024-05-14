import './order.css';
import { FaCheck,FaTruck ,FaPhoneAlt } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Order = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <div className="container servces"  >

        <div className="service" data-aos = 'fade-left' >
            <FaCheck className='iconsO' />
            <h2>Quality Product</h2>
        </div>
        <div className="service" data-aos = 'fade-up' >
        <FaTruck className='iconsO'/>
            <h2>Free Shipping</h2>
        </div>
        <div className="service" data-aos = 'fade-down'>
        <FaAnglesRight className='iconsO' />
            <h2>14-Day Return</h2>
        </div>
        <div className="service" data-aos = 'fade-right'>
        <FaPhoneAlt className='iconsO' />
            <h2>24/7 Support</h2>
        </div>
      
    </div>
  );
}

export default Order;
