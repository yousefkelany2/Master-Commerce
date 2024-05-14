import './footer.css'
import { Link } from "react-router-dom";
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    
    <footer >
        <div className="cardsFO container">
        <div className="cardFO ca" data-aos = 'fade-left'>
        <h1>GET IN TOUCH</h1>
        <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
        </div>
        <div className="cardHO ca" data-aos = 'fade-up'>
            <h1>QUICK SHOP</h1>
            <ul className='comp'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>

            </ul>
        </div>
        <div className="cardSO ca" data-aos = 'fade-right'>
            <h1>Social Media</h1>
            <ul className='social'> 
                <li><a href="https://www.facebook.com/yosef.kelany.12"><FaFacebookF /></a></li>
                <li><a href="https://www.instagram.com/yousef.kelany2/"><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/yousef-kelany-235258271/"><FaLinkedinIn /></a></li>
                <li><a href="https://github.com/yousefkelany2"><FaGithub /></a></li>
            </ul>
        </div>
        <div className="cardCon ca" data-aos = 'fade-down'>
            <h1>NEWS LETTER</h1>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <div className="inp">
                <input type="email" placeholder='Your Email Address' />
                <button>Subscribe</button>
            </div>
        </div>
       
        </div>
        
    <div className="me "
    >
        <hr />
        <h3>Power by <a href="#">@Yousef_kelany</a></h3>

   </div>

    </footer>
  );
}

export default Footer;
