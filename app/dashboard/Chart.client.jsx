'use client';

import React, { useState, useEffect } from 'react';
import ScheduleChart from './scheduleChart.client';
import './schedules.css';
// Task data from the server or local

const Chart = () => {

  //use state for tasks
  const [tasks, setTasks] = useState([
    {
      "title": "Assignment 1- FIT2101",
      "due_date": new Date(2024, 5, 6),
      "expected_time_days": 2,  // Changed to days
      "priority": 1
    },
    {
      "title": "Assignment 2- FIT2108",
      "due_date": new Date(2024, 5, 12), // should come after first
      "expected_time_days": 2,  // Changed to days
      "priority": 2
    },
    {
      "title": "Assignment 3- FIT3170",
      "due_date": new Date(2024, 5, 20),
      "expected_time_days": 3,  // Changed to days
      "priority": 3
    },
    {
      "title": "Assignment 4- FIT2101",
      "due_date": new Date(2024, 5, 22),
      "expected_time_days": 2,  // Changed to days
      "priority": 3
    },
    {
      "title": "Assignment 5- FIT2108",
      "due_date": new Date(2024, 5, 20), // should come after first
      "expected_time_days": 1,  // Changed to days
      "priority": 1
    },
    {
      "title": "Assignment 6- FIT3170",
      "due_date": new Date(2024, 6, 29),
      "expected_time_days": 5,  // Changed to days
      "priority": 3
    }
  ]);

  const [rows, setRows] = useState('');

  // State to hold the selected sorting criteria
  const [sortCriteria, setSortCriteria] = useState('dueDate');

  // Handler for changing sort criteria
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const customSort = (tasks) => {
    for (let i = 0; i < tasks.length - 1; i++) {
      for (let j = i + 1; j < tasks.length; j++) {
        // Calculate deadlines
        const deadlineA = new Date(tasks[i].due_date.getTime() + tasks[i].expected_time_days * 24 * 60 * 60 * 1000);
        const deadlineB = new Date(tasks[j].due_date.getTime() + tasks[j].expected_time_days * 24 * 60 * 60 * 1000);

        // Compare deadlines
        if (deadlineA.getTime() === deadlineB.getTime()) {
          // If deadlines are the same, sort based on priority
          if (tasks[i].priority > tasks[j].priority) {
            // Swap tasks
            const temp = tasks[i];
            tasks[i] = tasks[j];
            tasks[j] = temp;
          }
        } else if (deadlineA.getTime() > deadlineB.getTime()) {
          // If deadline of task A is after deadline of task B, swap if priority of task A is higher
          if (tasks[i].priority > tasks[j].priority) {
            // Swap tasks
            const temp = tasks[i];
            tasks[i] = tasks[j];
            tasks[j] = temp;
          }
        }
      }
    }
    return tasks;
  };

  useEffect(() => {
    let sortedTasks = [];
    if (sortCriteria === 'priority') {
      sortedTasks = customSort(tasks);
    } else {
      // Sort tasks based on due date and priority
      let sortedTasks = tasks;
      sortedTasks.sort((a, b) => {
        if (a.due_date < b.due_date) {
          return -1;
        } else if (a.due_date > b.due_date) {
          return 1;
        } else {
          return b.priority - a.priority;
        }
      });
    }

    let currentStartTime = new Date(); // Start from now
    const rows = tasks.map((task, index) => {
      const durationDays = task.expected_time_days; // Duration in days
      const endTime = new Date(currentStartTime.getTime() + durationDays * 24 * 60 * 60 * 1000); // Calculate end time
      const dependency = index > 0 ? `Task ${index}` : null; // Add dependency to the previous task
      let label = '';
      if (task.label == 'high') {
        label = '#FF0000'
      } else if (task.label == 'medium') {
        label = '#FFFF00'
      } else {
        //low
        label = '#0000FF'
      }

      const row = [
        `Task ${index + 1}`,
        `Task ${index + 1} - ${task.priority} priority`,
        "Default",
        currentStartTime,
        endTime,
        null,
        100,
        dependency
      ];
      currentStartTime = endTime; // Update start time for the next task
      return row;
    });
    setRows(rows);
  }, [tasks, sortCriteria]);

  return (
    <div style={{ color: '#FFFFFF', backgroundColor: '#32365F', padding: '20px' }}>
      <h1 className="text-8xl font-bold text-center font-cherry-bomb-one">Your Tasks</h1>
      <div className="mb-10"></div>
      <div>

        <label htmlFor="sortCriteria" className="mr-2" style={{ color: '#ffffff' }}>Sort Tasks By:</label>
        <select id="sortCriteria" value={sortCriteria} onChange={handleSortChange} className="text-black">
          <option value="dueDate" className="text-black">Due Date</option>
          <option value="priority" className="text-black">Priority</option>
        </select>

      </div>
      <p className="text-white text-xl font-bold mt-6 mb-4">
        <span className="mr-50"> </span>
        <span className="ml-10 mr-20">May 7</span>
        <span className="mr-20">May 9</span>
        <span className="mr-20">May 12</span>
        <span className="mr-20">May 15</span>
        <span>May 20</span>
      </p>


      <ScheduleChart data={rows} />
    </div>
  );

}

export default Chart;
