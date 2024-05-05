'use client'


import React from 'react';
import './login.css'; // Ensure your CSS file is correctly linked
import { useNavigate } from 'react-router-dom';
import Link from 'next/link'; // Import Link from Next.js
import bggg from '../../public/bggg.png';
import Image from 'next/image'

export default function LogIn() {
    return (
        <div className="image-container1">
            <Image src={bggg} alt="Coin" wclassName="background-image" />
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
