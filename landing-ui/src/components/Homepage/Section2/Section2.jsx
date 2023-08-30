import iphone from "../../../assets/iphone.png";
import bike from "../../../assets/bike.png";
import laptop from "../../../assets/laptop.png";
import laptop2 from "../../../assets/laptop2.png";
import featuresback from "../../../assets/featuresback.png";
import pepperfry from "../../../assets/pepperfry.png";
import apple from "../../../assets/apple.png";
import myntra from "../../../assets/myntra.png";
import bounce from "../../../assets/bounce.png";
import amazon from "../../../assets/amazon.png";
import chroma from "../../../assets/chroma.png";
import caratlane from "../../../assets/caratlane.png";
import easemytrip from "../../../assets/easemytrip.png";
import "./section2.css";

const Section2 = () => {
  return (
    <section>
      <div className="nfb">
        <img
          src={featuresback}
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "40px",
            width: "90%",
          }}
        ></img>
        <div className="nfs1">
          <p className="nfp1">FEATURES</p>
          <p className="nfp2">SAVE NOW. BUY LATER. SIMPLE & REALISTIC </p>
          <p className="nfp3">
            Get what you love and save up over weeks or months to achieve it
            much lower price. Time & Flexibility on your side.
          </p>
          <div className="nfs1s">
            <button className="nfg">Get the App</button>
            <p style={{ textDecoration: "underline", fontWeight: "500" }}>
              Learn More
            </p>
          </div>
        </div>
        <div className="nfs2">
          <img className="nfb0" src={bounce}></img>
          <img className="nfb1" src={apple}></img>
          <img className="nfb2" src={myntra}></img>
          <img className="nfb3" src={amazon}></img>
          <img className="nfb4" src={chroma}></img>
          <img className="nfb5" src={caratlane}></img>
          <img className="nfb6" src={easemytrip}></img>
          <img className="nfb7" src={pepperfry}></img>
          <div className="nfs2s">
            <img className="nfi1" src={bike}></img>
            <div className="nflf">
              <img className="nfi2" src={laptop}></img>
              <img className="nfi" src={laptop2}></img>
            </div>

            <img className="nfi3" src={iphone}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
