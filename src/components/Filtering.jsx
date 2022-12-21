import "./Filtering.css";
import FilterType1 from "./FilterType1";
import FilterType from "./FilterType";
const Filtering = (props) => {
  return (
    <div className={`filtering ${props.className || ""}`}>
      <div className="rectangle-38">
        <div className="flex-container-4">
          <span className="filter">{props.filter || "filter"}</span>
          <FilterType
            className="filter-type-instance-2"
            {...props.filterType}
          />
        </div>
        <FilterType className="filter-type-instance-3" {...props.filterType1} />
        <FilterType1
          className="filter-type-instance-4"
          {...props.filterType1}
        />
        <div className="rectangle-62">
          <span className="text-6">{props.text || "Apply"}</span>
        </div>
      </div>
    </div>
  );
};
export default Filtering;
