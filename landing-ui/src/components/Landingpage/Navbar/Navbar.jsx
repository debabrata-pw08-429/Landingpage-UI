import "./navbar.css";
import logo from "../../../assets/InvestPe.png";
import ellipse from "../../../assets/Ellipse.svg";
import downArrow from "../../../assets/down-arrow.svg";

const Navbar = () => {
  return (
    <nav className="nav-landingpage">
      <div className="navlogo" onClick={() => (window.location = "/")}>
        <img src={logo} alt="logo" />
        <div>
          <div> Gateway </div>
          <img src={ellipse} alt="circle" />
        </div>
      </div>
      <div className="links">
        <div className="links_each">
          <div>Products</div>
          <img src={downArrow} alt="circle" />
        </div>
        <div>AboutUs</div>
      </div>
    </nav>
  );
};

export default Navbar;
