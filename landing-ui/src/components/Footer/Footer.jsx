import "./footer.css";
import logo from "../../assets/InvestPe.png";
import playstore from "../../assets/Group.svg";

const Footer = () => {
  return (
    <footer>
      <div className="navlogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="quick_links">
        <div className="contact">
          <h3>Contact Us</h3>
          <p>8089225625</p>
          <p>contact@chhotastock.com</p>
        </div>
        <div className="contact">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Privacy policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="contact">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Gateway</p>
          <p>Blog</p>
        </div>
        <div className="contact">
          <h3>Download the App Now !</h3>
          <p>
            <img src={playstore} />
          </p>
        </div>
      </div>
      <div className="social_links">
        <h3>Find Us On</h3>
        <div>
          <img
            className="element-instagram"
            alt="Element instagram"
            src="https://generation-sessions.s3.amazonaws.com/7d0fbc105fba74400d60bc5549ed25b9/img/1200px-instagram-icon-2@2x.png"
          />
          <img
            className="facebook-logo-icon"
            alt="Facebook logo icon"
            src="https://generation-sessions.s3.amazonaws.com/7d0fbc105fba74400d60bc5549ed25b9/img/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4-2@2x.png"
          />
          <img
            className="youtube-logo-icone"
            alt="Youtube logo icone"
            src="https://generation-sessions.s3.amazonaws.com/7d0fbc105fba74400d60bc5549ed25b9/img/youtube-logo-icone-2@2x.png"
          />
          <img
            className="twitter-logo-vector"
            alt="Twitter logo vector"
            src="https://generation-sessions.s3.amazonaws.com/7d0fbc105fba74400d60bc5549ed25b9/img/twitter-logo-vector-png-clipart-1-4@2x.png"
          />
        </div>
      </div>
      <div className="footer_description">
        <p>
          © 2022 Chhotastock Technologies Private Limited. All rights reserved.
          CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.
          <br />
          <br />
          Chhotastock Technologies builds platforms &amp; investment products to
          invest better in Indian investment asset classes. <br />
          Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market
          risks. Read all the related documents before investing. Investors
          should consider all risk factors and consult their financial advisor
          before investing
          <br />
          <br />
          Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR
          Layout Sector 6, Bengaluru, Karnataka - 560102, India
          <br />
          <br />
          For any query / feedback / clarifications, email at
          contact@chhotastock.com
          <br />
          <br />
          All Investment ideas, model portfolios &amp; advisory are built by
          SEBI Registered Investment advisors (RIAs) &amp; Chhotastock only
          facilitates investments
          <br />
          in such baskets, portfolios.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
