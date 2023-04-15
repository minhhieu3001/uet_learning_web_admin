import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzUxMiJ9.eyJJRCI6IjYzZjlhOWQwYTNiNDAxNzhjZGM5ZDAwMiIsInR5cGUiOiIxIiwiZW1haWwiOiJoaWV1MUBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImRhdGVfb2ZfYmlydGgiOiIyOC0wMi0yMDA2IiwicGhvbmVfbnVtYmVyIjoiMDgxMzQ4MDI0OCIsImdlbmRlciI6MSwic3RhdHVzIjowLCJyZWFsX25hbWUiOiJCw7lpIE1pbmggSGnhur91IiwiYXZhdGFyX3BhdGgiOiJodHRwczovL2Jvb2tzdG9yZWltYWdlcy5zMy5hbWF6b25hd3MuY29tL2F2YXRhci9ybl9pbWFnZV9waWNrZXJfbGliX3RlbXBfNzEzNGEwOWUtMGZhNi00YzgyLTliNDYtNDhjMzEwYzhhN2Q4LmpwZyIsInRva2VuX2RldmljZSI6ImZtc1YzVE1DVDZTcUN2cHF2YUZyWW06QVBBOTFiR2dRZ1R1MlF1aXlmRzlCeURZdGlQcDdack10YzhJcHlleFNhZ0V6bHFwd2dJZkc0RDVpbTBXaUJYSHIzVjRTanZKTVRjamlNX0l3OU9JRGJyUndHMjQtYTRNMTV0bGJrbkgxb2xEQ3ZyWVJRRndfUThabTA4TkVnUHR3RnVJYmNIRTdBeHkiLCJpc19hY3RpdmUiOnRydWUsImlhdCI6MTY4MTU2MjY2NX0.olnuBCCQj4L_XTM7NS_2Z2skI_kx7HEuErM38-97i-I6RvDh7Z6wLfFBYtprirkrmZr1YC6omvLbfI6GhFKKXw"
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
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
