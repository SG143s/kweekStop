import "./MainNavbar.css";
import { FaAngleDown } from 'react-icons/fa';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import CategoriesMenu from "./CategoriesMenu";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
// import MainLogo from '../png components/Main Logo.png';
import { useRouter } from 'next/router';

const MainNavbar = ({items}) => {
  const router = useRouter();

  function handleSearch(event) {
    event.preventDefault();
    // const router = useRouter();
    const searchQuery = event.target.search.value;
    router.push(`/products/search?search=${searchQuery}`);
  }
  
  const { loggedIn, userData } = useContext(AuthContext);

  const handleClick = (userId) => {
      router.push(`/cart?id=${userId}`);
  };

  const handleProductClick = () => {
    router.push(`/products`);
  };

  const handleNavbarClick = () => {
    router.push(`/`)
  }

  console.log(loggedIn); // true or false
  console.log(userData); // user data object

  return (
    <header>
      <nav className="navbar-header">
        <div className="main-logo" onClick={handleNavbarClick}>
          <Image src="/png components/Main Logo.png" width={150} height={30} />
        </div>
        <div className="navbar-menu">
          <div className="navbar-categories-menu">
            <p clasname="categories-navbar"><span>Categories</span><FaAngleDown /></p>
            <div className="dropdown-categories"><CategoriesMenu></CategoriesMenu></div>
          </div>
          <p className="product-us" onClick={handleProductClick}>Products</p>
          <p className="about-us">About Us</p>
        </div>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <label>
              <input type="text" name="search" placeholder="search here" />
            </label>
              <button className="search-button"><FaSistrix /></button>
          </form>
        </div>
        <div className="navbar-right-side">
          <button className="cart" onClick={() => handleClick(userData.id)}><AiOutlineShoppingCart/>{items ? <p className="item-num-cart">{items.length}</p> : <p className="item-num-cart">0</p> }</button>
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
