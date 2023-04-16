import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./verifyTeacher.scss";
import ListVerifyTeachers from "../../components/ListVerifyTeachers";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";

export default function VerifyTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTeachers = () => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        `${BASE_URL}/admin/teacher/getTeacher?page=0&size=100&verify=false`,
        config
      )
      .then((res) => {
        setTeachers(res.data.object.teacherResponses);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="listVerify">
        <Navbar />
        <h1 style={{ textAlign: "center", margin: 20 }}>
          Danh sách giáo viên chờ duyệt
        </h1>
        <ListVerifyTeachers teachers={teachers} loading={loading} />
      </div>
    </div>
  );
}
