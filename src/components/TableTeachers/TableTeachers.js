import React from "react";
import { Table, Space, Tag } from "antd";
import { Link } from "react-router-dom";
import "./tableTeachers.scss";

export default function TableTeachers({ teachers, loading }) {
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
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "Hoạt động",
      dataIndex: "active",
      key: "active",
      render: (_, record) => (
        <div>
          {record.active ? (
            <Tag color="green" key={record.id}>
              Đúng
            </Tag>
          ) : (
            <Tag color="red" key={record.id}>
              Sai
            </Tag>
          )}
        </div>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/teachers/${record.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="viewButton">Chi tiết</div>
          </Link>
          <a style={{ color: "red" }}>Vô hiệu hóa</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {!teachers ? (
        <div></div>
      ) : teachers.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            margin: 100,
          }}
        >
          Không có giáo viên nào thỏa mãn
        </div>
      ) : (
        <Table
          dataSource={teachers}
          columns={columns}
          // pagination={{ position: ["topRight", "bottomRight"] }}
          pagination={{ pageSize: 10 }}
          loading={loading}
        />
      )}
    </div>
  );
}
