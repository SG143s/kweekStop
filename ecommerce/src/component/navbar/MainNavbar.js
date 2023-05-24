import "./MainNavbar.css";
import { FaAngleDown } from 'react-icons/fa';
import { FaSistrix } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import MainLogo from '../png components/Main Logo.png';

const MainNavbar = (props) => {

  return (
      <div className="navbar-header">
        <div className="main-logo">
          <img src={MainLogo} width='200px' />
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
          <button className="cart"><FaShoppingCart /></button>
        </div>
        <div className="login-signup">
          <button className="login">Log in</button>
          <button className="signup">Sign Up</button>
        </div>

      </div>
  );
};

export default MainNavbar;
