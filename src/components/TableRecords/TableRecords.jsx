import { Table } from "antd";
import React, { useState } from "react";
import { Space, Modal } from "antd";
import { Link } from "react-router-dom";
import { handleTime } from "../../util/handleTime";

export default function TableRecords({ rows }) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nội dung",
      key: "content",
      render: (_, record) => (
        <Space size="middle">
          <div>
            Buổi học giữa {record.studentDTO.realName} và{" "}
            {record.teacherDTO.realName}
          </div>
        </Space>
      ),
    },
    {
      title: "Thời gian",
      key: "callTime",
      dataIndex: "callTime",
      render: (_, record) => (
        <Space size="middle">
          <div>{handleTime(record.callTime)}</div>
        </Space>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            style={{ color: "#018ABE", cursor: "pointer" }}
            onClick={() => {
              setShowPopUp(true);
              setRecord(record.filePath);
              console.log("aaaa");
            }}
          >
            Chi tiết
          </div>
        </Space>
      ),
    },
  ];

  const [record, setRecord] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div>
      <Table
        dataSource={rows}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
      <Modal
        open={showPopUp}
        title="Video buổi học"
        footer={null}
        onCancel={() => {
          setRecord(null);
          setShowPopUp(false);
        }}
        style={{ position: "fixed", top: 20, left: "35%" }}
      >
        <div>
          <video width="100%" height="auto" controls src={record}>
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  );
}
