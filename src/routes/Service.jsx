import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/Mountains.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
export default function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={heroImage} title="Service" />
      <Trip />
      <Footer />
    </>
  );
}
