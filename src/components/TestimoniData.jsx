import "./TestimoniStyles.css";

function TestimoniData(props) {
  return (
    <div className="testi-card">
      <div className="testi-image">
        <img src={props.image} alt="testimoni" />
      </div>
      <h4 className="heading">{props.heading}</h4>
      <p className="jabatan">{props.testimoni}</p>
    </div>
  );
}

export default TestimoniData;