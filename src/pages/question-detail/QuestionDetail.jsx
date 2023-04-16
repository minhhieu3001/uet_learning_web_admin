import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./QuestionDetail.scss";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Image, Input } from "antd";

export default function QuestionDetail() {
  const navigate = useNavigate();
  const { questionId } = useParams();

  const [question, setQuestion] = useState({});

  const getQuestionDetail = async (id) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/admin/question/getQuestionById?questionId=${questionId}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      setQuestion(res?.data?.object);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnAcceptRequest = () => {
    const data = {
      questionId: questionId,
      approve: true,
    };
    return axios
      .put(`${BASE_URL}/admin/question/approveQuestion`, data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => navigate("/questions"));
  };
  const handleOnRejectRequest = () => {
    const data = {
      questionId: questionId,
      approve: false,
    };
    return axios
      .put(`${BASE_URL}/admin/question/approveQuestion`, data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => navigate("/questions"));
  };
  useEffect(() => {
    getQuestionDetail(questionId);
  }, []);
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
                  <div>{question.content}</div>
                </Form.Item>

                <Form.Item label="Môn học" colon={false}>
                  <div>{question.subject}</div>
                </Form.Item>
                <Form.Item label="Lớp" colon={false}>
                  <div>{question.course}</div>
                </Form.Item>

                <Form.Item label="Tệp đính kèm" colon={false}>
                  <a href={question.file} target="_blank">
                    {!question.file}
                  </a>
                </Form.Item>
                <Form.Item label="Ảnh đính kèm" colon={false}>
                  <div className="questionImgs">
                    {question.imgs?.map((img, index) => (
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
              <Button type="primary" onClick={() => handleOnAcceptRequest()}>
                Phê duyệt
              </Button>
              <Button onClick={() => handleOnRejectRequest()}>Từ chối</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
