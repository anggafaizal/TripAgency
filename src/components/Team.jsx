import React from 'react';
import './TeamStyles.css'; // Pastikan path ke CSS relatif terhadap posisi file JSX ini
import TeamData from './OurTeamData'; // Pastikan path ini benar dan tidak ada spasi tambahan
import Team from "./../assets/jhon.jpg";
import Team2 from "./../assets/jane.jpg";
import Team3 from "./../assets/Emely.jpg";
import Team4 from "./../assets/david.jpg";
import Team5 from "./../assets/jordan.jpg";
import Team6 from "./../assets/casie.jpg";



function Tim() {
  return (
    <div className="team-section">
      <div className="container">
      <h1>Meet Our Travel Experts</h1>
      <p>Bringing You the World, One Journey at a Time</p>
      </div>
      
      <div className="team-member">
        <TeamData
          image={Team}
          heading="Jhon  Doe"
          text= "Founder & CEO"
          moto = "Passionate about crafting your perfect itinerary"
        />
        <TeamData
          image={Team2}
          heading="Jane Smith"
          text="Travel Consultant"
          moto = "Adventure awaits. Let's find it together."
        />
        <TeamData
          image={Team3}
          heading="Emily Davis"
          text="Customer Service Lead"
          moto = "Dedicated to making your trip unforgettable."
        />
          </div>
          
          <div className="team-member">
          <TeamData
            image={Team4}
            heading="David"
            text="Staff"
            moto="Committed to turning your travel dreams into reality."
          />
          <TeamData
            image={Team5}
            heading="Jordan"
            text="Staff"
            moto="Exploring the globe, one satisfied traveler at a time."
          />
          <TeamData
            image={Team6}
            heading="Cassie"
            text="Staff"
            moto="Your personal guide to the world's hidden wonders."
/>
          </div>

    </div>
  );
}

export default Tim;
