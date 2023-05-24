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
                <TextFooter></TextFooter>
            </div>
        </div>
    )
};

export default LandingPage;