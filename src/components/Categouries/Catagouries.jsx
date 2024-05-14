import './catagouries.css'
import img1 from '../../images/cat-1.jpg'
import img2 from '../../images/cat-2.jpg'
import img3 from '../../images/cat-3.jpg'
import img4 from '../../images/cat-4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Catagouries = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <div className="container ">
        <div className="TittleHome" data-aos = 'fade-down'>
            <h1>CATEGORIES</h1>
        </div>

      <div className="Catas">
      <div className="cata " data-aos = 'fade-up'>
            <img src={img3} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-left'>
            <img src={img2} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-right'>
            <img src={img1} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-down'>
            <img src={img4} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-right'>
            <img src={img1} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-up'>
            <img src={img3} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-dowm'>
            <img src={img4} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-left'>
            <img src={img2} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-right'>
            <img src={img4} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-down'>
            <img src={img2} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-left'>
            <img src={img3} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        <div className="cata" data-aos = 'fade-up'>
            <img src={img1} alt="Fashion" />
            <div className="catatext">
                <h1>Category Name</h1>
                <h3>100 Products</h3>
            </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Catagouries;
