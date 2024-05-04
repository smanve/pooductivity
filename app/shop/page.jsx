'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clothesIcon from '../../public/clothes.png';
import medalIcon from '../../public/medal.png';
import shopIcon from '../../public/shop3.png';

export default function Contact() {
    return (
        <div>
            <nav style={{ marginTop: '20px', marginRight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                {/* Link to About Us page with image */}
                <Link href="/pooinventory">
                    <a className="nav-link" style={{ marginTop: '5px', marginRight: '50px', display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <Image src={clothesIcon} alt="About Us" width={95} height={95} />

                    </a>
                </Link>
                {/* Link to Contact Us page with image */}
                <Link href="/poomedal">
                    <a className="nav-link" style={{ marginTop: '6px', marginRight: '50px', display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <Image src={medalIcon} alt="Contact Us" width={75} height={75} />

                    </a>
                </Link>
                <Link href="/pooshop">
                    <a className="nav-link" style={{ display: 'flex', marginTop: '6px', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <Image src={shopIcon} alt="Contact Us" width={95} height={95} />

                    </a>
                </Link>
            </nav>
        </div>
    );
}

