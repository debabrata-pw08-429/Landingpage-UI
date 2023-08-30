import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Homepage/Navbar/Navbar";
import Section1 from "../components/Homepage/Section1/Section1";
import Section2 from "../components/Homepage/Section2/Section2";
import Section3 from "../components/Homepage/Section3/Section3";
import Section5 from "../components/Landingpage/Section5/Section5";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Footer />
    </>
  );
};

export default HomePage;
