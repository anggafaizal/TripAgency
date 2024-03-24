import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "./../assets/homehero.jpg";
import OurTeam from "../components/OurTeam";

function About() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
      <AboutUs />
      <OurTeam/>
      <Footer />
    </>
  );
}

export default About;
