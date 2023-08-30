import "./section6.css";

import Mutual from "../../../assets/mututalfunds.svg";
import Equity from "../../../assets/Indian Equity.svg";
import Deposits from "../../../assets/Fixed Deposits.svg";
import Gold from "../../../assets/Digital Gold.svg";

const Section6 = () => {
  return (
    <section className="section6">
      <div className="section6_headings">
        <h3>How would you like to work with us?</h3>
        <p>
          Tell us more about yourself, and we’ll reach <br />
          out to you as soon as possible.
        </p>
      </div>
      <div className="section6_inputs">
        <div className="input_fields">
          <label>
            Work email <br />
            <input type="text" placeholder="abc@xyz.com" />
          </label>
          <label>
            Company Name <br />
            <input type="text" />
          </label>
          <label>
            Mobile Number <br />
            <input type="text" />
          </label>
        </div>

        <div>
          <p>Which products are you interested in?</p>
          <div className="section6_box">
            <div className="section6_card">
              <div>
                <h3>Mutual Funds</h3>
                <p>E2E infrastructure for mutual fund investing</p>
              </div>
              <img src={Mutual} alt="" />
            </div>
            <div className="section6_card">
              <div>
                <h3>Indian Equity</h3>
                <p>Stock gateway & stock baskets</p>
              </div>
              <img src={Equity} alt="" />
            </div>
            <div className="section6_card">
              <div>
                <h3>Digital Gold</h3>
                <p>Buy & Sell digital gold hassle free</p>
              </div>
              <img src={Gold} alt="" />
            </div>
            <div className="section6_card">
              <div>
                <h3>Fixed Deposits</h3>
                <p>Book FDs in 1click w/o opening a bank ac</p>
              </div>
              <img src={Deposits} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="section6_submit">
        <button>Submit</button>
      </div>
    </section>
  );
};

export default Section6;
