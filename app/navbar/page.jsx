'use client'

import React, { createContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import calendarIcon from '../../public/calendarIcon.png';
import POO from '../../public/POO.png';

import trophyIcon from '../../public/trophyIcon.png';
import coinImg from '../../public/coin.png';


export default function NavBar() {
    // Assume coins is a state variable representing the number of coins
    const coins = 100; // Example value, you should replace this with your actual coin count

    return (
        <div style={{ position: 'relative' }}>
            <nav style={{ marginTop: '20px', marginRight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', zIndex: 1 }}>
                <Image src={coinImg} alt="Coin" width={80} height={80} />
                <span style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '950px', color: 'white' }}>{coins}</span>
                <Link href="/poomain">
                    <a className="nav-link" style={{ marginTop: '12px', marginRight: '30px', display: 'flex', alignItems: 'center', zIndex: 10 }}>
                        <Image src={POO} alt="About Us" width={70} height={70} />
                    </a>
                </Link>
                {/* Link to Contact Us page with image */}
                <Link href="/pooshop">
                    <a className="nav-link" style={{ marginTop: '5px', marginRight: '30px', display: 'flex', alignItems: 'center', zIndex: 1 }}>
                        <Image src={trophyIcon} alt="Contact Us" width={60} height={60} />
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="nav-link" style={{ marginTop: '5px', display: 'flex', alignItems: 'center', zIndex: 1 }}>
                        <Image src={calendarIcon} alt="Contact Us" width={60} height={60} />
                    </a>
                </Link>
            </nav>

        </div>

    );
}
