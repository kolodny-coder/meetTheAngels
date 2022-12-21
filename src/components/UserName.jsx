import "./UserName.css";
const UserName = (props) => {
  return (
    <div className={`user-name ${props.className || ""}`}>
      <span className="name">{props.name || "dan Kolodny"}</span>
      <span className="position">{props.position || "ceo"}</span>
      <span>{props.company || "The Best Startup"}</span>
    </div>
  );
};
export default UserName;
