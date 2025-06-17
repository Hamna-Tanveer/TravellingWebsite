import Image from "../assets/volcano.jpg";
import Image2 from "../assets/volcano2.jpg";
import Image3 from "../assets/seashore.jpg";
import Image4 from "../assets/beach.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
export default function () {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p className="oneLiner">
        Explore Top Tours & Discover Popular Destinations Around the World.
      </p>
      <DestinationData
        className="first-des"
        heading="Tala Volcano, Batangas"
        text="  Nestled in the heart of Batangas, Taal Volcano is one of the
          Philippines' most iconic natural wonders. Known as the world’s
          smallest active volcano, it offers a surreal blend of beauty and
          mystery. With its stunning crater lake and scenic surroundings, Taal
          is perfect for nature lovers, adventure seekers, and photographers
          alike. Whether you hike to the rim or enjoy a boat ride across the
          lake, every visit promises unforgettable views and thrilling
          experiences. Only a few hours from Manila, it’s the perfect escape for
          a day trip or weekend getaway."
        img1={Image}
        img2={Image2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Maldives"
        text="The Maldives is a tropical paradise in the Indian Ocean,
         famous for its crystal-clear turquoise waters, powdery white-sand beaches,
          and luxurious overwater villas. Perfect for honeymoons, diving adventures, 
          or peaceful retreats, the Maldives offers unmatched natural beauty and tranquility.
           With vibrant coral reefs, rich marine life, and world-class resorts, 
           it’s a dream destination for travelers seeking both relaxation and unforgettable experiences."
        img1={Image3}
        img2={Image4}
      />
    </div>
  );
}
