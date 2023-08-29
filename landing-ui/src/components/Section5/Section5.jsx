import kotak from "../../assets/image 12.png";
import angelOne from "../../assets/image 13.png";
import upstock from "../../assets/image 14.png";
import IMFIx from "../../assets/image 15.png";
import lendbox from "../../assets/image 16.png";
import liqui from "../../assets/image 17.png";
import siply from "../../assets/image 3.png";
import jupiter from "../../assets/image 4.png";
import equites from "../../assets/image 18.png";
import "./section5.css";

const Section5 = () => {
  return (
    <section className="container">
      <div className="column-container">
        <div className="partner-text">
          <p>Some partners who make InvestPe products possible—</p>
        </div>
        <div className="image-grid">
          <img src={kotak} alt="img" />
          <img src={angelOne} alt="img" />
          <img src={upstock} alt="img" />
          <img src={IMFIx} alt="img" />
          <img src={lendbox} alt="img" />
          <img src={liqui} alt="img" />
          <img src={equites} alt="img" />
        </div>
      </div>
      <div className="column-container">
        <div className="partner-text">
          <p>
            ...and a few of the businesses building some incredible solutions
            with InvestPe
          </p>
        </div>

        <div className="small-image">
          <div className="small-image-container">
            <img src={siply} alt="img" className="small-image" />
          </div>
          <div className="small-image-container">
            <img src={jupiter} alt="img" className="small-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
