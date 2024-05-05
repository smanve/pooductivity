'use client'


import React, { useState, useEffect } from 'react';
import './signup.css'; // Ensure your CSS file is correctly linked
import { useNavigate } from 'react-router-dom';
import Link from 'next/link'; // Import Link from Next.js

export default function SignUp() {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 3600); // Delay of 3000ms or 3 seconds

        return () => clearTimeout(timer);
    }, []);

    const redirectToLogin = () => {
        navigate('/login'); // Redirect to the login page on button click
    };


    return (
        <div className="video-container">
            <video autoPlay muted loop className="background-video">
                <source src="/bg.mp4" type="video/mp4" />
            </video>
            {showForm && (
                <div className="signup-form-container">
                    <form className="signup-form">
                        <div className="form-title">Sign Up!</div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Username" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" style={{ marginBottom: '40px' }} />
                        <Link href="/login">
                            <a style={{ textDecoration: 'none' }}>
                                <button type="button" style={{ width: '250px', paddingBottom: '12px', paddingTop: '12px', paddingLeft: '70px', paddingRight: '70px', fontSize: '25px' }}>Register</button>
                            </a>
                        </Link>
                    </form>
                </div>
            )}
        </div>
    );
}

