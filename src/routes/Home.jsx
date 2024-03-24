import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import AboutImg from "./../assets/homehero.jpg";
import Testimoni from "../components/Testimoni";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg= {AboutImg}
        title="Embark on Epic Adventures"
        text="Discover places that transform your dreams into memories."
        btnClass="show"
        buttonText="Start Your Adventure"
        url="/"
      />
      <Destination />
      <Testimoni/>
      <Footer />
    </>
  );
}

export default Home;
