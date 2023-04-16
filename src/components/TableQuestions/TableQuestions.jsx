import React from "react";
import { Table, Space, Tag } from "antd";
import { Link } from "react-router-dom";
import "./tableQuestions.scss";

export default function TableQuestions({ questions, loading }) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 120,
      align: "center",
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
      align: "center",
    },
    {
      title: "Môn học",
      dataIndex: "subject",
      key: "subject",
      render: (_, record) => <div>{record.subject}</div>,
      width: 240,
      align: "center",
    },
    {
      title: "Lớp",
      dataIndex: "course",
      key: "course",
      width: 120,
      align: "center",
    },
    {
      title: "Hành động",
      key: "action",
      width: 120,
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/questions/${record.id}`}
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
      dataSource={questions}
      columns={columns}
      // pagination={{ position: ["topRight", "bottomRight"] }}
      pagination={{ pageSize: 10 }}
      loading={loading}
    />
  );
}
