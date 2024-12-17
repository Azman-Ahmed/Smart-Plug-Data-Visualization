import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Papa from "papaparse";
import './Dashboard.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
  const { fileName } = useParams();
  const navigate = useNavigate(); // Initialize the navigate hook
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/${fileName}.csv`);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const parsedData = result.data;

            const labels = parsedData.map((row) => row.Time || "N/A");
            const currentData = parsedData.map((row) =>
                parseFloat(row.Current || 0)
            );
            const voltageData = parsedData.map((row) =>
                parseFloat(row.Voltage || 0)
            );
            const wattageData = parsedData.map((row) =>
                parseFloat(row.Wattage || 0)
            );
            const powerData = parsedData.map((row) =>
                parseFloat(row.Power || 0)
            );

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: "Current (mA)",
                  data: currentData,
                  borderColor: "red",
                  fill: false,
                },
                {
                  label: "Voltage (V)",
                  data: voltageData,
                  borderColor: "green",
                  fill: false,
                },
                {
                  label: "Wattage (Watts)",
                  data: wattageData,
                  borderColor: "yellow",
                  fill: false,
                },
                {
                  label: "Power (Wh)",
                  data: powerData,
                  borderColor: "blue",
                  fill: false,
                },
              ],
            });
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing CSV:", error);
      }
    };

    fetchData();
  }, [fileName]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
      <div className="dashboard">
        <div className="chart-container">
          {chartData.labels.length > 0 ? (
              <Line data={chartData} options={options} />
          ) : (
              <p>Loading data...</p>
          )}
          <button className="go-back-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
  );
};

export default Dashboard;
