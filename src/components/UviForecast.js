import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function UviForecast({ uviArray }) {
  const currentDate = new Date();

  // Adjust to the start of the current hour
  currentDate.setMinutes(0, 0, 0);

  // Initialize the array
  const hoursList = [];

  // Generate the list for the current hour + the next 24 hours
  for (let i = 0; i <= 24; i++) {
    const newDate = new Date(currentDate.getTime());
    newDate.setHours(currentDate.getHours() + i);

    // Only keep the hour and minute part, formatted as "HH:MM"
    const formattedTime =
      String(newDate.getHours()).padStart(2, "0") +
      ":" +
      String(newDate.getMinutes()).padStart(2, "0");

    hoursList.push(formattedTime);
  }

  const data = {
    labels: hoursList,
    datasets: [
      {
        label: "UVI",
        data: uviArray,
        backgroundColor: "orange",
        borderColor: "black",
        pointBorderColor: "orange",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 0,
        // max: 12,
      },
    },
  };

  return (
    <div className="container">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default UviForecast;
