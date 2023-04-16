import React from "react";
import { Space, Table } from "antd";
import { Link } from "react-router-dom";

export default function ListVerifyTeachers({ teachers, loading }) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Họ và tên",
      dataIndex: "realName",
      key: "realName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Lớp",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Môn học",
      dataIndex: "subjects",
      key: "subjects",
      render: (_, record) => <div>{record.subjects.join(", ")}</div>,
    },

    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/teachers/verify/${record.id}`}
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
      dataSource={teachers}
      columns={columns}
      pagination={{ pageSize: 10 }}
      loading={loading}
    />
  );
}
