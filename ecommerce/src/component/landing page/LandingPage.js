import MainNavbar from "../navbar/MainNavbar";
import Banner from "../landing page/Banner";
import "./LandingPage.css";
import Categories from "./Categories";
import ProductGroup from "./ProductGroup";
import SimpleCategory from "./SimpleCategory";
import JoinUs from "../footer/JoinUs";
import TextFooter from "../footer/TextFooter";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const LandingPage = (props) => {
    const { loggedIn, userData } = useContext(AuthContext);
    // console.log("loginkah? ", loggedIn);
    
    return (
        <div>
            <MainNavbar></MainNavbar>
            {loggedIn ? (
                <div className="container">
                    <Banner></Banner>
                    <Categories></Categories>
                    <ProductGroup titleGroup={"Hot deals"}></ProductGroup>
                    <ProductGroup titleGroup={"What's new?"}></ProductGroup>
                    <SimpleCategory></SimpleCategory>
                    <ProductGroup titleGroup={"Under 100k"}></ProductGroup>
                </div>
            ) : (
                <div className="before-login">
                    <Banner></Banner>
                    <p className="login-dulu">Maaf, Anda harus login terlebih dahulu.</p>
                </div>
            )}
            <div className="footer">
                <JoinUs></JoinUs>
            </div>
            <TextFooter></TextFooter>
        </div>
    )
};

export default LandingPage;