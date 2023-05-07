import { BASE_URL } from "../constant/constant";
import axios from "axios";
export const handleOnDeactiveTeacherAccount = (id) => {
  return axios.put(
    `${BASE_URL}/admin/teacher/deActive?teacherId=${id}`,
    {},
    { headers: { Authorization: localStorage.getItem("token") } }
  );
};

export const handleOnDeactiveStudentAccount = (id) => {
  return axios.put(
    `${BASE_URL}/admin/student/deActive?studentId=${id}`,
    {},
    { headers: { Authorization: localStorage.getItem("token") } }
  );
};
