import "./NavBar.css";
import icon from "../assets/icon.svg";
import star1 from "../assets/star1.svg";
import image from "../assets/image.png";
import SearchField from "./SearchField";
const NavBar = (props) => {
  return (
    <div className={`nav-bar ${props.className || ""}`}>
      <img className="star-1" src={props.star1 || star1} />
      <span className="logo">{props.logo || "Logo"}</span>
      <span>{props.dashboard || "Dashboard"}</span>
      <span>{props.jobs || "Jobs"}</span>
      <span className="applicants">{props.applicants || "Applicants"}</span>
      <span className="company">{props.company || "Company"}</span>
      <SearchField className="search-field-instance-1" {...props.searchField} />
      <img className="icon" src={props.icon || icon} />
      <img className="image" src={image} />
    </div>
  );
};
export default NavBar;
