import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const App = () => (
  <div className="container mx-auto bg-black">

  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/projects" element={<Projects/>} />
      <Route  path="/about" element={<AboutMe />} />
      <Route  path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  </div>
);

export default App;
