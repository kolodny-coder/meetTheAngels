import "./StartupStage.css";
const StartupStage = (props) => {
  return (
    <div className={`startup-stage ${props.className || ""}`}>
      <span className="input">{props.input || "Seed"}</span>
      <span className="funding-stage">
        {props.fundingStage || "Funding \nStage"}
      </span>
    </div>
  );
};
export default StartupStage;
