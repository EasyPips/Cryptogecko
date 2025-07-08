import Navbar from "./Navbar";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className=" bg-black capitalize text-white font-sans">
      <Navbar />

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I am <span className="text-emerald-400">Emmanuel olaoye </span>
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          A seasoned <span className="text-emerald-400">Frontend Developer</span> transforming ideas into stunning
          digital experiences. Let's create something amazing!
        </p>
        <div className="flex justify-center gap-4 text-xl text-white">
         <a href="">
            
            <FaLinkedin />
           </a> 
          <FaGithub />
          <FaTwitter />
          <FaEnvelope />
        </div>
      </section>

      <section className="bg-gray-900 py-24 px-4 text-center">
        <h3 className="text-3xl font-bold text-emerald-400 mb-8">What I do.</h3>
        <div className="">
          <div className="bg-emerald-500 text-lack p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2">Web Development</h4>
            <p>
              I use my knowledge of HTML, CSS, JavaScript, ReactJS to build digital
              solutions for users.
            </p>
          </div>
        </div>
      </section>

      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
