'use client'

import React from 'react';
import POO from './POO.png';
import Notes from '@/components/canvas/notes'; // Importing the Notes component
import './poomain.css'; // Assuming you want to use the same CSS, otherwise update or remove
import Your3DScene from '../../src/components/canvas/notes';

export default function About() {
    return (
        <div className="home-page-container"> {/* You might want to rename this class */}
            <div className="glow-effect"></div>
            <h1>About Us</h1>
            <p>Welcome to our site</p>
            <div className="images-container">
                {/* Optionally, include the Notes component inside the images-container or anywhere appropriate */}
                <Your3DScene />
            </div>
            {/* <div className="triangle"></div>   */}
        </div>
    );
}
