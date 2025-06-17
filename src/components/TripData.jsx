import "./TripStyles.css";

export default function TripData(props) {
  return (
    <div className="t-card">
      <div className="tripImage">
        <img src={props.image} alt="loading..." />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
