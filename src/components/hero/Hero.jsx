import './hero.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import AOS from 'aos';
 import 'aos/dist/aos.css';


const Hero = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000
      };

      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <div className='hero container'>
      {/* Hero left */}
      <div className="heroL" data-aos = 'fade-left'>
       <Slider  {...settings}>
       <div className="heroL1 same ">
          
          <h1>Men Fashion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos maxime minus libero hic consequatur enim. Nesciunt quas, assumenda repellendus eos sunt libero nam architecto illum accusamus harum beatae delectus!</p>
            <Link to='/shop'><button>Shop Now</button></Link>

          
        </div>
        <div className="heroL2 same">
            <h1>Woman Fashion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos maxime minus libero hic consequatur enim. Nesciunt quas, assumenda repellendus eos sunt libero nam architecto illum accusamus harum beatae delectus!</p>
            <Link to='/shop'><button>Shop Now</button></Link>
        </div>
        <div className="heroL3 same">
            <h1>Kids Fashion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos maxime minus libero hic consequatur enim. Nesciunt quas, assumenda repellendus eos sunt libero nam architecto illum accusamus harum beatae delectus!</p>
            <Link to='/shop'><button>Shop Now</button></Link>
        </div>
       </Slider>
      </div>
      {/* Hero right */}
       <div className="heroR">
        {/* Hero up */}
        <div className='heroup sameR'  data-aos = 'fade-up' >
            <h3>save 20%</h3>
            <h2>Specia Offer</h2>
            <Link to='/shop'><button>Shop Now</button></Link>
        </div>
        {/* Hero down */}
        <div className="herodown sameR" data-aos = 'fade-down' >
        <h3>save 20%</h3>
        <h2>Specia Offer</h2>
        <Link to='/shop'><button>Shop Now</button></Link>
        </div>
       </div>
    </div>
  );
}

export default Hero;
