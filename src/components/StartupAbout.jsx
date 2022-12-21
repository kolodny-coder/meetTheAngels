import "./StartupAbout.css";
const StartupAbout = (props) => {
  return (
    <div className={`startup-about ${props.className || ""}`}>
      <span className="text-5">
        {props.text ||
          "far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. "}
      </span>
    </div>
  );
};
export default StartupAbout;
