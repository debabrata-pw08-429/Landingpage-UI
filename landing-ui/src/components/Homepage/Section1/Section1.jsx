import "./section1.css";
import phoneImage from "../../../assets/image 154.png";

const Section1 = () => {
  let stylingObj = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Gilroy",
    fontSize: "50px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    width: "550px",
  };
  return (
    <section>
      <div style={{ background: "#171E27" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={stylingObj}>Knowledge Based Investing & Trading</h1>
        </div>

        <div>
          <h3
            style={{
              textAlign: "center",
              fontSize: "26px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              color: "#FFF",
            }}
          >
            Ready-made solutions + Deep Research + Disciplined Investing +
            Advanced Trading tools
          </h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={phoneImage} alt="img" />
        </div>
      </div>

      <div style={{ height: "25vh" }}></div>
    </section>
  );
};

export default Section1;
