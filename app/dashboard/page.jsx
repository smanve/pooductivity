import GanttChart from './GnattChart.client';
import Chart from './Chart.client';
const sampleData = [
  {
    sprintName: "Assignment 1",
    startDate: "2024-06-01",
    endDate: "2024-12-15",
    milestones: [
      {
        milestoneName: "Tasks",
        startDate: "2024-06-01",
        endDate: "2024-07-07",
        tasks: [
          { name: "Task 1", type: "Development", startDate: "2024-01-01", endDate: "2024-01-03", status: "Done" },
          { name: "Task 2", type: "Testing", startDate: "2024-01-04", endDate: "2024-01-07", status: "Pending" }
        ]
      }
    ]
  },
  {
    sprintName: "Assignment 2",
    startDate: "2024-01-01",
    endDate: "2024-08-07",
    milestones: [
      {
        milestoneName: "Milestone 1",
        startDate: "2024-03-01",
        endDate: "2024-11-07",
        tasks: [
          { name: "Task 1", type: "Development", startDate: "2024-01-01", endDate: "2024-01-03", status: "Done" },
          { name: "Task 2", type: "Testing", startDate: "2024-01-04", endDate: "2024-01-07", status: "Pending" }
        ]
      }
    ]
  }
];




export default function Dashboard() { 



    return (
    <div>
  
      <Chart />
    </div>
  );
}

