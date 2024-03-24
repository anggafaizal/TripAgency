import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "./../assets/dubai.jpg";
import Trip2 from "./../assets/newzeland.jpg";
import Trip3 from "./../assets/malaysia.webp";
import Trip4 from "./../assets/Thailand.webp";
import Trip5 from "./../assets/Australia.webp";
import Trip6 from "./../assets/singapore.jpg";

function Trip() {
  return (
    <div className="trip">
      <div className="container">
      <h1>Discover New Horizons</h1>
      <p>Embark on a journey to the world's most enchanting locales with us.</p>
      </div>
      
      <div className="tripcard">
      <TripData
      image={Trip1}
      heading="Trip to Dubai"
      text="Explore the wonders of Dubai, where futuristic skylines meet rich Arabian culture. Marvel at the towering Burj Khalifa, enjoy the sprawling shopping malls, and experience luxury in the desert oasis."
        />

    <TripData
      image={Trip2}
      heading="Journey to New Zealand"
      text="Discover New Zealand's breathtaking landscapes, from the majestic Fiordland National Park to the tranquil shores of Bay of Islands. Adventure awaits in this land of the long white cloud."
      />

    <TripData
     image={Trip3}
      heading="Adventure in Malaysia"
     text="Experience the vibrant mix of cultures in Malaysia. Enjoy the bustling streets of Kuala Lumpur, tranquil beaches of Langkawi, and the culinary delights found in Penang's street food."
      />
      </div>

          
      <div className="tripcard">
      <TripData
     image={Trip4}
      heading="Escape to Thailand"
      text="Thailand awaits with its exquisite beaches, ornate temples, and lively nightlife. From the tranquility of Chiang Mai to the excitement of Bangkok, a trip to Thailand is sure to enchant."
      />

    <TripData
      image={Trip5}
      heading="Explore Australia"
      text="Venture into the diverse landscapes of Australia. Dive into the Great Barrier Reef, roam the vast Outback, and discover the dynamic cities of Sydney and Melbourne."
/>

    <TripData
     image={Trip6}
      heading="Experience Singapore"
      text="Singapore offers a blend of modernity and tradition. Enjoy the stunning Gardens by the Bay, shop on Orchard Road, and indulge in the rich food tapestry of this city-state."
    />

          </div>
    </div>
  );
}

export default Trip;
