import "./UserProfileCard.css";
import userbackground from "../assets/userbackground.svg";
import userAvatar from "../assets/userAvatar.svg";
import MyItems from "./MyItems";
import Divider from "./Divider";
import StartupAbout from "./StartupAbout";
import StartupStage from "./StartupStage";
import UserName from "./UserName";
import StartupStage1 from "./StartupStage1";
const UserProfileCard = (props) => {
  return (
    <div className={`user-profile-card-1 ${props.className || ""}`}>
      <Divider className="divider-instance" {...props.divider1} />
      <Divider className="divider-instance-1" {...props.divider} />
      <div className="vector-1">
        <div className="flex-container-2">
          <img
            className="userbackground"
            {...props.userbackground}
            src={userbackground}
          />
          <img className="user-avatar" {...props.userAvatar} src={userAvatar} />
          <UserName className="user-name-instance-1" {...props.userName} />
        </div>
        <div className="flex-container-3">
          <StartupStage
            className="startup-stage-instance-1"
            {...props.startupStage}
          />
          <StartupStage1
            className="startup-stage-instance-3"
            {...props.startupStage1}
          />
        </div>
        <StartupAbout
          className="startup-about-instance-1"
          {...props.startupAbout}
        />
        <MyItems className="my-items-instance-1" {...props.myItems} />
      </div>
    </div>
  );
};
export default UserProfileCard;
