import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Enterprize from "./Components/Enterprize";
import Support from "./Components/Support";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <div className="con">
      <div>
        <Header />
      </div>
      <div className="middle">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/enterprize" element={<Enterprize />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
