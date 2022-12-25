import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Service from "./routes/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
