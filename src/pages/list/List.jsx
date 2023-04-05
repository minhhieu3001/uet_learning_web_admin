import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SearchForm from "../../components/searchForm/SearchForm";
import TableStudents from "../../components/TableStudents/TableStudents";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";

const List = () => {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataSearch, setDataSearch] = useState({
    name: null,
    grade: null,
    subject: null,
    gender: null,
  });

  const getStudents = () => {
    setLoading(true);
    const config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzUxMiJ9.eyJJRCI6IjYzZjlhOWQwYTNiNDAxNzhjZGM5ZDAwMiIsInR5cGUiOiIxIiwiZW1haWwiOiJoaWV1MUBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImRhdGVfb2ZfYmlydGgiOiIyOC0wMi0yMDA2IiwicGhvbmVfbnVtYmVyIjoiMDgxMzQ4MDI0OCIsImdlbmRlciI6MSwic3RhdHVzIjowLCJyZWFsX25hbWUiOiJCw7lpIE1pbmggSGnhur91IiwiYXZhdGFyX3BhdGgiOiJodHRwczovL2Jvb2tzdG9yZWltYWdlcy5zMy5hbWF6b25hd3MuY29tL2F2YXRhci9ybl9pbWFnZV9waWNrZXJfbGliX3RlbXBfYzNiMzZmNDctZTRkMy00YWNmLWE4YTItY2NkNDQwNmQyYjFiLmpwZyIsInRva2VuX2RldmljZSI6ImRROVN2Yk5xU1ppUnl1dTFWTnNZV2E6QVBBOTFiSF85VGYwOTJnSy1oM0tteGJIdFdTMk5MNnZlMVpHMElhNG8taUhFS1VTcXF3eXM1QXA0RkJUeEFxQXFTZ1hQeng5Wm1ENTQyeXRCVUhLSDJOblVicmg4UldFTFB6MmZMWXU2ZVI3OFBIZ1g0Z2tMcWUxVkdQbWRkaG9ucDloalQ4UVNnb2kiLCJpYXQiOjE2Nzk2NTM0NTV9.axeX4Pv0GDO6iRzKYGk5wiylCQHqeluVHsx7Js89wAFb-RHlCSOCkUhcH4T09LKW5G974sNu4dJRjfRqGKRSlw",
      },
    };
    axios
      .get(
        `${BASE_URL}/ums/getStudents/getStudentsByConditions?page=0&size=100&searchByName=${
          !dataSearch.name ? "" : dataSearch.name
        }&searchBySubjects=${
          !dataSearch.subject ? "" : dataSearch.subject
        }&searchByClasses=${!dataSearch.grade ? "" : dataSearch.grade}&gender=${
          !dataSearch.gender ? "" : dataSearch.gender
        }`,
        config
      )
      .then((res) => {
        setStudents(res.data.object.studentResponse);
        setLoading(false);
      });
  };

  useEffect(() => {
    getStudents();
  }, [dataSearch]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SearchForm setDataSearch={setDataSearch} />
        <p className="tableUsersName">Danh sách học sinh</p>
        <TableStudents students={students} loading={loading} />
      </div>
    </div>
  );
};

export default List;
