import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Landingpage/Navbar/Navbar";
import Section1 from "../components/Landingpage/Section1/Section1";
import Section2 from "../components/Landingpage/Section2/Section2";
import Section3 from "../components/Landingpage/Section3/Section3";
import Section5 from "../components/Landingpage/Section5/Section5";
import Section6 from "../components/Landingpage/Section6/Section6";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
};

export default LandingPage;
