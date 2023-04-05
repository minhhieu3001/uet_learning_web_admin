import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";
import { classes, subjects } from "../../constant/constant";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function SearchForm({ setDataSearch }) {
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={({ name, grade, subject, gender }) => {
          const dataSearch = {
            name: name,
            grade: grade,
            subject: subject,
            gender: gender,
          };
          setDataSearch(dataSearch);
        }}
      >
        <div>
          <Form.Item label="Tìm theo tên" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Lớp" name="grade">
            <Select>
              {classes.map((item, index) => {
                return (
                  <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </div>

        <div>
          <Form.Item label="Môn học" name="subject">
            <Select>
              {subjects.map((item, index) => {
                return (
                  <Select.Option key={item.id} value={item.name}>
                    {item.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="Giới tính" name="gender">
            <Select>
              <Select.Option value={1}>Nam</Select.Option>
              <Select.Option value={2}>Nữ</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item>
          <Button htmlType="submit">Tìm kiếm</Button>
        </Form.Item>
      </Form>
    </>
  );
}
