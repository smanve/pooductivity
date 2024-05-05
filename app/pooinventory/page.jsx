'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import notesImage from '../../public/notes.png';
import frameImage from '../../public/frame.png';
import POO from '../../public/POO.png';
import NavBar from '../navbar/page';
import fit1 from '../../public/fit1.png';
import fit2 from '../../public/fit2.png';
import fit3 from '../../public/fit3.png';
import './pooshop.css';

// Import the POO image


const fontStyle = {
    fontFamily: "'Sometype Mono', monospace",
};

export default function PooShop() {
    const items = {
        scarf: [
            { id: 1, price: 50, img: fit1 },
            { id: 2, price: 55, img: fit2 },
            { id: 3, price: 20, img: fit3 },
            { id: 4, price: 50, img: fit1 },
            { id: 5, price: 55, img: fit2 },
            { id: 6, price: 20, img: fit3 },
        ],
        glasses: [
            { id: 1, price: 50, img: fit1 },
            { id: 2, price: 55, img: fit2 },
            { id: 3, price: 20, img: fit3 },
        ],
        shirt: [
            { id: 1, price: 50, img: fit1 },
            { id: 2, price: 55, img: fit2 },
            { id: 3, price: 20, img: fit3 },
        ],
        bow: [
            { id: 1, price: 50, img: fit1 },
            { id: 2, price: 55, img: fit2 },
        ],
        hat: [
            { id: 1, price: 50, img: fit1 },
            { id: 2, price: 55, img: fit2 },
            { id: 3, price: 20, img: fit3 },
            { id: 4, price: 50, img: fit1 },
            { id: 5, price: 55, img: fit2 },
            { id: 6, price: 20, img: fit3 },
        ],
    };
    const [activeCategory, setActiveCategory] = useState('scarf');
    const handleCategoryClick = category => setActiveCategory(category);

    return (
        <div className="h-screen items-center justify-end overflow-hidden" style={{ backgroundColor: '#32365F' }}>
            <NavBar />
            <div className="flex h-full">
                <Image src={POO} alt="POO Image" width={400} height={400} style={{ position: 'absolute', top: 280, left: 35, zIndex: 9999 }} />
                <button className="button-effect">
                    Buy
                </button>


                <div className="absolute left-0 top-0 opacity-50" style={{ backgroundColor: 'black', width: '500px', height: '500px', zIndex: 0, borderRadius: '25px', marginLeft: '600px', marginTop: '210px' }}></div>
                <div className="flex flex-col items-center space-y-2 p-2" style={{ width: '70%', marginBottom: '-100px', marginRight: '-50px', marginTop: '130px' }}>
                    <div className="grid grid-cols-3 grid-rows-5 gap-2" style={{ marginBottom: '-800px', marginRight: '-693px' }}>
                        {items[activeCategory].map(item => (
                            <div key={item.id} className="flex flex-col items-center rounded-lg bg-red-500 p-2 shadow" style={{ backgroundColor: '#AA2828', width: '140px', height: '140px', zIndex: 1, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }}>
                                <Image src={item.img} alt={item.name} width={70} height={70} />

                            </div>
                        ))}
                    </div>
                    <div className="mt-[-500px] flex flex-col items-center space-y-2" style={{ marginBottom: '-230px', marginRight: '-1000px' }}>
                        {Object.keys(items).map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`h-28 w-60 rounded-lg text-center ${category === activeCategory ? 'bg-customYellow1' : 'bg-customYellow hover:bg-customYellow'}`}
                                style={{ color: '#172233', fontFamily: "'Sometype Mono', monospace", fontSize: '37px', fontWeight: 'bold', marginLeft: '520px' }}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
