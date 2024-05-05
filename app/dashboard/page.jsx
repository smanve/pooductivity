import React from 'react';
import Chart from './Chart.client';
import './schedules.css';
import NavBar from '@/navbar/page';

export default function Dashboard() {
  return (

    <div style={{ backgroundColor: '#32365F', fontFamily: "'Sometype Mono', monospace", paddingLeft: '20px', paddingTop: '20px', paddingRight: '70px' }}>
      <NavBar />
      <div style={{ display: 'flex', alignItems: 'center', margin: '50px', marginLeft: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="taskInput" style={{ color: 'white', marginBottom: '4px', marginTop: '120px', textAlign: 'center', fontSize: '25px', fontWeight: "bold", fontFamily: "'Sometype Mono', monospace" }}>Input task here!</label>
          <input type="text" placeholder="Task Name" className="mb-2 mr-4" style={{ marginTop: '20px' }} /> {/* Adjusted marginTop */}
          <input type="date" className="mb-2 mr-4" />
          <select className="mb-2 mr-4">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="rounded-md bg-blue-500 px-2 py-1 text-center text-lg text-white" style={{ width: '222px', fontFamily: "'Sometype Mono', monospace" }}>Generate</button>


        </div>
      </div>
      <div style={{ marginLeft: '390px', marginTop: '-430px' }}>
        <Chart />
      </div>
    </div>
  );
}
