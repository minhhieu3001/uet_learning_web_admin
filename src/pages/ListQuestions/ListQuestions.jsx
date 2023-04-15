import React, { useEffect, useState } from "react";
import "./listQuestions.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../../components/Loading";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import TableQuestions from "../../components/TableQuestions/TableQuestions";

export default function ListQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const getQuestions = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL}/admin/question/searchQuestions?page=0&size=100`,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setQuestions(res?.data?.object.questions);
      setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div>
      <div className="listQuestions">
        <Sidebar />
        <div className="listQuestionsContainer">
          <Navbar />
          <p className="tableQuestionsName">Danh sách câu hỏi</p>
          <TableQuestions loading={loading} questions={questions} />
        </div>
      </div>
    </div>
  );
}
