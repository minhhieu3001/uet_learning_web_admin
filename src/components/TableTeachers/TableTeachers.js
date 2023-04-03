import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Space, Tag } from "antd";
import { BASE_URL } from "../../constant/constant";
import { Link } from "react-router-dom";
import "./tableTeachers.scss";

export default function TableTeachers() {
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
    },
    {
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (_, record) => (
        <div>
          {record.active ? (
            <Tag color="green" key={record.id}>
              True
            </Tag>
          ) : (
            <Tag color="red" key={record.id}>
              False
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
          <a>Vô hiệu hóa</a>
        </Space>
      ),
    },
  ];

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getTeachers = () => {
    setLoading(true);
    const config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzUxMiJ9.eyJJRCI6IjYzZjk4YmYwY2Q3MzAzMzMxMGQ0NjBjOCIsInVzZXJfbmFtZSI6ImN1b25nIiwidHlwZSI6IjEiLCJlbWFpbCI6ImNAZ20ubSIsInJvbGUiOiJzdHVkZW50IiwiZGF0ZV9vZl9iaXJ0aCI6IjAyLTAzLTIwMDEiLCJwaG9uZV9udW1iZXIiOiIwOTY3NjEwNjk4IiwiZ2VuZGVyIjoxLCJzdGF0dXMiOjAsInJlYWxfbmFtZSI6ImN1b25nIiwiaWF0IjoxNjc3Mjk4NTg5fQ.-KeBH1u-xtLoDoISDHW_3fFj0LdC4pZUHok3W4SGECMcMyU0Laiyc3mh73pbu92dM6zp730_n6kIuistRORpVQ",
      },
    };
    axios
      .get(
        `${BASE_URL}/ums/getTeachers?page=${page - 1}&size=10&sort=time_login`,
        config
      )
      .then((res) => {
        setTeachers(res.data.object);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTeachers();
  }, [page]);

  return (
    <div>
      {!teachers || teachers.length === 0 ? (
        <div></div>
      ) : (
        <Table
          dataSource={teachers}
          columns={columns}
          // pagination={{ position: ["topRight", "bottomRight"] }}
          pagination={10}
          loading={loading}
        />
      )}
    </div>
  );
}
