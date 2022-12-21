import "./App.css";
import vector2 from "./assets/vector2.svg";
import userIcon from "./assets/userIcon.svg";
import vector1 from "./assets/vector1.svg";
import icon from "./assets/icon.svg";
import iconsEmojiNerd2 from "./assets/iconsEmojiNerd2.svg";
import ellipse22 from "./assets/ellipse22.svg";
import vector12 from "./assets/vector12.svg";
import ellipse25 from "./assets/ellipse25.svg";
import vector4 from "./assets/vector4.svg";
import vector14 from "./assets/vector14.svg";
import ellipse251 from "./assets/ellipse251.svg";
import buttonIcon from "./assets/buttonIcon.svg";
import iconsEmojiShocked from "./assets/iconsEmojiShocked.svg";
import iconsEmojiShocked2 from "./assets/iconsEmojiShocked2.svg";
import vector from "./assets/vector.svg";
import ellipse27 from "./assets/ellipse27.svg";
import linkedin from "./assets/linkedin.svg";
import vector6 from "./assets/vector6.svg";
import vector24 from "./assets/vector24.svg";
import vector20 from "./assets/vector20.svg";
import vector18 from "./assets/vector18.svg";
import vector22 from "./assets/vector22.svg";
import window from "./assets/window.svg";
import vector10 from "./assets/vector10.svg";
import vector16 from "./assets/vector16.svg";
import footer from "./assets/footer.svg";
import star1 from "./assets/star1.svg";
import vector8 from "./assets/vector8.svg";
import iconsEmojiNerd from "./assets/iconsEmojiNerd.svg";
import NavBar from "./components/NavBar";
import UserProfileCard from "./components/UserProfileCard";
import Filtering from "./components/Filtering";
import FundOrVcCard from "./components/FundOrVcCard";
const App = () => {
  const propsData = {
    navBar: {
      logo: "Logo",
      jobs: "Jobs",
      company: "Company",
      dashboard: "Dashboard",
      star1: star1,
      searchField: {
        descriptiveText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        label: "Label",
        button: {
          label: "",
          buttonIcon: buttonIcon,
        },
        placeholder: "Placeholder",
      },
      icon: icon,
      applicants: "Applicants",
    },
    userProfileCard: {
      userProfileCard: {
        myItems: {
          text: "My items",
        },
        startupAbout: {
          text: "far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ",
        },
        userName: {
          name: "dan Kolodny",
          company: "The Best Startup",
          position: "ceo",
        },
        startupStage: {
          fundingStage: "Funding \nStage",
          input: "Seed",
        },
        userAvatar: {
          vector24: vector24,
        },
        startupStage1: {
          input: "3M",
          fundingStage: "Total funding",
        },
      },
    },
    filtering: {
      text: "Apply",
      filterType: {
        title: "Sector",
      },
      filter: "filter",
      filterType1: {
        title: "Sub sector",
      },
      filterType1: {
        title: "Stage ",
      },
    },
    fundOrVcCard: {
      ellipse23: ellipse22,
      row1: {
        text: "B2B",
        text: "Person ",
        text: "MedTech",
        text: "Undisclosed",
      },
      text: "round",
      userIcon11: {
        vector1: vector1,
        vector: vector4,
      },
      meter: {
        ellipse27: ellipse27,
        iconsEmojiNerd: iconsEmojiNerd,
        ellipse25: ellipse25,
        iconsEmojiShocked: iconsEmojiShocked,
      },
      fundingChip2: {
        sortBy: "Sort by",
      },
      userIcon13: {
        vector: vector2,
        vector1: vector1,
      },
      row2: {
        text: "B2B",
        text: "MedTech",
        text: "Person ",
        text: "Undisclosed",
      },
      fundingChip: {
        sortBy: "Sort by",
      },
      ellipse22: ellipse22,
      userIcon1: {
        vector: vector6,
        vector1: vector1,
      },
      obFund: "ob fund",
      userIcon: userIcon,
      text: "Message",
      text: "Sub sector",
      text: "Company Name",
      fundingChip1: {
        sortBy: "Sort by",
      },
      userIcon12: {
        vector: vector,
        vector1: vector1,
      },
      num10MutualConecti: "10 mutual conections",
      row: {
        text: "B2B",
        text: "MedTech",
        text: "Person ",
        text: "Undisclosed",
      },
      ellipse24: ellipse22,
      text: "sector",
      linkedin: linkedin,
    },
    fundOrVcCard1: {
      userIcon1: {
        vector: vector14,
        vector1: vector1,
      },
      userIcon13: {
        vector: vector10,
        vector1: vector1,
      },
      fundingChip: {
        sortBy: "Sort by",
      },
      obFund: "ob fund",
      linkedin: linkedin,
      userIcon11: {
        vector: vector12,
        vector1: vector1,
      },
      text: "Sub sector",
      row1: {
        text: "MedTech",
        text: "B2B",
        text: "Undisclosed",
        text: "Person ",
      },
      meter: {
        iconsEmojiNerd: iconsEmojiNerd,
        ellipse25: ellipse251,
        ellipse27: ellipse27,
        iconsEmojiShocked: iconsEmojiShocked,
      },
      row: {
        text: "Person ",
        text: "Undisclosed",
        text: "MedTech",
        text: "B2B",
      },
      text: "sector",
      text: "Company Name",
      fundingChip1: {
        sortBy: "Sort by",
      },
      text: "Message",
      fundingChip2: {
        sortBy: "Sort by",
      },
      row2: {
        text: "Person ",
        text: "MedTech",
        text: "B2B",
        text: "Undisclosed",
      },
      userIcon: userIcon,
      ellipse23: ellipse22,
      num10MutualConecti: "10 mutual conections",
      userIcon12: {
        vector: vector8,
        vector1: vector1,
      },
      ellipse24: ellipse22,
      ellipse22: ellipse22,
      text: "round",
    },
    fundOrVcCard2: {
      ellipse22: ellipse22,
      userIcon12: {
        vector: vector16,
        vector1: vector1,
      },
      text: "Sub sector",
      text: "round",
      fundingChip1: {
        sortBy: "Sort by",
      },
      ellipse23: ellipse22,
      text: "Message",
      ellipse24: ellipse22,
      userIcon: userIcon,
      num10MutualConecti: "10 mutual conections",
      text: "sector",
      fundingChip: {
        sortBy: "Sort by",
      },
      fundingChip2: {
        sortBy: "Sort by",
      },
      meter: {
        ellipse25: ellipse251,
        iconsEmojiNerd: iconsEmojiNerd2,
        ellipse27: ellipse27,
        iconsEmojiShocked: iconsEmojiShocked2,
      },
      linkedin: linkedin,
      userIcon13: {
        vector: vector18,
        vector1: vector1,
      },
      row: {
        text: "Person ",
        text: "MedTech",
        text: "Undisclosed",
        text: "B2B",
      },
      obFund: "ob fund",
      userIcon1: {
        vector1: vector1,
        vector: vector22,
      },
      row2: {
        text: "MedTech",
        text: "B2B",
        text: "Person ",
        text: "Undisclosed",
      },
      text: "Company Name",
      row1: {
        text: "B2B",
        text: "Undisclosed",
        text: "Person ",
        text: "MedTech",
      },
      userIcon11: {
        vector: vector20,
        vector1: vector1,
      },
    },
  };
  return (
    <div className="home-page">
      <NavBar className="nav-bar-instance-1" {...propsData.navBar} />
      <div className="flex-container">
        <UserProfileCard
          className="user-profile-card-instance-1"
          {...propsData.userProfileCard}
        />
        <div className="flex-container-1">
          <Filtering
            className="filtering-instance-1"
            {...propsData.filtering}
          />
          <div className="window">
            <FundOrVcCard
              className="fund-or-vc-card-instance-1"
              {...propsData.fundOrVcCard}
            />
            <FundOrVcCard
              className="fund-or-vc-card-1-instance"
              {...propsData.fundOrVcCard1}
            />
            <FundOrVcCard
              className="fund-or-vc-card-2-instance"
              {...propsData.fundOrVcCard2}
            />
          </div>
        </div>
      </div>
      <img className="window-1" src={window} />
      <img className="footer" src={footer} />
    </div>
  );
};
export default App;
