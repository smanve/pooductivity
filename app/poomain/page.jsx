'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import notesImage from '../../public/notes.png';
import POO from '../../public/POO.png';
import frameImage from '../../public/frame.png';
import './poomain.css'; // Ensure your CSS path is correct
import NavBar from '../navbar/page';
import coinImg from '../../public/coin.png';
import Shop from '../shop/page';
import calendarIcon from '../../public/calendarIcon.png';
import trophyIcon from '../../public/trophyIcon.png';


const PooMain = () => {
    const [coins, setCoins] = useState(100); // State to track coins
    const [showChange, setShowChange] = useState(false); // State to control visibility of change in coins

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
        const change = event.target.checked ? 5 : -5; // Determine change in coins
        setCoins(coins => coins + change); // Update coins state
        if (event.target.checked) {
            setShowChange(true); // Show change in coins
            setTimeout(() => setShowChange(false), 1000); // Hide change after 3 seconds
        }
    };

    return (
        <div className="home-page-container">
            <div className="contact-container">
                <div style={{ position: 'relative' }}>
                    <nav style={{ marginTop: '20px', marginRight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', zIndex: 1 }}>
                        <Image src={coinImg} alt="Coin" width={80} height={80} />
                        <span style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '950px', color: 'white' }}>{coins}</span>
                        <Link href="/poomain">
                            <a className="nav-link " style={{ marginTop: '12px', marginRight: '30px', display: 'flex', alignItems: 'center', zIndex: 10 }}>
                                <Image src={POO} alt="About Us" width={70} height={70} />
                            </a>
                        </Link>
                        <Link href="/theme">
                            <a className="nav-link " style={{ marginTop: '5px', marginRight: '30px', display: 'flex', alignItems: 'center', zIndex: 1 }}>
                                <Image src={trophyIcon} alt="Contact Us" width={60} height={60} />
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="nav-link " style={{ marginTop: '5px', display: 'flex', alignItems: 'center', zIndex: 1 }}>
                                <Image src={calendarIcon} alt="Contact Us" width={60} height={60} />
                            </a>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="image-text20" >Poo</div>
            <div className="images-container">
                <div className="image-container">
                    <Image src={notesImage} alt="Notes Image" className="notes-image" />
                    <div className="image-text2">To-do list</div>
                    <ul className="image-text1">
                        <li>
                            <input type="checkbox" id="task1" onChange={handleCheckboxChange} />
                            <label htmlFor="task1">  Submit FIT1045 part 1</label>
                        </li>
                        <li>
                            <input type="checkbox" id="task2" onChange={handleCheckboxChange} />
                            <label htmlFor="task2">  FIT1008 weekly quiz</label>
                        </li>
                        <li>
                            <input type="checkbox" id="task3" onChange={handleCheckboxChange} />
                            <label htmlFor="task3">  MAC x Atlassian webhack</label>
                        </li>
                        <li>
                            <input type="checkbox" id="task4" onChange={handleCheckboxChange} />
                            <label htmlFor="task4">  Clar birthday</label>
                        </li>
                    </ul>
                    <ul className="image-text3">
                        <li>Get 5 coins for every</li>
                        <li>completed task!</li>
                    </ul>
                </div>
                <Image src={POO} alt="POO Image" className="poo-image" />
                <Image src={frameImage} alt="Frame Image" className="frame-image" />
            </div>
            <div className="triangle"></div>
            <div className="shop-container">
                <Shop />
            </div>
            {/* "Closet", "Medals", "Shop" navigation */}
            <div style={{ position: 'absolute', justifyContent: 'space-around', fontFamily: "'Sometype Mono', monospace", marginLeft: '995px', marginTop: '350px', marginBottom: '-370px', fontSize: '21px', fontWeight: 'bold', color: 'white' }}>
                <span style={{ margin: '0 31px' }}>Closet</span>
                <span style={{ margin: '0 34px' }}>Medals</span>
                <span style={{ margin: '0 31px' }}>Shop</span>
            </div>
            {/* Displaying change in coins */}
            {showChange && (
                <div className="coin-change-container">
                    <span className="hi-text">
                        {coins > 100 ? `+$${coins - 100}` : coins < 100 ? `${coins - 100}` : ''}
                    </span>
                </div>
            )}

        </div>
    );
}

export default PooMain;