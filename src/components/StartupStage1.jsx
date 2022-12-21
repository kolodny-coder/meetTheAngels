import "./StartupStage1.css";
const StartupStage1 = (props) => {
  return (
    <div className={`startup-stage-1 ${props.className || ""}`}>
      <span className="input-2">{props.input || "3M"}</span>
      <span className="funding-stage-1">
        {props.fundingStage || "Total funding"}
      </span>
    </div>
  );
};
export default StartupStage1;
