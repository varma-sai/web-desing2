import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footerSection/Footer";
import Header from "./components/header/Header";
import WorldWide from "./pages/WorldWide";
import Symptoms from "./pages/Symptoms";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/worldWide" element={<WorldWide />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/needHelp" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
