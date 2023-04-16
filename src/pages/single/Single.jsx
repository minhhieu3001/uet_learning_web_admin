import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ListTransaction from "../../components/ListTransaction/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Single = () => {
  const params = useParams();
  const [user, setUser] = useState(null);

  const getUser = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        `${BASE_URL}/admin/student/studentId?studentId=${params.userId}`,
        config
      )
      .then((res) => {
        if (res.data.code === 0) {
          setUser(res.data.object);
        }
      });
  };

  useEffect(() => {
    getUser();
    console.log(params);
  }, []);

  return !user ? (
    <Loading />
  ) : (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Chỉnh sửa</div>
            <div className="deactiveButton">Vô hiệu hóa</div>
            <h1 className="title">Thông tin cá nhân</h1>
            <div className="item">
              {user.avaPath ? (
                <img src={user.avaPath} alt="" className="itemImg" />
              ) : (
                <Avatar size={100} icon={<UserOutlined />} />
              )}
              <div className="details">
                <h1 className="itemTitle">{user.realName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">SĐT:</span>
                  <span className="itemValue">{user.phoneNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giới tính:</span>
                  <span className="itemValue">
                    {user.gender === 1 ? "Nam" : "Nữ"}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ngày sinh:</span>
                  <span className="itemValue">{user.dateOfBirth}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Lớp:</span>
                  <span className="itemValue">{user.course}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Môn học:</span>
                  <span className="itemValue">
                    {user.subjects.length <= 3
                      ? user.subjects.join(", ")
                      : `${user.subjects[0]}, ${user.subjects[1]}, ${user.subjects[2]}, ...`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Lịch sử thanh toán</h1>
          <ListTransaction />
        </div>
      </div>
    </div>
  );
};

export default Single;
