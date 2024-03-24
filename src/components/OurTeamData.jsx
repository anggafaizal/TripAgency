import "./OurTeamStyles.css";

function OurTeamData(props) {
  return (
    <div className="team-card">
      <div className="team-image">
        <img src={props.image} alt="team" />
      </div>
      <h4 className="heading">{props.heading}</h4>
      <p className="jabatan">{props.text}</p>
      <p className="moto">{props.moto}</p>
    </div>
  );
}

export default OurTeamData;