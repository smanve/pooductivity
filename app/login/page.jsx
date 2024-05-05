'use client'


import React, { useState, useEffect } from 'react';
import './login.css'; // Ensure your CSS file is correctly linked
import { useNavigate } from 'react-router-dom';
import Link from 'next/link'; // Import Link from Next.js


export default function LogIn() {
    return (
        <div className="video-container">
            <video autoPlay muted loop className="background-video">
                <source src="/boat-video.mp4" type="video/mp4" />
            </video>
            <div className="signup-form-container">
                <form className="signup-form">
                    <div className="form-title">Login!</div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" style={{ marginBottom: '60px' }} />
                    <Link href="/poomain">
                        <a style={{ textDecoration: 'none' }}>
                            <button type="button" style={{ width: '250px', paddingBottom: '12px', paddingTop: '12px', paddingLeft: '70px', paddingRight: '70px', fontSize: '25px' }}>Login</button>
                        </a>
                    </Link>
                </form>
            </div>
        </div>
    );
}
