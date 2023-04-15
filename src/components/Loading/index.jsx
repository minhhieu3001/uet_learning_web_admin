import React from "react";
import { Space, Spin } from "antd";

export default function Loading() {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Space
        style={{
          width: "100%",
          height: "100%",
          marginTop: "45vh",
          marginLeft: "45vw",
        }}
      >
        <Spin size="large">
          <div className="content" />
        </Spin>
      </Space>
    </Space>
  );
}
