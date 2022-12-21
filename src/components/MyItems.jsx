import "./MyItems.css";
import vector3 from "../assets/vector3.svg";
const MyItems = (props) => {
  return (
    <div className={`my-items ${props.className || ""}`}>
      <img className="vector" src={vector3} />
      <span className="text-4">{props.text || "My items"}</span>
    </div>
  );
};
export default MyItems;
