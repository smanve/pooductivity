'use client';

import React, { useState} from 'react';
import ScheduleChart from './scheduleChart.client';
  // Task data from the server or local
  const tasks = [
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
  ];

const Chart = () => { 
  // State to hold the selected sorting criteria
  const [sortCriteria, setSortCriteria] = useState('dueDate');

  // Handler for changing sort criteria
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };


    // State to keep track of sorting preference
  // const [sortPreference, setSortPreference] = useState('dueDate'); // Default to 'dueDate'

  // Function to sort tasks based on the current preference
  const sortedTasks = tasks.sort((a, b) => {
    if (sortCriteria === 'priority') {
      if (a.priority !== b.priority) {
        return b.priority - a.priority; // Assuming priority is numeric, higher is more important
      }
      return a.due_date - b.due_date; // Secondary sort by due date if priorities are equal
    }
    return a.due_date - b.due_date; // Primary sort by due date
  });
  // Convert priorities to numerical values for sorting
  const priorityMap = {
    "high": 3,
    "medium": 2,
    "low": 1
  };

  // Sort tasks based on due date and priority
  tasks.sort((a, b) => {
    if (a.due_date < b.due_date) {
      return -1;
    } else if (a.due_date > b.due_date) {
      return 1;
    } else {
      return b.priority - a.priority;
    }
  });
    
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

  return (
    <div>
     <h1 className="text-3xl font-bold underline">Your scheduled tasks</h1>
      <div>
        <label htmlFor="sortCriteria" className="mr-2">Sort Tasks By:</label>
        <select id="sortCriteria" value={sortCriteria} onChange={handleSortChange} className="">
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <ScheduleChart data={rows} />
    </div>
  );
}

export default Chart;
