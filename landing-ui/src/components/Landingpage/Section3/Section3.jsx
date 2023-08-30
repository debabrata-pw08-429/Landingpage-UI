import "./section3.css";
import hand_image from "../../../assets/hand_image.png";

const Section3 = () => {
  return (
    <section className="section3">
      <div className="s3_details">
        <h3>Connect your platform finances now with InvestPe Gateway</h3>
        <p>
          We help brokers, wealth managers, fund managers & other businesses /
          startups server their customers better with our suite of modern
          digital investment stack
        </p>
        <button>Try Investpe Now</button>
      </div>
      <div className="s3_hand_image">
        <img src={hand_image} alt="hand image" />
      </div>
    </section>
  );
};

export default Section3;
