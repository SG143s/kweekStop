import "./styles/Navbar.css";
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineBell } from "react-icons/ai";
import Image from 'next/image';
// import HelpImg from '../png components/admin/help.png';

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <div className="navbar-left-side">
          <div className="main-logo">
            <Image src="/png components/Main Logo.png" width={150} height={30} />
          </div>
          <div className="search-bar">
          <form>
            <label>
              <input type="text" name="search" placeholder="search here" />
            </label>
              <button className="search-button"><FaSistrix /></button>
          </form>
          </div>
        </div>
        <div className="navbar-right-side">
          <button className="notification"><AiOutlineBell/></button>
          <button className="cust-service">
            <Image src="/png components/admin/help.png" width={11} height={11}/>  
          </button>
          <div className="vertical-line"></div>
          <button className="profile-bar">
          <div className="profile-pict">
            <Image src="/png components/admin/profile_pict.png" width={32} height={32}/>
          </div>
          <div className="username">
            <p>nizmmm</p>
          </div>
        </button>
        </div>
        {/* <div className="login-signup">
          <button className="login">Log in</button>
          <button className="signup">Sign Up</button>
        </div> */}
      </div>
      <div className="navbar-line">
        <hr></hr>
      </div>
    </div>
  );
};

export default Navbar;
