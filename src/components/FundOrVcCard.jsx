import "./FundOrVcCard.css";
import userIcon1 from "../assets/userIcon1.svg";
import meter from "../assets/meter.svg";
import userIcon2 from "../assets/userIcon2.svg";
import userIcon4 from "../assets/userIcon4.svg";
import vector9 from "../assets/vector9.svg";
import linkedin from "../assets/linkedin.svg";
import userIcon from "../assets/userIcon.svg";
import button from "../assets/button.svg";
import userIcon3 from "../assets/userIcon3.svg";
import Divider from "./Divider";
import FundingChip from "./FundingChip";
import Row from "./Row";
const FundOrVcCard = (props) => {
  return (
    <div className={`fund-or-vc-card ${props.className || ""}`}>
      <div className="vector-4">
        <div className="flex-container-5">
          <img className="vector-9" src={vector9} />
          <div className="flex-container-6">
            <div className="flex-container-7">
              <span className="ob-fund">{props.obFund || "ob fund"}</span>
              <img className="linkedin" src={props.linkedin || linkedin} />
            </div>
            <div className="flex-container-8">
              <FundingChip
                className="funding-chip-instance-3"
                {...props.fundingChip1}
              />
              <FundingChip
                className="funding-chip-instance-1"
                {...props.fundingChip}
              />
              <FundingChip
                className="funding-chip-instance-2"
                {...props.fundingChip2}
              />
            </div>
            <div className="flex-container-9">
              <div className="flex-container-10">
                <img
                  className="user-icon"
                  {...props.userIcon1}
                  src={userIcon4}
                />
                <img
                  className="user-icon-1"
                  {...props.userIcon11}
                  src={userIcon3}
                />
                <img
                  className="user-icon-2"
                  {...props.userIcon13}
                  src={userIcon2}
                />
                <img
                  className="user-icon-3"
                  {...props.userIcon12}
                  src={userIcon1}
                />
                <img className="user-icon-4" src={props.userIcon || userIcon} />
              </div>
              <span className="num-10-mutual-conecti">
                {props.num10MutualConecti || "10 mutual conections"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-container-11">
          <img className="button" src={button} />
          <button className="rectangle-62-1">{props.text || "Message"}</button>
        </div>
        <div className="flex-container-12">
          <span className="text-7">{props.text || "Company Name"}</span>
          <span className="text-8">{props.text || "sector"}</span>
          <span className="text-9">{props.text || "Sub sector"}</span>
          <span className="text-10">{props.text || "round"}</span>
        </div>
        <Row className="row-instance-1" {...props.row} />
        <Row className="row-instance-2" {...props.row1} />
        <Row className="row-instance-3" {...props.row2} />
      </div>
      <Divider className="divider-instance-3" {...props.divider} />
      <img className="meter" {...props.meter} src={meter} />
    </div>
  );
};
export default FundOrVcCard;
