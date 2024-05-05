'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import notesImage from '../../public/notes.png';
import POO from '../../public/POO.png';
import frameImage from '../../public/frame.png';
import NavBar from '../navbar/page';
import './pooinventory.css';



export default function PooShop() {
    const items = {
        scarf: [
            { id: 1, price: 50, img: notesImage },
            { id: 2, price: 55, img: POO },
            { id: 3, price: 20, img: frameImage },
        ],
        glasses: [
            { id: 1, price: 510, img: frameImage },
            { id: 2, price: 55, img: POO },
        ],
        shirt: [
            { id: 1, price: 510, img: frameImage },
            { id: 2, price: 55, img: POO },
            { id: 3, price: 20, img: notesImage },
        ],
        bow: [
            { id: 1, price: 510, img: frameImage },
            { id: 2, price: 55, img: POO },
        ],
        hat: [
            { id: 1, price: 510, img: frameImage },
            { id: 2, price: 55, img: notesImage },
            { id: 4, price: 75, img: notesImage },
            { id: 5, price: 95, img: POO },
            { id: 6, price: 40, img: frameImage },
        ],
    };

    const [activeCategory, setActiveCategory] = useState('scarf');
    const handleCategoryClick = category => setActiveCategory(category);

    return (
        <div className="h-screen items-center justify-end overflow-hidden" style={{ backgroundColor: '#32365F' }}>
            <NavBar />
            <div className="flex h-full">
                <button className="button-effect">
                    Equip
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