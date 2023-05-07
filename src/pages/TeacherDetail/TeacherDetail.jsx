import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/index";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ListTransaction from "../../components/ListTransaction/Table";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, message } from "antd";
import { useNavigate } from "react-router-dom";
import { handleOnDeactiveTeacherAccount } from "../../util/helpers";

export default function TeacherDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState(null);
  const [transections, setTransections] = useState(null);

  const getTeacher = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        `${BASE_URL}/admin/teacher/teacherId?teacherId=${params.teacherId}`,
        config
      )
      .then((res) => {
        console.log(res.data.object);
        if (res.data.code === 0) {
          setTeacher(res.data.object);
        }
      });
  };

  const getTransection = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        `${BASE_URL}/admin/pointToMoney/getByTeacherId?teacherId=${params.teacherId}&page=0&size=100`,
        config
      )
      .then((res) => {
        if (res.data.code === 0) {
          setTransections(res.data.object.studentPaymentPointResponseList);
        }
      });
  };

  const handleVerify = (verify) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const data = {
      teacherId: params.teacherId,
      vertify: verify,
    };

    axios.put(`${BASE_URL}/admin/vertifyTeacher`, data, config).then((res) => {
      console.log(res);
      if (res.data.code === 0) {
        navigate("/verify/teachers");
      }
    });
  };

  useEffect(() => {
    getTeacher();
    if (params.detail === "detail") {
      getTransection();
    }
  }, []);
  return !teacher ? (
    <Loading />
  ) : params.detail === "detail" ? (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Chỉnh sửa</div>
            <div
              className="deactiveButton"
              onClick={() =>
                handleOnDeactiveTeacherAccount(params.teacherId).then(() => {
                  message.success("Vô hiệu hóa tài khoản thành công");
                  window.location.replace("/teachers");
                })
              }
            >
              Vô hiệu hóa
            </div>
            <h1 className="title">Thông tin cá nhân</h1>
            <div className="item">
              {teacher.avaPath ? (
                <img src={teacher.avaPath} alt="" className="itemImg" />
              ) : (
                <Avatar size={100} icon={<UserOutlined />} />
              )}
              <div className="details">
                <h1 className="itemTitle">{teacher.realName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{teacher.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">SĐT:</span>
                  <span className="itemValue">{teacher.phoneNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giới tính:</span>
                  <span className="itemValue">
                    {teacher.gender === 1 ? "Nam" : "Nữ"}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ngày sinh:</span>
                  <span className="itemValue">{teacher.dateOfBirth}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Lớp:</span>
                  <span className="itemValue">{teacher.course}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Môn học:</span>
                  <span className="itemValue">
                    {teacher.subjects.length <= 3
                      ? teacher.subjects.join(", ")
                      : `${teacher.subjects[0]}, ${teacher.subjects[1]}, ${teacher.subjects[2]}, ...`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Lịch sử thanh toán</h1>
          <ListTransaction rows={transections} />
        </div>
      </div>
    </div>
  ) : (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={() => handleVerify(true)}>
              Phê duyệt
            </div>
            <div className="deactiveButton" onClick={() => handleVerify(false)}>
              Từ chối
            </div>
            <h1 className="title">Thông tin cá nhân</h1>
            <div className="item">
              {teacher.avaPath ? (
                <img src={teacher.avaPath} alt="" className="itemImg" />
              ) : (
                <Avatar size={100} icon={<UserOutlined />} />
              )}
              <div className="details">
                <h1 className="itemTitle">{teacher.realName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{teacher.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">SĐT:</span>
                  <span className="itemValue">{teacher.phoneNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giới tính:</span>
                  <span className="itemValue">
                    {teacher.gender === 1 ? "Nam" : "Nữ"}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ngày sinh:</span>
                  <span className="itemValue">{teacher.dateOfBirth}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Lớp:</span>
                  <span className="itemValue">{teacher.course}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Môn học:</span>
                  <span className="itemValue">
                    {teacher.subjects.length <= 3
                      ? teacher.subjects.join(", ")
                      : `${teacher.subjects[0]}, ${teacher.subjects[1]}, ${teacher.subjects[2]}, ...`}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tự giới thiệu:</span>
                  <span className="itemValue">
                    {!teacher.introduceMySelf
                      ? "Không có"
                      : teacher.introduceMySelf}
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: 20 }}>
                    <div>Ảnh mặt trước căn cước công dân</div>
                    <img
                      src={teacher.mtCCCD}
                      style={{ width: "600px", height: "300px" }}
                    />
                  </div>
                  <div>
                    <div>Ảnh mặt sau căn cước công dân</div>
                    <img
                      src={teacher.msCCCD}
                      style={{ width: "600px", height: "300px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
