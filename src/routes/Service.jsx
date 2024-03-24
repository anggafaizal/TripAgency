import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "./../assets/homehero.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our  Services"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
