import TripData from "./TripData";
import "./TripStyles.css";
import TripImage1 from "../assets/paris.jpg";
import TripImage2 from "../assets/japanTrip.jpg";
import TripImage3 from "../assets/turkey.jpg";
export default function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>Relive the moments from our latest adventures around the world!</p>
        <div className="TripCard">
          <TripData
            image={TripImage1}
            heading="Paris"
            text="Our recent trip to Paris was nothing short of enchanting. 
        From the charming cafés of Montmartre to the breathtaking views from the Eiffel Tower,
         every corner of the City of Light told its own beautiful story. 
         We wandered through historic streets, admired world-class art at the Louvre, 
        and savored buttery croissants with morning sunshine, a truly unforgettable experience."
          />
          <TripData
            image={TripImage2}
            heading="Japan"
            text="Our recent journey to Japan was a perfect blend of tradition and modern marvels. 
            From the peaceful temples of Kyoto to the dazzling neon lights of Tokyo, every moment was rich with culture, 
            flavor, and discovery. Whether wandering through ancient shrines, enjoying cherry blossoms in full bloom, 
            or savoring sushi crafted by masters, Japan left us inspired and am"
          />
          <TripData
            image={TripImage3}
            heading="Turkey"
            text="Turkey welcomed us with vibrant markets, historical wonders, and warm hospitality. 
            From the majestic Hagia Sophia in Istanbul to the fairytale landscapes of Cappadocia, 
            every stop told a story of empires and enchantment. We strolled through spice bazaars, cruised the Bosphorus, 
            and tasted rich Turkish cuisine—an unforgettable journey through time and culture"
          />
        </div>
      </div>
    </>
  );
}
