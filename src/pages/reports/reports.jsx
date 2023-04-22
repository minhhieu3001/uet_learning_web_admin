import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableReport from "../../components/TableReports/TableReport";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import { Radio } from "antd";

export default function ListReport() {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(false);
  const [radioValue, setRadioValue] = useState(1);

  const getReports = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        `${BASE_URL}/admin/report?page=0&size=10&approve=false&personReport=${
          radioValue === 1 ? "student" : "teacher"
        }`,
        config
      )
      .then((res) => {
        if (res.data.code === 0) {
          setReports(res.data.object);
        }
      });
  };

  useEffect(() => {
    getReports();
  }, [radioValue]);

  return (
    <div className="listTeacher">
      <Sidebar />
      <div className="listTeacherContainer">
        <Navbar />
        <p className="tableTeachersName">Danh sách báo cáo vi phạm</p>
        <Radio.Group
          name="radiogroup"
          defaultValue={1}
          onChange={(e) => setRadioValue(e.target.value)}
          style={{ margin: 50 }}
        >
          <Radio value={1}>Học sinh</Radio>
          <Radio value={2}>Giáo viên</Radio>
        </Radio.Group>
        <TableReport reports={reports} loading={loading} />
      </div>
    </div>
  );
}
