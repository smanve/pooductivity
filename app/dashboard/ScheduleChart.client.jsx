'use client';

import React from 'react';
import './schedules.css';
import { Chart } from 'react-google-charts';

const GanttChart = ({ data, sortCriteria }) => {
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  // Assemble the final chart data array
  const chartData = [columns, ...data];

  const options = {
    height: 300, // Increased chart height
    chartArea: {
      backgroundColor: '#5A6374', // Set the background color of the chart area
    },
    gantt: {
      trackHeight: 50,
      labelStyle: {
        fontName: "Helvetica",
        fontSize: 25,
        padding: 20,
        backgroundColor: '#5A6374',
        color: '#757575'  // You can customize the font color here
      },
      barHeight: 45,  // Adjust as necessary
      // Customizing the date format on the x-axis
      axisTextStyle: { color: '#000' },  // Adjust text style if needed
      percentEnabled: false,  // Optional: Adjust whether to show completion percentage
      shadowEnabled: false,  // Optional: Adjust whether to enable shadows
      criticalPathEnabled: true,  // Optional: Highlight the critical path
      criticalPathStyle: {
        stroke: '#e64a19',  // Adjust critical path color
        strokeWidth: 5
      },
      // Define date format for the x-axis
      defaultStartDateMillis: new Date().getTime(),  // Adjust the chart start date
      datePattern: 'yyyy-MM-dd',  // Set the date format, adjust if needed to show more than just year-month-day
      barFillColor: '#172233', // Set the color of the bars
    },
    backgroundColor: '#5A6374',  // Set the chart background color
  };


  return (
    <div>
      <Chart
        chartType="Gantt"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default GanttChart;
