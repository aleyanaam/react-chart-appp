//Task 4:Fetch Data For Charts

//Imports the Chart components
import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart.jsx";
import LineChart from "./components/LineChart.jsx";
import ScatterChart from "./components/ScatterChart.jsx";
import BubbleChart from "./components/BubbleChart.jsx";

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //// Fetches data from a local JSON file containing financial data
        const response = await fetch("/financial_data.json");
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) return <p>Loading data...</p>;

  //Once the data is fetched the charts are rendered
  return (
    <div>
      <h1>Financial Dashboard</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App;