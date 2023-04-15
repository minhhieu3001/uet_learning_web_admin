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
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        `${BASE_URL}/admin/student/getStudentsByConditions?page=0&size=100&searchByName=${
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
