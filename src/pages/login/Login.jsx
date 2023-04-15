import "./login.scss";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import Loading from "../../components/Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const rules = {
    account: [{ required: true, message: "Vui lòng không bỏ trống" }],
    password: [{ required: true, message: "Vui lòng không bỏ trống" }],
  };

  const [loading, setLoading] = useState(false);

  const handleOnLogin = async (event) => {
    console.log(event);
    const { account, password } = event;
    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/admin/login`, {
        email: account,
        password: password,
      });
      localStorage.setItem("token", res?.data?.object?.token);
      setLoading(false);
      console.log(res);
      if (res?.data?.code === 0) navigate("/home");
      else message.error("Tài khoản hoặc mật khẩu không đúng");
    } catch (error) {
      console.log(error);
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <div className="login">
      <Form className="loginForm" onFinish={handleOnLogin}>
        <Form.Item label="Tài khoản" rules={rules.account} name={"account"}>
          <Input />
        </Form.Item>
        <Form.Item label="Mật khẩu" rules={rules.password} name={"password"}>
          <Input.Password allowClear />
        </Form.Item>
        <div className="loginButton">
          <Button htmlType="submit">Đăng nhập</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
