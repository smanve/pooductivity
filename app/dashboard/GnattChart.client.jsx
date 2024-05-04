// 'use client';

// import React, { useEffect, useState } from "react";
// import { Chart } from "react-google-charts";

// const GanttChart = ({ data }) => {
//   const [chartData, setChartData] = useState([]);

//   const CHART_COLUMNS = [
//     { type: "string", label: "Task ID" },
//     { type: "string", label: "Task Name" },
//     { type: "string", label: "Resource" },
//     { type: "date", label: "Start Date" },
//     { type: "date", label: "End Date" },
//     { type: "number", label: "Duration" },
//     { type: "number", label: "Percent Complete" },
//     { type: "string", label: "Dependencies" },
//   ];

//   const today = new Date();
//   today.setHours(0, 0, 0, 0); // Normalize to start of the day

//   // Define the range for the Gantt chart's horizontal axis
//   const findDateRange = (inputData) => {
//     let minDate = new Date();
//     let maxDate = new Date();
//     if (inputData && inputData.length > 0) {
//       minDate = new Date(Math.min(...inputData.map(sprint => new Date(sprint.startDate).getTime())));
//       maxDate = new Date(Math.max(...inputData.map(sprint => new Date(sprint.endDate).getTime())));
//     }
//     return { minDate, maxDate };
//   };

//   const { minDate, maxDate } = findDateRange(data);

//   const getChartOptions = () => ({
//     height: 2800,
//     gantt: {
//       trackHeight: 30,
//     },
//     hAxis: {
//       minValue: minDate,
//       maxValue: maxDate,
//       format: 'MMM dd, yyyy',
//     },
//   });

//   const getChartData = (inputData) => {
//     if (!Array.isArray(inputData)) {
//       console.error('Invalid data:', inputData);
//       return [];
//     }

//     return inputData.flatMap(sprint => {
//       const sprintData = [
//         `${sprint.sprintName}/sprint`,
//         sprint.sprintName,
//         "Sprint",
//         new Date(sprint.startDate),
//         new Date(sprint.endDate),
//         null,
//         0, // Adjust completion percentage logic as needed
//         null,
//       ];

//       const milestoneData = sprint.milestones.flatMap(milestone => {
//         const tasks = milestone.tasks.map(task => [
//           `${sprint.sprintName}/milestone/${milestone.milestoneName}/${task.name}`,
//           task.name,
//           `${task.type} Task`,
//           new Date(task.startDate),
//           new Date(task.endDate),
//           null,
//           task.status === "Done" ? 100 : 0,
//           null,
//         ]);

//         return [
//           [
//             `${sprint.sprintName}/milestone/${milestone.milestoneName}`,
//             milestone.milestoneName,
//             "Milestone",
//             new Date(milestone.startDate),
//             new Date(milestone.endDate),
//             null,
//             0, // Adjust completion percentage logic as needed
//             `${sprint.sprintName}/sprint`,
//           ],
//           ...tasks
//         ];
//       });

//       return [sprintData, ...milestoneData];
//     });
//   };

//   useEffect(() => {
//     setChartData(getChartData(data));
//   }, [data]);

//   return (
//     <div className="p-4 h-full">
//       <Chart
//         width={"100%"}
//         height={"100%"}
//         chartType="Gantt"
//         loader={<div>Loading Chart</div>}
//         data={[CHART_COLUMNS, ...chartData]}
//         options={getChartOptions()} // Use the enhanced options here
//         rootProps={{ "data-testid": "1" }}
//       />
//     </div>
//   );
// };

// export default GanttChart;
