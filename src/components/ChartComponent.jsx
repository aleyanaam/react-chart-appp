//Task 2: Create the Reusable ChartComponent

//Chart lifecycle is handled through useEffect and useRef
import React, { useEffect, useRef } from 'react'; 
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    //Checks for an existing Chart.js instance and destroys the existing chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    //Creates a new Chart.js instance
    chartInstanceRef.current = new Chart(ctx, {
      type,
      data,
      options,
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };

  }, [type, data, options]);

  return <canvas ref={chartRef}></canvas>;

}

export default ChartComponent;