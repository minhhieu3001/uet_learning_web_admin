import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./RequestPayment.scss";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Image, Input } from "antd";

export default function RequestPaymentDetail() {
  const dummyDetail = {
    id: "1",
    bank: "BIDV",
    author: "Bui Minh Hieu",
    points: "10000",
    bankName: "Bui Minh Hieu",
    bankNumber: "0999888767",
  };
  const navigate = useNavigate();
  const { requestPaymentId } = useParams();
  const [question, setQuestion] = useState({});
  const getQuestionDetail = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/requestPayment/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setQuestion(res?.data?.object);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnAcceptRequest = (body) => {
    return axios
      .post(`${BASE_URL}/`, body, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => navigate("/requestPayments"));
  };
  const handleOnRejectRequest = (body) => {
    return axios
      .post(`${BASE_URL}/`, body, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => navigate("/requestPayments"));
  };
  useEffect(() => {
    // getQuestionDetail(questionId);
  }, [requestPaymentId]);
  return (
    <div>
      <div className="request">
        <Sidebar />
        <div className="detailRequestPayment">
          <Navbar />
          <p className="detailRequestPaymentName">
            Chi tiết yêu cầu thanh toán
          </p>
          <div className="detailRequestPaymentContainer">
            <div className="detailRequestPaymentContent">
              <Form>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <Form.Item
                    style={{ width: "40%" }}
                    label="Giáo viên"
                    colon={false}>
                    <div>{dummyDetail.author}</div>
                  </Form.Item>

                  <Form.Item
                    style={{ width: "40%" }}
                    label="Ngân hàng"
                    colon={false}>
                    <div>{dummyDetail.bank}</div>
                  </Form.Item>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <Form.Item
                    style={{ width: "40%" }}
                    label="STK Ngân hàng"
                    colon={false}>
                    <div>{dummyDetail.bankNumber}</div>
                  </Form.Item>
                  <Form.Item
                    style={{ width: "40%" }}
                    label="Tên chủ STK"
                    colon={false}>
                    <div>{dummyDetail.bankName}</div>
                  </Form.Item>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <Form.Item
                    style={{ width: "40%" }}
                    label="Số points quy đổi"
                    colon={false}>
                    <div>{dummyDetail.points}</div>
                  </Form.Item>
                  <Form.Item
                    style={{ width: "40%" }}
                    label="Thành tiền"
                    colon={false}>
                    <div>{`${dummyDetail.points}0 VND`}</div>
                  </Form.Item>
                </div>
              </Form>
            </div>
            <div className="buttons">
              <Button type="primary">Phê duyệt</Button>
              <Button>Từ chối</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
