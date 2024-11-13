import "./App.css";
// import mr from "../public/mr.jpeg";
import Navbar from "./components/layout/Navbar";
import MyCarrousel from "./components/carrousel/MyCarrousel";
import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import Frame from "./components/frame/Frame";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <MyCarrousel />
        <AboutMe />
        <Frame />
        <Footer />
      </div>
    </div>
  );
}

export default App;
