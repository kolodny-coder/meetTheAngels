import "./FilterType.css";
import vector from "../assets/vector.svg";
const FilterType = (props) => {
  return (
    <div className={`filter-type ${props.className || ""}`}>
      <span className="title-1">{props.title || "Sector"}</span>
      <img className="vector-3" src={vector} />
    </div>
  );
};
export default FilterType;
