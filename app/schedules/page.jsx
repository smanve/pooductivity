'use client'

import React, { useState } from 'react';
import './schedules.css';

const Page = () => {
    const [priority, setPriority] = useState('high'); // Initialize priority state

    const handlePriorityChange = (event) => {
        setPriority(event.target.value); // Update priority state
    };

    const handleGenerate = (event) => {
        event.preventDefault();
        const task = document.getElementById('task').value;
        const date = document.getElementById('date').value;
        if (!task || !date) {
            alert('Please fill in all fields');
            return;
        }
        const selectedDate = new Date(date);
        const dayOfMonth = selectedDate.getDate();
        const dayElement = document.getElementById(`day-${dayOfMonth}`);
        const newTaskElement = document.createElement('div');
        newTaskElement.textContent = `${task} (${priority})`; // Include priority in task

        // Generate random time slot between 9 AM and 5 PM
        const hour = Math.floor(Math.random() * (17 - 9 + 1)) + 9;
        const minute = Math.floor(Math.random() * 60);
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

        // Create time element
        const newTimeElement = document.createElement('div');
        newTimeElement.textContent = time;

        // Append time element
        newTaskElement.appendChild(newTimeElement);

        // Append task element
        dayElement.appendChild(newTaskElement);

        document.getElementById('task').value = '';
        document.getElementById('date').value = '';
    };

    return (
        <div className="page-container">
            <form className="task-details-container" onSubmit={handleGenerate}>
                <div className="task-detail">
                    <input type="text" id="task" placeholder="Task name" />
                    <input type="date" id="date" placeholder="Due date" />
                    <select value={priority} onChange={handlePriorityChange}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <button type="submit" className="generate-btn">Generate</button>
            </form>
            <div className="calendar-container">
                <div className="month-label">May</div>
                <div className="days-container">
                    {Array.from({ length: 31 }, (_, i) => (
                        <div key={i + 1} id={`day-${i + 1}`} className="day">
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
