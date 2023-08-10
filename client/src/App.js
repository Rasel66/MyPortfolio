import './App.css';
import Layout from './components/Layout/Layout';
import MobileNav from './components/MobileNav/MobileNav';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Educations/Education';
import Footer from './pages/Footer/Footer';
import Projects from './pages/Projects/Projects';
import Techstack from './pages/TechStack/Techstack';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <MobileNav/>
      <Layout/>
      <About/>
      <Education/>
      <Techstack/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollToTop color='white' smooth style={{background:"#1e1e2c"}} />
    </>
  );
}

export default App;
