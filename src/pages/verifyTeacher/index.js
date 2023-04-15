import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./verifyTeacher.scss";
import SearchForm from "../../components/searchForm/SearchForm";
import ListVerifyTeachers from "../../components/ListVerifyTeachers";

export default function VerifyTeachers() {
  return (
    <div className="container">
      <Sidebar />
      <div className="listVerify">
        <Navbar />
        <h1 style={{ textAlign: "center", margin: 20 }}>
          Danh sách giáo viên chờ duyệt
        </h1>
        <ListVerifyTeachers />
      </div>
    </div>
  );
}
