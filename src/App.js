import "./App.css";
import { useEffect, useState } from "react";
import datasets from "./data.json";
import LineChart from "./components/LineChart";

function App() {
  const [userData, setUserData] = useState({
    labels: datasets.map((data) => data.services),
    datasets: [
      {
        label: "Users Gained",
        data: datasets.map((data) => data.cost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  //Hello
  // useEffect(()=>{
  // const data = fetch('url');
  // setUserData(data);
  // },[])
  return (
    <div
      style={{
        width: "40rem",
      }}
    >
      <LineChart chartData={userData} />
    </div>
  );
}

export default App;
