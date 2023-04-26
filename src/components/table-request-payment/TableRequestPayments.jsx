import React from "react";
import { Table, Space, Tag } from "antd";
import { Link } from "react-router-dom";
// import "./tableQuestions.scss";

export default function TableRequestPayments({ data, loading }) {
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
      width: 300,
      align: "center",
    },
    {
      title: "Giáo viên",
      dataIndex: "fullName",
      key: "fullName",
      align: "center",
    },
    {
      title: "Thành tiền",
      dataIndex: "money",
      key: "money",
      width: 120,
      align: "center",
      render: (_, record) => <div>{`${record.point}0 VND`}</div>,
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
            style={{ textDecoration: "none" }}
          >
            <div className="viewButton">Chi tiết</div>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Table
      bordered
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10 }}
      loading={loading}
    />
  );
}
