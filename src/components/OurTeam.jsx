import React from 'react';
import './OurTeamStyles.css'; // Pastikan path ke CSS relatif terhadap posisi file JSX ini
import OurTeamData from './OurTeamData'; // Pastikan path ini benar dan tidak ada spasi tambahan

import Team from "./../assets/jhon.jpg";
import Team2 from "./../assets/jane.jpg";
import Team3 from "./../assets/Emely.jpg";


function OurTeam() {
  return (
    <div className="team-section">
      <div className="container">
      <h1>Meet Our Travel Experts</h1>
      <p>Bringing You the World, One Journey at a Time</p>
      </div>
      
      <div className="team-member">
        <OurTeamData
          image={Team}
          heading="Jhon  Doe"
          text= "Founder & CEO"
          moto = "Passionate about crafting your perfect itinerary"
        />
        <OurTeamData
          image={Team2}
          heading="Jane Smith"
          text="Travel Consultant"
          moto = "Adventure awaits. Let's find it together."
        />
        <OurTeamData
          image={Team3}
          heading="Emily Davis"
          text="Customer Service Lead"
          moto = "Dedicated to making your trip unforgettable."
        />

          </div>
    </div>
  );
}

export default OurTeam;
