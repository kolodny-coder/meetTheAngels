import "./Button.css";
import buttonIcon from "../assets/buttonIcon.svg";
const Button = (props) => {
  return (
    <div className={`button-1 ${props.className || ""}`}>
      <img className="button-icon" src={props.buttonIcon || buttonIcon} />
      <span className="label">{props.label || ""}</span>
    </div>
  );
};
export default Button;
