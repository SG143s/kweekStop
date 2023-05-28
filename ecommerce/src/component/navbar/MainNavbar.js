import "./MainNavbar.css";
import { FaAngleDown } from 'react-icons/fa';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
<<<<<<< HEAD
import Image from 'next/image';
// import MainLogo from '../png components/Main Logo.png';
=======
import MainLogo from '../png components/Main Logo.png';
>>>>>>> e653d0420d8024abda3e13e992abbc9ec873e8d1

const MainNavbar = (props) => {

  return (
    <div>
      <div className="navbar-header">
        <div className="main-logo">
<<<<<<< HEAD
          <Image src="/png components/Main Logo.png" width={150} height={30} />
=======
          <img src={MainLogo} width='150px' />
>>>>>>> e653d0420d8024abda3e13e992abbc9ec873e8d1
        </div>
        <div className="navbar-menu">
          <div className="navbar-categories-menu">
            <p><span>Categories</span><FaAngleDown /></p>
          </div>
          <p>Products</p>
          <p>About Us</p>
        </div>
        <div className="search-bar">
        <form>
          <label>
            <input type="text" name="search" placeholder="search here" />
          </label>
            <button className="search-button"><FaSistrix /></button>
        </form>
        </div>
        <div className="navbar-right-side">
          <button className="cart"><AiOutlineShoppingCart/></button>
        </div>
        <div className="login-signup">
          <button className="login">Log in</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
      <div className="navbar-line">
        <hr></hr>
      </div>
    </div>
  );
};

export default MainNavbar;
