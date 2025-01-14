import { useNavigate } from "react-router-dom";
import "./GNB.css";
import EditIcon from "@/image/gnbEdit.svg";
import HomeIcon from "@/image/gnbHome.svg";
import MailIcon from "@/image/gnbMail.svg";
import ProfileIcon from "@/image/gnbProfile.svg";
import SendIcon from "@/image/gnbSend.svg";

const GNB = () => {
  const navigate = useNavigate();
  return (
    <div className="gnbContainer">
      <div className="gnbWrapper">
        <div className="gnbHeader">
          <span>Main Menu</span>
        </div>
        <div className="gnbBody">
          <button className="gnbBtn" onClick={() => navigate("/")}>
            <img src={HomeIcon} alt="Home" />
            <span>Home</span>
          </button>
          <button className="gnbBtn" onClick={() => navigate("profile")}>
            <img src={ProfileIcon} alt="Edit" />
            <span>개인정보 입력하기</span>
          </button>
          <button className="gnbBtn" onClick={() => navigate("send-mail")}>
            <img src={EditIcon} alt="Profile" />
            <span>메일 보내기</span>
          </button>
          <button className="gnbBtn" onClick={() => navigate("storage")}>
            <img src={ProfileIcon} alt="Edit" />
            <span>보관함</span>
          </button>
          {/* <button className="gnbBtnLarge" onClick={() => navigate("send-mail")}>
            <img src={SendIcon} alt="Send" />
            <span>메일 보내기</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default GNB;
