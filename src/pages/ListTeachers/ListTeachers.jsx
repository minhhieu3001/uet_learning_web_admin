import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableTeachers from "../../components/TableTeachers/TableTeachers";
import "./listTeachers.scss";
import SearchForm from "../../components/searchForm/SearchForm";

export default function ListTeachers() {
  return (
    <div className="listTeacher">
      <Sidebar />
      <div className="listTeacherContainer">
        <Navbar />
        <SearchForm />
        <p className="tableTeachersName">Danh sách giáo viên</p>

        <TableTeachers />
      </div>
    </div>
  );
}
