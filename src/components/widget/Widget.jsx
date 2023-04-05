import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "Học sinh",
        isMoney: false,
        link: "Xem danh sách học sinh",
        to: "/users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "teachers":
      data = {
        title: "Giáo viên",
        isMoney: false,
        link: "Xem danh sách giáo viên",
        to: "/teachers",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "questions":
      data = {
        title: "Câu hỏi",
        isMoney: true,
        link: "Danh sách câu hỏi",
        to: "/approveQuestions",
        icon: (
          <QuestionCircleOutlined
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "payment":
      data = {
        title: "Yêu cầu thanh toán",
        isMoney: true,
        link: "Xem yêu cầu thanh toán",
        to: "/requestPayment",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <Link style={{ textDecoration: "none" }} to={data.to}>
          {data.link}
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
