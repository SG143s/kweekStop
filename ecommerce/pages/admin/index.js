import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import NavbarLeft from './components/NavbarLeft.js';
import './components/styles/index.css';
import TextFooter from '../../src/component/footer/TextFooter.js';

export default function App(){
    return(
        <div className='container'>
            <Navbar className="navbar"/>
            <div className="navbar-left-page">
                <div className="navbar-left">
                    <NavbarLeft/>
                </div>
                <div className="home">
                    <Home/>
                </div>
            </div>
            <TextFooter />
        </div>
    );
}