import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./QuestionDetail.scss";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Image, Input } from "antd";

export default function QuestionDetail() {
  const dummyDetail = {
    id: "1",
    content:
      "Câu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhấtCâu hỏi thứ nhất",
    subject: "Toán",
    course: "9",
    file: "https://www.google.com",
    imgs: [
      "https://genk.mediacdn.vn/2018/9/14/vegeta-1536891801159352673517.jpg",
      "https://genk.mediacdn.vn/2018/9/14/vegeta-1536891801159352673517.jpg",
      "https://genk.mediacdn.vn/2018/9/14/vegeta-1536891801159352673517.jpg",
    ],
  };
  const navigate = useNavigate();
  const { questionId } = useParams();
  const [question, setQuestion] = useState({});
  const getQuestionDetail = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/questions/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setQuestion(res?.data?.object);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnAcceptRequest = (body) => {
    return axios
      .post(`${BASE_URL}/`, body, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => navigate("/requestPayments"));
  };
  const handleOnRejectRequest = (body) => {
    return axios
      .post(`${BASE_URL}/`, body, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => navigate("/requestPayments"));
  };
  useEffect(() => {
    // getQuestionDetail(questionId);
  }, [questionId]);
  return (
    <div>
      <div className="question">
        <Sidebar />
        <div className="detailQuestion">
          <Navbar />
          <p className="detailQuestionName">Chi tiết câu hỏi</p>
          <div className="detailQuestionContainer">
            <div className="detailQuestionContent">
              <Form>
                <Form.Item label="Nội dung" colon={false}>
                  <div>{dummyDetail.content}</div>
                </Form.Item>

                <Form.Item label="Môn học" colon={false}>
                  <div>{dummyDetail.subject}</div>
                </Form.Item>
                <Form.Item label="Lớp" colon={false}>
                  <div>{dummyDetail.course}</div>
                </Form.Item>

                <Form.Item label="Tệp đính kèm" colon={false}>
                  <a href={dummyDetail.file} target="_blank">
                    {dummyDetail.file}
                  </a>
                </Form.Item>
                <Form.Item label="Ảnh đính kèm" colon={false}>
                  <div className="questionImgs">
                    {dummyDetail.imgs?.map((img, index) => (
                      <Image
                        className="image"
                        key={index}
                        src={img}
                        alt="img"
                      />
                    ))}
                  </div>
                </Form.Item>
              </Form>
            </div>
            <div className="buttons">
              <Button type="primary">Phê duyệt</Button>
              <Button>Từ chối</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
