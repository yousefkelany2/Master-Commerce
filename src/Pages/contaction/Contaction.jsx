import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contaction = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className="container">
      <div className="main-tittle" data-aos = 'fade-down'>
        <h1>Contact <span>Us</span></h1>
      </div>
      <div className="contact">
        {/* Contact Left */}
        <div className="conL" data-aos = 'fade-right'>
            <form >
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button>SEND MESSAGE</button>
            </form>
        </div>
        {/* Contact Right */}
        <div className="conR">
            {/* Cntact Right UP */}
            <div className="conUP"  data-aos = 'fade-down'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.648209688728!2d73.08151547554219!3d33.64036237331498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95de9cd88f59%3A0x84bbfaea0b4e8b73!2sShop%20Commerce!5e0!3m2!1sen!2seg!4v1715538982676!5m2!1sen!2seg"></iframe>
            </div>
            {/* Cntact Right down */}
            <div className="conDo"  data-aos = 'fade-up'>
                <div className="iconCon">
                    <FaLocationCrosshairs/>
                    <h3>Egypt - Sharkia - Zagazig</h3>
                    
                </div>
                <div className="iconCon">
                    <IoMail/>
                    <h3>Master.Shop123@gmail.com</h3>

                </div>
                <div className="iconCon">
                    <FaPhoneAlt/>
                    <h3>+0123456789</h3>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contaction;