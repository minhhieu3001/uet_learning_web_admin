import { Table } from "antd";
import React from "react";
import { handleTime } from "../../util/handleTime";

export default function TablePayments({ rows }) {
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
      title: "Số tiền",
      dataIndex: "money",
      key: "money",
      render: (_, record) => <div>{record.money} VNĐ</div>,
    },
    {
      title: "Thời gian",
      dataIndex: "createTime",
      key: "createTime",
      render: (_, record) => <div>{handleTime(record.createTime)}</div>,
    },
  ];
  return (
    <Table dataSource={rows} columns={columns} pagination={{ pageSize: 10 }} />
  );
}
