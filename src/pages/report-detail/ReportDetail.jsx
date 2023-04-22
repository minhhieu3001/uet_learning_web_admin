import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Avatar, Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./ReportDetail.scss";
import { BASE_URL } from "../../constant/constant";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/index";
import TableRecords from "../../components/TableRecords/TableRecords";

export default function ReportDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const getData = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${BASE_URL}/admin/report/detail/${params.reportId}`, config)
      .then((res) => {
        if (res.data.code === 0) {
          console.log(res.data.object);
          setData(res.data.object);
        }
      });
  };

  const handleApproveReport = (approve) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const data = {
      id: params.reportId,
      approve: approve,
    };
    console.log(data);
    axios.put(`${BASE_URL}/admin/report/approve`, data, config).then((res) => {
      console.log(res);
      if (res.data.code === 0) {
        navigate("/reports");
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return !data ? (
    <Loading />
  ) : (
    <div className="listTeacher">
      <Sidebar />
      <div className="listTeacherContainer">
        <Navbar />

        <div className="info">
          <div className="student">
            <div className="item">
              {data.humanVO.avaPath ? (
                <img src={data.humanVO.avaPath} alt="" className="itemImg" />
              ) : (
                <Avatar size={100} icon={<UserOutlined />} />
              )}
              <div className="details">
                <h1 className="itemTitle">{data.humanVO.realName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.humanVO.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giới tính:</span>
                  <span className="itemValue">
                    {data.humanVO.gender === 1 ? "Nam" : "Nữ"}
                  </span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Lớp:</span>
                  <span className="itemValue">{data.humanVO.clazz}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Môn học:</span>
                  <span className="itemValue">
                    {data.humanVO.subjects.length <= 3
                      ? data.humanVO.subjects.join(", ")
                      : `${data.humanVO.subjects[0]}, ${data.humanVO.subjects[1]}, ${data.humanVO.subjects[2]}, ...`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="teacher">
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">Thông tin báo cáo</h1>
                <div className="detailItem">
                  <span className="itemKey">Chủ đề: </span>
                  <span className="itemValue">{data.title}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Nội dung: </span>
                  <span className="itemValue">{data.value}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="historyCall">
          <div className="buttons">
            <Button
              type="primary"
              style={{ marginRight: 10 }}
              onClick={() => handleApproveReport(true)}
            >
              Phê duyệt
            </Button>
            <Button onClick={() => handleApproveReport(false)}>Từ chối</Button>
          </div>
          <div className="title">Lịch sử cuộc gọi</div>
          <TableRecords rows={data.recordFile} />
        </div>
      </div>
    </div>
  );
}
