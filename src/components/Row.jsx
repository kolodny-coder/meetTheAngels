import "./Row.css";
const Row = (props) => {
  return (
    <div className={`row ${props.className || ""}`}>
      <span className="text">{props.text || "Person "}</span>
      <span className="text-1">{props.text || "MedTech"}</span>
      <span className="text-2">{props.text || "B2B"}</span>
      <span className="text-3">{props.text || "Undisclosed"}</span>
    </div>
  );
};
export default Row;
