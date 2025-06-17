import "./AboutStyles.css";
export default function AboutComp(props) {
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </div>
  );
}
