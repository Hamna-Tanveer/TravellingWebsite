import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/island.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={heroImage} title="Contact" />
      <ContactForm />

      <Footer />
    </>
  );
}
