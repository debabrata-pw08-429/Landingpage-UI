import "./section2.css";
import Track from "../../../assets/activity-svgrepo.svg";
import Flexibility from "../../../assets/stick-svgrepo-com 1.svg";
import Easiness from "../../../assets/fire-minimalistic-svgrepo-com 1.svg";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="section2_details">
        <p>FEATURES</p>
        <h2>Launch the most Engaging Invest-Tech Solutions</h2>
        <p>
          We offer a suite of B2B Invest-tech solutions, that are cost-effective
          way to offer an engaging investment experience to your customers, with
          a faster time to market
        </p>
        <div className="cta_section2">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="section2_card_box">
        <div className="section2_card">
          <p>Protection</p>
          <img
            src="https://s3-alpha-sig.figma.com/img/dea7/3959/20d06e2718b399baeca965059234454a?Expires=1694390400&Signature=MI02XMlFbJcYQ2hhZN9dPtnvzxEF4nLlqe305w9Tm9iZOSF8OqZ9aWfBkRLLKvmjMbBx~cvSBIhurUhBmqgIM5njHx0FC-VHYDZ1xNqyFqFT6AZRerhoIjYJUDJvNGmS0QDBzKFttYhX02xC1YFFdujutC6q7toGvSVDwRy~s9Q45uvtiKr6MXYg2OeCuSEyTYNDhPgwtXUEWklSvzHMxXEey2CSeg9QfUwL8nwlSYXiMohB2WUTnzh5tClJ2aEDdvMAIeAgKGRo8HvhSw4S2O7P-Ln8z3tUQBxqPSAIUPsjlJbDpLfyNywMUCta7KGdmTaHOuDzjdBbYZZrvbqjzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Data protection guarentees"
          />
          <p>Data protection guarentees</p>
        </div>
        <div className="section2_card section2_card_active">
          <p>Tracking</p>
          <img src={Track} alt="Tracking" />
          <p>Track all your users’ financial transactions</p>
        </div>
        <div className="section2_card">
          <p>Flexibility</p>
          <img src={Flexibility} alt="Data protection guarentees" />
          <p>Custom made for your requirements</p>
        </div>
        <div className="section2_card">
          <p>Easiness</p>
          <img src={Easiness} alt="Easiness" />
          <p>Go-to market in less than 7 days</p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
