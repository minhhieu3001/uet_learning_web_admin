import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import QuestionMark from "@mui/icons-material/QuestionMark";
import CreditCard from "@mui/icons-material/CreditCard";
import Check from "@mui/icons-material/Check";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title" style={{ fontSize: 20, color: "black" }}>
            Chính
          </p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Tổng quan</span>
            </li>
          </Link>
          <p className="title" style={{ fontSize: 20, color: "black" }}>
            Danh sách
          </p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Học sinh</span>
            </li>
          </Link>
          <Link to="/teachers" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Giáo viên</span>
            </li>
          </Link>
          <Link to="/payments" style={{ textDecoration: "none" }}>
            <li>
              <CreditCard className="icon" />
              <span>Thanh toán</span>
            </li>
          </Link>
          <p className="title" style={{ fontSize: 20, color: "black" }}>
            Phê duyệt
          </p>
          <Link to="/requestPayments" style={{ textDecoration: "none" }}>
            <li>
              <Check className="icon" />
              <span>Xử lí thanh toán</span>
            </li>
          </Link>
          <Link to="/verify/teachers" style={{ textDecoration: "none" }}>
            <li>
              <Check className="icon" />
              <span>Xác minh giáo viên</span>
            </li>
          </Link>
          <Link to="/questions" style={{ textDecoration: "none" }}>
            <li>
              <Check className="icon" />
              <span>Duyệt câu hỏi</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
