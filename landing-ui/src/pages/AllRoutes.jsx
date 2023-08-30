import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
