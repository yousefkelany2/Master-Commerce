import './download.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../images/download (1).jpeg';
import img2 from '../../images/download (2).jpeg';
import img3 from '../../images/download (3).jpeg';
import img4 from '../../images/download (4).jpeg';
import img5 from '../../images/download (8).jpeg';
import img6 from '../../images/download (5).jpg';
import img7 from '../../images/download (6).jpg';
import img8 from '../../images/download (7).jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Doemload = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
          }
        },
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
          }
        }
      ]
    };
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <div className='container ' >

      <div className="downs" data-aos = 'fade-up'>
      <Slider  {...settings}>
      <div className="down">
            <img src={img1} alt="LOgs" />
        </div>
        <div className="down">
            <img src={img2} alt="LOgs" />
        </div>
        <div className="down">
            <img src={img3} alt="LOgs" />
        </div>
        <div className="down">
            <img src={img4} alt="LOgs" />
        </div>
        <div className="down">
            <img src={img5} alt="LOgs" />
        </div>
        <div className="down">
            <img src={img6} alt="LOgs" />
        </div>
        <div className="down">
            <img src={img7} alt="LOgs" />
        </div>
        <div className="down">
            <img src={img8} alt="LOgs" />
        </div>
      </Slider>
      </div>
      
    </div>
  );
}

export default Doemload;
