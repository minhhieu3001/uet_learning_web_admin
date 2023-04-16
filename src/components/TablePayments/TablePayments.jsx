import { Table } from "antd";
import React from "react";

export default function TablePayments({ rows }) {
  const handleTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  };
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
      render: (_, record) => <div>{record.money} 000 VNĐ</div>,
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
