'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import calendarIcon from '../../public/calendarIcon.png'; // Ensure you have this image if you want to add another link
import POO from '../../public/POO.png';
import trophyIcon from '../../public/trophyIcon.png';

export default function NavBar() {
    return (
        <div>
            <nav style={{ marginTop: '20px', marginRight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                {/* Link to About Us page with image */}
                <Link href="/pooMain">
                    <a className="nav-link" style={{ marginTop: '10px', marginRight: '30px', display: 'flex', alignItems: 'center' }}>
                        <Image src={POO} alt="About Us" width={80} height={80} />
                    </a>
                </Link>
                {/* Link to Contact Us page with image */}
                <Link href="/contact">
                    <a className="nav-link" style={{ marginTop: '5px', marginRight: '30px', display: 'flex', alignItems: 'center' }}>
                        <Image src={trophyIcon} alt="Contact Us" width={70} height={70} />
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="nav-link" style={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                        <Image src={calendarIcon} alt="Contact Us" width={70} height={70} />
                    </a>
                </Link>
            </nav>
        </div>
    );
}

