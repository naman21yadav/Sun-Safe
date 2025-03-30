import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Ensures Chart.js components are auto-registered.

function Track() {
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const retrievedData = localStorage.getItem("dates");
    if (retrievedData) {
      try {
        const parsedData = JSON.parse(retrievedData);
        const combinedData = parsedData.map((dateString) => {
          const [date, timeWithZ] = dateString.split("T");
          const time = timeWithZ.replace("Z", ""); // Remove 'Z'
          return { date, time };
        });

        setDates(combinedData.map((item) => item.date));
        setTimes(combinedData.map((item) => item.time));

        setupChartData(
          combinedData.map((item) => item.date),
          combinedData.map((item) => item.time)
        );
      } catch (error) {
        console.error("Error parsing data from local storage:", error);
      }
    }
  }, []);

  const setupChartData = (dates, times) => {
    const chartData = {
      labels: dates,
      datasets: [
        {
          label: "Time",
          data: times.map((time) => {
            // Assuming times are in 'HH:mm:ss' format, convert to a decimal hour for simplicity
            const [hours, minutes, seconds] = time.split(":");
            return (
              Number(hours) + Number(minutes) / 60 + Number(seconds) / 3600
            );
          }),
          borderColor: "rgb(255, 140, 0)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
      ],
    };
    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: "Dates",
          },
        },
        y: {
          title: {
            display: true,
            text: "Time (hours)",
          },
          ticks: {
            // Optional: Customize y-axis ticks to display as desired time format
            callback: function (value, index, values) {
              // This callback transforms the decimal hour back to a readable time string if necessary
              // or you can adjust it according to your specific formatting needs
              return value.toFixed(2) + " hrs"; // Simple hours representation, adjust as needed
            },
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      maintainAspectRatio: false, // Optional: if you want to remove the aspect ratio constraint
    };

    setChartData({
      datasets: chartData.datasets,
      labels: chartData.labels,
      options: options,
    });
  };

  return (
    <>
      <Header />
      <div className="tracker-container">
        {dates.length > 0 && times.length > 0 ? (
          <div style={{ width: "900px", height: "600px" }}>
            <Line data={chartData} options={chartData.options} />
          </div>
        ) : (
          <p>No data found in local storage.</p>
        )}
      </div>
    </>
  );
}

export default Track;
