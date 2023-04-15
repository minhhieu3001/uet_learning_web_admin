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
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Môn học",
      dataIndex: "subjects",
      key: "subjects",
      render: (_, record) => <div>{record.subjects.join(", ")}</div>,
    },
    {
      title: "Lớp",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/teachers/${record.id}`}
            style={{ textDecoration: "none" }}>
            <div className="viewButton">Chi tiết</div>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={questions}
      columns={columns}
      // pagination={{ position: ["topRight", "bottomRight"] }}
      //   pagination={{ pageSize: 10 }}
      loading={loading}
    />
  );
}
