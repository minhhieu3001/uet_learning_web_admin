import { Table } from "antd";
import React from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";
import { handleTime } from "../../util/handleTime";

export default function TableReport({ reports, loading }) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Chủ đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Thời gian",
      dataIndex: "createTime",
      key: "createTime",
      render: (_, record) => <div>{handleTime(record.createTime)}</div>,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/reports/${record.id}`} style={{ textDecoration: "none" }}>
            <div className="viewButton">Chi tiết</div>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <Table
      dataSource={reports}
      columns={columns}
      pagination={{ pageSize: 10 }}
      loading={loading}
    />
  );
}
