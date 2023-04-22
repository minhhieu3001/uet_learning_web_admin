import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./RequestPayment.scss";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Image, Input } from "antd";

export default function RequestPaymentDetail() {
  const navigate = useNavigate();
  const { requestPaymentId } = useParams();
  const [request, setRequest] = useState({});
  const getRequestDetail = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/admin/pointToMoney/getDetail/${requestPaymentId}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      setRequest(res?.data?.object);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnAcceptRequest = () => {
    const data = {
      id: requestPaymentId,
      approve: true,
    };
    return axios
      .post(`${BASE_URL}/admin/pointToMoney/approve`, data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => navigate("/requestPayments"));
  };
  const handleOnRejectRequest = () => {
    const data = {
      id: requestPaymentId,
      approve: false,
    };
    return axios
      .post(`${BASE_URL}/admin/pointToMoney/approve`, data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => navigate("/requestPayments"));
  };
  useEffect(() => {
    getRequestDetail();
  }, []);
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
                  }}
                >
                  <Form.Item
                    style={{ width: "40%" }}
                    label="Giáo viên"
                    colon={false}
                  >
                    <div>{request.fullName}</div>
                  </Form.Item>

                  <Form.Item
                    style={{ width: "40%" }}
                    label="Ngân hàng"
                    colon={false}
                  >
                    <div>{request.bank}</div>
                  </Form.Item>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Item
                    style={{ width: "40%" }}
                    label="STK Ngân hàng"
                    colon={false}
                  >
                    <div>{request.bankId}</div>
                  </Form.Item>
                  <Form.Item
                    style={{ width: "40%" }}
                    label="Tên chủ STK"
                    colon={false}
                  >
                    <div>{request.fullName}</div>
                  </Form.Item>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Item
                    style={{ width: "40%" }}
                    label="Số points quy đổi"
                    colon={false}
                  >
                    <div>{request.point}</div>
                  </Form.Item>
                  <Form.Item
                    style={{ width: "40%" }}
                    label="Thành tiền"
                    colon={false}
                  >
                    <div>{`${request.money}0 VND`}</div>
                  </Form.Item>
                </div>
              </Form>
            </div>
            <div className="buttons">
              <Button type="primary" onClick={() => handleOnAcceptRequest()}>
                Phê duyệt
              </Button>
              <Button onClick={() => handleOnRejectRequest()}>Từ chối</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
