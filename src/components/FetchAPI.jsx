import React, { useState } from "react";
import TableHeader from "./TableHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";

function FetchAPI() {
  const [apidata, setapidata] = useState([]);
  const [btn, serbtn] = useState(false);
  const [btn1, serbtn1] = useState(false);
  let item = apidata.map((n) => {
    return (
      <>
        <tr>
          <td style={{ border: "1px solid black", padding: "0 0.5rem" }}>
            {n.id}
          </td>
          <td style={{ border: "1px solid black", padding: "0 0.5rem" }}>
            {n.name.toUpperCase()}
          </td>
          <td style={{ border: "1px solid black", padding: "0 0.5rem" }}>
            {n.team_id}
          </td>
          <td style={{ border: "1px solid black", padding: "0 0.5rem" }}>
            {n.status}
          </td>
          <td style={{ border: "1px solid black", padding: "0 0.5rem" }}>
            {n.start_date}
          </td>
          <td style={{ border: "1px solid black", padding: "0 0.5rem" }}>
            {n.comment}
          </td>
        </tr>
      </>
    );
  });
  const fetchApt = () => {
    fetch("http://localhost:5000/ashish")
      .then((res) => {
        if (res.status === 200) {
          toast.success("Data Recovered successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          return res.json();
        } else {
          toast.error("Unable to load data", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .then((json) => {
        setapidata(json);
      });
    serbtn(true);
    serbtn1(false);
  };
  const login=()=>{
    serbtn(false);
    serbtn1(true)
  }
  return (
    <>
      <button className="btn btn-primary" type="button" onClick={fetchApt}>
        Click Me
      </button>
      <div className="btn btn-danger" onClick={login}>Sign In</div>
      <p>this is another page</p>
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        {btn ? <TableHeader /> : ""}
        {item}
        {btn1?<Login/>:""}
      </table>
      <ToastContainer />
    </>
  );
}

export default FetchAPI;
