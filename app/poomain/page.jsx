'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import notesImage from '../../public/notes.png';
import POO from '../../public/POO.png';
import frameImage from '../../public/frame.png';
import './poomain.css'; // Ensure your CSS path is correct
import Contact from '../navbar/page';
import coinImg from '../../public/coin.png';
import Shop from '../shop/page';

export default function About() {
    return (

        <div className="home-page-container">
            <div className="contact-container"> {/* New wrapper div for Contact component */}
                <Image src={coinImg} alt="coin Image" className="coin-image" />

                <Contact />
                <div className="image-text30">50</div>

            </div>
            <div className="glow-effect"></div>
            <div className="image-text20">Poo</div>
            <div className="images-container">
                <div className="image-container">
                    <Image src={notesImage} alt="Notes Image" className="notes-image" />
                    <div className="image-text2">To-do list</div>
                    <ul className="image-text1">
                        <li>1. Submit FIT1045 part 1</li>
                        <li>2. FIT1008 weekly quiz</li>
                        <li>3. MAC x Atlassian webhack</li>
                        <li>4. Clar birthday</li>
                    </ul>
                    <ul className="image-text3"> <li>Get 5 coins for every</li> <li>completed task! </li></ul>
                </div>
                <Image src={POO} alt="POO Image" className="poo-image" />
                <Image src={frameImage} alt="Frame Image" className="frame-image" />
            </div>
            <div className="triangle"></div>
            <div className="shop-container">
                <Shop />

            </div>
            <div style={{ display: 'absolute', justifyContent: 'space-around', marginTop: '-40px', marginLeft: '995px', fontSize: '21px', fontWeight: 'bold', color: 'white' }}>
                <span style={{ margin: '0 31px' }}>Closet</span>
                <span style={{ margin: '0 34px' }}>Medals</span>
                <span style={{ margin: '0 31px' }}>Shop</span>
            </div>
        </div>

    );
}
