/* eslint-disable react/prop-types */
import { FaShoppingCart ,FaHeart,FaMoon,FaAngleUp,FaAngleDown} from "react-icons/fa";
import './navbar.css'
import { IoMenuSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import $ from 'jquery';
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navbar = ({cartItems ,watchList ,dark,isDark}) => {
  function isShow(){
    $(".Fakepro").slideToggle(500);
    $(".siUp").toggle();
    $(".siDo").toggle();
  }

  function isMenu(){
    $("nav .navM ul").slideToggle(500);
    $(".menufa").toggle();
    $(".menutu").toggle();
  }
  return (
    <nav>
     {/* Left nav bar */}
     <div className="navL">
      <Link to="/"> <h2>Master <span>Shop</span></h2></Link>
     </div>
     {/* Middle nav bar */}
     <div className="navM">
        <ul>
            <li  ><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li className="Fakeproducts" onClick={isShow}  >
                <a  href="#" >
                  Products
                     <FaAngleUp className="siUp" />      
                      <FaAngleDown className="siDo"/>
                  </a>
                  
                   <div  className="Fakepro">
                    <Link to="/fake">Fake Api Products</Link>
                    <Link to="/dummy">Dummy Api Products</Link>
                  </div>
            </li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
     </div>
     {/* Right nav bar */}
     <div className="navR">
      <div className="countPro">
      <Link to="/watchlist"><FaHeart className="counticon" /></Link>
      <span>({watchList.length})</span>
      </div>
      <div className="countPro">
      <Link to='/cart'>
      <FaShoppingCart  className="counticon"/>
      </Link>
      <span>({cartItems.length})</span>
      </div>
      <div className="MOSU">

        {
          dark ? <IoSunny className="sun ms" onClick={isDark}/>
          :
          <FaMoon className="moooon ms" onClick={isDark}/>
        }
        
      </div>
      <div className="MENU" onClick={isMenu}>
      <IoMenuSharp className="menutu" />
      <FaTimes className="menufa" />

      </div>
     </div>
    </nav>
  );
}

export default Navbar;
