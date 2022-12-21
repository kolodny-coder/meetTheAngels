import "./FilterType1.css";
import vector2 from "../assets/vector2.svg";
const FilterType1 = (props) => {
  return (
    <div className={`filter-type-1 ${props.className || ""}`}>
      <span className="title">{props.title || "Stage "}</span>
      <img className="vector-2" src={vector2} />
    </div>
  );
};
export default FilterType1;
