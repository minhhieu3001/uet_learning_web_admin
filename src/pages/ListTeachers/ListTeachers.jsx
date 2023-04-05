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
        Authorization:
          "eyJhbGciOiJIUzUxMiJ9.eyJJRCI6IjYzZjlhOWQwYTNiNDAxNzhjZGM5ZDAwMiIsInR5cGUiOiIxIiwiZW1haWwiOiJoaWV1MUBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImRhdGVfb2ZfYmlydGgiOiIyOC0wMi0yMDA2IiwicGhvbmVfbnVtYmVyIjoiMDgxMzQ4MDI0OCIsImdlbmRlciI6MSwic3RhdHVzIjowLCJyZWFsX25hbWUiOiJCw7lpIE1pbmggSGnhur91IiwiYXZhdGFyX3BhdGgiOiJodHRwczovL2Jvb2tzdG9yZWltYWdlcy5zMy5hbWF6b25hd3MuY29tL2F2YXRhci9ybl9pbWFnZV9waWNrZXJfbGliX3RlbXBfYzNiMzZmNDctZTRkMy00YWNmLWE4YTItY2NkNDQwNmQyYjFiLmpwZyIsInRva2VuX2RldmljZSI6ImRROVN2Yk5xU1ppUnl1dTFWTnNZV2E6QVBBOTFiSF85VGYwOTJnSy1oM0tteGJIdFdTMk5MNnZlMVpHMElhNG8taUhFS1VTcXF3eXM1QXA0RkJUeEFxQXFTZ1hQeng5Wm1ENTQyeXRCVUhLSDJOblVicmg4UldFTFB6MmZMWXU2ZVI3OFBIZ1g0Z2tMcWUxVkdQbWRkaG9ucDloalQ4UVNnb2kiLCJpYXQiOjE2Nzk2NTM0NTV9.axeX4Pv0GDO6iRzKYGk5wiylCQHqeluVHsx7Js89wAFb-RHlCSOCkUhcH4T09LKW5G974sNu4dJRjfRqGKRSlw",
      },
    };
    axios
      .get(
        `${BASE_URL}/ums/getTeachers/getTeacher?page=0&size=100&tab=3&searchByName=${
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
