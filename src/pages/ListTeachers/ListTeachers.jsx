import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableTeachers from "../../components/TableTeachers/TableTeachers";
import "./listTeachers.scss";
import SearchForm from "../../components/searchForm/SearchForm";
import { BASE_URL } from "../../constant/constant";
import axios from "axios";

export default function ListTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [dataSearch, setDataSearch] = useState({
    name: null,
    grade: null,
    subject: null,
    gender: null,
  });

  const getTeachers = () => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        `${BASE_URL}/admin/teacher/getTeacher?page=0&size=100&tab=3&searchByName=${
          !dataSearch.name ? "" : dataSearch.name
        }&searchBySubjects=${
          !dataSearch.subject ? "" : dataSearch.subject
        }&searchByClasses=${!dataSearch.grade ? "" : dataSearch.grade}&gender=${
          !dataSearch.gender ? "" : dataSearch.gender
        }`,
        config
      )
      .then((res) => {
        setTeachers(res.data.object.teacherResponses);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTeachers();
  }, [dataSearch]);

  return (
    <div className="listTeacher">
      <Sidebar />
      <div className="listTeacherContainer">
        <Navbar />
        <SearchForm setDataSearch={setDataSearch} />
        <p className="tableTeachersName">Danh sách giáo viên</p>
        <TableTeachers teachers={teachers} loading={loading} />
      </div>
    </div>
  );
}
