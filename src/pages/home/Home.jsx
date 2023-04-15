import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/ListTransaction/Table";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzUxMiJ9.eyJJRCI6IjY0M2FhZmU2YzhlNGY5NmJkMWE5YTVkYiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicGhvbmVfbnVtYmVyIjoiMDE5MzIxMzIxMjMiLCJyZWFsX25hbWUiOiJjdW9uZyIsImlhdCI6MTY4MTU2Nzc2NH0.B9sBZUUPuSC4HQ8MNzL9sJT9HeodBR0Q9QDURXBQP-A01-YeuepDUM38aSH8vuwzA9b7b_iQNOeoAbaBLaUE1A"
    );
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="teachers" />
          <Widget type="questions" />
          <Widget type="payment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
