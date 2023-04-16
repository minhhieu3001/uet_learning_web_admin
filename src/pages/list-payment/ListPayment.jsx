import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TablePayments from "../../components/TablePayments/TablePayments";
import { Radio } from "antd";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";

export default function ListPayment() {
  const [radioValue, setRadioValue] = useState(1);
  const [data, setData] = useState(null);

  const getPayment = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    if (radioValue === 1) {
      axios
        .get(`${BASE_URL}/admin/studentPayment/getAll?page=0&size=100`, config)
        .then((res) => {
          if (res.data.code === 0) {
            setData(res.data.object.studentPaymentPointResponseList);
          }
        });
    } else {
      axios
        .get(
          `${BASE_URL}/admin/pointToMoney/getAll?page=0&size=100&approve=true`,
          config
        )
        .then((res) => {
          if (res.data.code === 0) {
            setData(res.data.object.content);
          }
        });
    }
  };

  useEffect(() => {
    getPayment();
  }, [radioValue]);

  return (
    <div className="listTeacher">
      <Sidebar />
      <div className="listTeacherContainer">
        <Navbar />
        <p className="tableTeachersName">Danh sách thanh toán</p>
        <Radio.Group
          name="radiogroup"
          defaultValue={1}
          onChange={(e) => setRadioValue(e.target.value)}
          style={{ margin: 50 }}
        >
          <Radio value={1}>Học sinh</Radio>
          <Radio value={2}>Giáo viên</Radio>
        </Radio.Group>
        <TablePayments rows={data} />
      </div>
    </div>
  );
}
