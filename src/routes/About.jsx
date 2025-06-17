import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import heroImage from "../assets/about.jpg";
import AboutComp from "../components/AboutComp";
export default function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={heroImage} title="About" />
      <AboutComp
        heading="🌍Our History"
        text="Founded with a passion for discovery and a love for storytelling, Trippy began as a small blog in 2019 where two travel enthusiasts shared their unforgettable journeys across hidden gems of the world.
         What started as a personal passion quickly grew into a vibrant community of fellow explorers seeking unique experiences, local cultures, and unforgettable memories.
         Over the years, Trippy has transformed into a full-fledged travel platform connecting thousands of travelers with hand-picked destinations, 
         expert travel guides, and authentic adventures. From the tranquil beaches of the Maldives to the bustling streets of Tokyo, we’ve helped dreamers become explorers.
         At Tippy, we believe that travel isn’t just about places it’s about people, stories, and moments that stay with you forever. Join us as we continue to explore, inspire, and connect the world one journey at a time."
      />
      <AboutComp
        heading="🎯Our Mission"
        text="At Trippy, our mission is to make travel meaningful, safe, and accessible for everyone. 
        We aim to inspire people to explore the world through carefully curated experiences, reliable travel guidance, 
        and trusted connections. Whether it’s a weekend getaway or a once-in-a-lifetime journey, 
        we are committed to helping you travel smarter, deeper, and happier."
      />
      <AboutComp
        heading="🌟Our Vision"
        text="Our vision is to become the most trusted travel companion across the globe a platform where travelers of all backgrounds find inspiration, 
        plan confidently, and connect with cultures in a respectful and authentic way. We envision a world where travel empowers personal growth, bridges communities, 
        and fosters a deeper appreciation for our planet."
      />
      <Footer />
    </>
  );
}
