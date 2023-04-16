import React, { useEffect, useState } from "react";
import "./RequestPayment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../../components/Loading";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import TableRequestPayments from "../../components/table-request-payment/TableRequestPayments";

export default function ListRequestPayments() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRequests = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL}/admin/pointToMoney/getAll?page=0&size=100&approve=false`,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setRequests(res?.data?.object.contents);
      setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRequests();
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
            <TableRequestPayments loading={loading} data={requests} />
          </div>
        </div>
      </div>
    </div>
  );
}
