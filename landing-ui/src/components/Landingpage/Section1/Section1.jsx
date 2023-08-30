import "./section1.css";
import bgPattern from "../../../assets/backframe.png";
import cardsPattern from "../../../assets/stack.png";

const Section1 = () => {
  return (
    <section className="section1">
      <img src={bgPattern}></img>
      <img src={cardsPattern}></img>
    </section>
  );
};

export default Section1;
