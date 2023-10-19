import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["35% Female", "40% Male", "25% Unknown"],
    datasets: [
      {
        label: "# of Votes",
        data: [25, 35, 40],
        backgroundColor: ["rgb(0,150,255)", "rgb(255,130,60)", "rgb(50,60,70)"],
        borderColor: ["rgb(0,150,255)", "rgb(255,130,60)", "rgb(50,60,70)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "right", // Set legend position to right
      },
    },
  };
  return (
    <div style={{ height: "320px", width: "370px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
