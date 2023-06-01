import "./MainNavbar.css";
import { FaAngleDown } from 'react-icons/fa';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import CategoriesMenu from "./CategoriesMenu";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
// import MainLogo from '../png components/Main Logo.png';

const MainNavbar = (props) => {

  const { loggedIn, userData } = useContext(AuthContext);

  console.log(loggedIn); // true or false
  console.log(userData); // user data object

  return (
    <header>
      <nav className="navbar-header">
        <div className="main-logo">
          <Image src="/png components/Main Logo.png" width={150} height={30} />
        </div>
        <div className="navbar-menu">
          <div className="navbar-categories-menu">
            <p clasname="categories-navbar"><span>Categories</span><FaAngleDown /></p>
            <div className="dropdown-categories"><CategoriesMenu></CategoriesMenu></div>
          </div>
          <p className="product-us">Products</p>
          <p className="about-us">About Us</p>
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
        {!loggedIn ? (
            <div className="login-signup">
              <button className="login" ><a href="/login">Log in</a></button>
              <button className="signup"><a href="/register">Sign Up</a></button>
            </div>
          ) : (
            <div className="user-profile-navbar">
              <Image src="/jpg component/alditaher.jpg" width={30} height={30} />
              {/* <img src={userData.image} alt="User" /> */}
              <p>{userData.name}</p>
            </div>
          )}
      </nav>
      <div className="navbar-line">
        <hr></hr>
      </div>
    </header>
  );
};

export default MainNavbar;
