import './about.css';
import img from '../../images/about.jpg';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    
    <div className='container'>
       
        <div className="main-tittle"  data-aos = 'fade-down'>
            <h1>About <span>Us</span></h1>
        </div>
        <div className="About">
            {/* About Left */}
            <div className="aboutL"  data-aos = 'fade-left'>
                <img src={img} alt="About" />

            </div>
            {/* About Right */}
            <div className="aboutR"  data-aos = 'fade-right'>
                <h1>Welcome To <span>Bravo Shop</span></h1>
                <h3><span>Bravo Shop  </span>is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.</h3>
                <Link to="/shop">
                <button>Shop Now</button></Link>
            </div>
        </div>
      
    </div>
  );
}

export default About;
