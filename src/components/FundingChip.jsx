import "./FundingChip.css";
const FundingChip = (props) => {
  return (
    <div className={`funding-chip ${props.className || ""}`}>
      <div className="rectangle-76">{props.sortBy || "Sort by"}</div>
    </div>
  );
};
export default FundingChip;
