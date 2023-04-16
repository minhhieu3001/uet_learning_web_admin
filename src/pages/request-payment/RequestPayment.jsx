import React, { useEffect, useState } from "react";
import "./RequestPayment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../../components/Loading";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import TableRequestPayments from "../../components/table-request-payment/TableRequestPayments";

export default function ListRequestPayments() {
  const dummyPayments = [
    {
      id: "1",
      bank: "BIDV",
      author: "Bui Minh Hieu",
      points: "10000",
    },
    {
      id: "2",
      bank: "BIDV",
      author: "Bui Minh Hieu",
      points: "10000",
    },
    {
      id: "3",
      bank: "BIDV",
      author: "Bui Minh Hieu",
      points: "10000",
    },
    {
      id: "4",
      bank: "BIDV",
      author: "Bui Minh Hieu",
      points: "10000",
    },
    {
      id: "5",
      bank: "BIDV",
      author: "Bui Minh Hieu",
      points: "10000",
    },
  ];
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
      <div className="listRequestPayments">
        <Sidebar />
        <div className="listRequestPaymentsContainer">
          <Navbar />
          <p className="tableRequestPaymentsName">
            Danh sách yêu cầu thanh toán
          </p>
          <div className="tableRequestPaymentsContainer">
            <TableRequestPayments loading={loading} questions={dummyPayments} />
          </div>
        </div>
      </div>
    </div>
  );
}
