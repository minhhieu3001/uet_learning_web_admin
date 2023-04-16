import React from "react";
import { Table, Space, Tag } from "antd";
import { Link } from "react-router-dom";
// import "./tableQuestions.scss";

export default function TableRequestPayments({ questions, loading }) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 120,
      align: "center",
    },
    {
      title: "Ngân hàng",
      dataIndex: "bank",
      key: "bank",
      align: "center",
    },
    {
      title: "Giáo viên",
      dataIndex: "author",
      key: "author",
      width: 240,
      align: "center",
    },
    {
      title: "Số điểm",
      dataIndex: "points",
      key: "points",
      width: 120,
      align: "center",
    },
    {
      title: "Thành tiền",
      dataIndex: "money",
      key: "money",
      width: 120,
      align: "center",
      render: (_, record) => <div>{`${record.points}0 VND`}</div>,
    },
    {
      title: "Hành động",
      key: "action",
      width: 120,
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/requestPayments/${record.id}`}
            style={{ textDecoration: "none" }}>
            <div className="viewButton">Chi tiết</div>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Table
      bordered
      dataSource={questions}
      columns={columns}
      // pagination={{ position: ["topRight", "bottomRight"] }}
      pagination={{ pageSize: 10 }}
      loading={loading}
    />
  );
}