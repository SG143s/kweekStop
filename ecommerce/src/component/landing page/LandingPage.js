import MainNavbar from "../navbar/MainNavbar";
import Banner from "../landing page/Banner";
import "./LandingPage.css";
import Categories from "./Categories";
import ProductGroup from "./ProductGroup";
import SimpleCategory from "./SimpleCategory";
import JoinUs from "../footer/JoinUs";
import TextFooter from "../footer/TextFooter";

const LandingPage = (props) => {
    
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div className="container">
                <Banner></Banner>
                <Categories></Categories>
                <ProductGroup titleGroup={"Hot deals"}></ProductGroup>
                <ProductGroup titleGroup={"What's new?"}></ProductGroup>
                <SimpleCategory></SimpleCategory>
                <ProductGroup titleGroup={"Under $100"}></ProductGroup>
            </div>
            <div className="footer">
                <JoinUs></JoinUs>
<<<<<<< HEAD
            </div>
            <TextFooter></TextFooter>
=======
                <TextFooter></TextFooter>
            </div>
>>>>>>> e653d0420d8024abda3e13e992abbc9ec873e8d1
        </div>
    )
};

export default LandingPage;