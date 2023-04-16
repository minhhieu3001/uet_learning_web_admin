import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ListTeachers from "./pages/ListTeachers/ListTeachers";
import TeacherDetail from "./pages/TeacherDetail/TeacherDetail";
import ListQuestions from "./pages/ListQuestions/ListQuestions";
import VerifyTeachers from "./pages/verifyTeacher";
import QuestionDetail from "./pages/question-detail/QuestionDetail";
import ListRequestPayments from "./pages/request-payment/RequestPayment";
import RequestPaymentDetail from "./pages/request-payment-detail/RequestPaymentDetail";
import ListPayment from "./pages/list-payment/ListPayment";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="teachers">
              <Route index element={<ListTeachers />} />
              <Route path=":detail/:teacherId" element={<TeacherDetail />} />
            </Route>
            <Route path="payments">
              <Route index element={<ListPayment />} />
            </Route>
            <Route path="questions">
              <Route index element={<ListQuestions />} />
              <Route path=":questionId" element={<QuestionDetail />} />
            </Route>
            <Route path="verify">
              <Route path="teachers" element={<VerifyTeachers />} />
            </Route>
            <Route path="requestPayments">
              <Route index element={<ListRequestPayments />} />
              <Route
                path=":requestPaymentId"
                element={<RequestPaymentDetail />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
