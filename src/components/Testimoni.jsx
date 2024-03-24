import React from 'react';
import './TestimoniStyles.css'; // Pastikan path ke CSS relatif terhadap posisi file JSX ini
import TestimoniData from './TestimoniData'; // Pastikan path ini benar dan tidak ada spasi tambahan
// ... komponen atau kode lainnya di sini
import Team from "./../assets/chena.jpg";
import Team2 from "./../assets/tara.jpg";
import Team3 from "./../assets/morgan.jpg";


function Testimoni() {
  return (
    <div className="testi">
      <div className="container">
      <h1>Testimonials</h1>
      <p>Bringing You the World, One Journey at a Time</p>
      </div>
      
      <div className="testi-member">
      <TestimoniData
          image={Team}
          heading="John Chena"
          testimoni="Choosing TripAgency was a leap of faith for me, but now I can't imagine working with anyone else for my travel needs. The dedication and detail they put into every itinerary is unmatched."
        />
        <TestimoniData
          image={Team2}
          heading="Jane Tara"
          testimoni="As a frequent traveler, I've worked with many travel consultants. None have shown the expertise and enthusiasm that I've found with TripAgency. They truly make travel planning an exciting endeavor."
        />
        <TestimoniData
          image={Team3}
          heading="Emily Morgan"
          testimoni="The level of support and efficiency from TripAgency's customer service team has been phenomenal. Every trip feels personalized and their attention to detail makes all the difference."
          />
          </div>
    </div>
  );
}

export default Testimoni;
