import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ListTeachers from "./pages/ListTeachers/ListTeachers";
import TeacherDetail from "./pages/TeacherDetail/TeacherDetail";
import ListQuestions from "./pages/ListQuestions/ListQuestions";
import VerifyTeachers from "./pages/verifyTeacher";

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
              <Route path=":teacherId" element={<TeacherDetail />} />
            </Route>
            <Route path="questions">
              <Route index element={<ListQuestions />} />
            </Route>
            <Route path="verify">
              <Route path="teachers" element={<VerifyTeachers />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
