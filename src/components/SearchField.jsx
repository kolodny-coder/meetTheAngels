import "./SearchField.css";
import Button from "./Button";
const SearchField = (props) => {
  return (
    <div className={`search-field ${props.className || ""}`}>
      <div className="input-1">
        <span>{props.placeholder || "Placeholder"}</span>
        <Button className="button-instance-1" {...props.button} />
      </div>
    </div>
  );
};
export default SearchField;
