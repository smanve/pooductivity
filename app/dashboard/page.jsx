import React from 'react';
import Chart from './Chart.client';
import './schedules.css';
import NavBar from '@/navbar/page';

export default function Dashboard() {
  return (

    <div style={{ backgroundColor: '#32365F', paddingLeft: '20px', paddingBottom: '20px', paddingTop: '30px', paddingRight: '70px' }}>
      <NavBar />
      <div style={{ display: 'flex', alignItems: 'center', margin: '50px', marginLeft: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="taskInput" style={{ color: 'white', marginBottom: '4px', marginTop: '120px' }}>Input task here!</label>
          <input type="text" placeholder="Task Name" className="mr-4 mb-2" style={{ marginTop: '20px' }} /> {/* Adjusted marginTop */}
          <input type="date" className="mr-4 mb-2" />
          <select className="mr-4 mb-2">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Generate</button>
        </div>
      </div>
      <div style={{ marginLeft: '390px', marginTop: '-430px' }}>
        <Chart />
      </div>
    </div>
  );
}
