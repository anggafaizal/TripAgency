import React from "react";
import Mountain1 from "./../assets/lombok.jpg";
import Mountain2 from "./../assets/lombok2.webp";
import Mountain3 from "./../assets/paris.jpg";
import Mountain4 from "./../assets/paris2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
      <div class="container">
          <h1>Explore the Wonders with Us</h1>
         <p>Embark on a journey through breathtaking landscapes and vibrant cultures, all within your reach.</p>
      </div>
        <DestinationData
          className="first-des"
          heading="Lombok, Nusa Tenggara Barat"
          text="Lombok, an enchanting island nestled in West Nusa Tenggara, Indonesia, is a breathtaking blend of turquoise waters, lush greenery, and exquisite white sand beaches. Renowned for the majestic Mount Rinjani, the second-highest volcano in Indonesia, Lombok captivates adventurers with its challenging treks leading to mesmerizing crater lakes. The island is also a haven for surfers, with spots like Kuta and Senggigi offering some of the best waves in the region. Beyond its natural beauty, Lombok is rich in Sasak culture, evident in its traditional weaving, pottery, and the iconic Sasak village of Sade. With its tranquil Gili Islands, vibrant marine life, and serene beaches, Lombok stands as a less crowded alternative to Bali, offering visitors a unique blend of adventure, culture, and relaxation."
          img1={Mountain1}
          img2={Mountain2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Paris, France"
          text="Paris, the capital city of France, is often hailed as the epitome of romance, art, and fashion. Encompassing the essence of love and beauty, it's home to iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral, each narrating centuries of history and innovation. The city's charming streets are lined with exquisite cafes, world-class restaurants, and chic boutiques, reflecting its deep-rooted influence in culinary arts and haute couture. The Seine River adds to its allure, offering picturesque views and tranquil boat rides. Paris captivates the imagination of travelers and dreamers alike, making it a timeless destination that continues to inspire through its cultural richness, architectural marvels, and an undeniable air of mystique and elegance."
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
