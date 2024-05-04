'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Ensure this is used or remove it if not necessary
import winner2 from '../../public/winner2.png';
import winner1 from '../../public/winner1.png';
import winner3 from '../../public/winner3.png';
import NavBar from '../navbar/page';



export default function PooShop() {
    const items = {
        scarf: [
            { id: 1, price: '2nd - beach', img: winner2 },
            { id: 2, price: '1st - gala', img: winner1 },
            { id: 3, price: '3rd - xmas', img: winner3 },
            { id: 4, price: '1st - batman', img: winner1 }
        ]
    };

    const [activeCategory, setActiveCategory] = useState('scarf');
    const handleCategoryClick = category => setActiveCategory(category);

    return (
        <div className="h-screen items-center justify-end overflow-hidden" style={{ backgroundColor: '#32365F' }}>
            <NavBar />
            <div className="flex h-full">
                <div className="absolute left-0 top-0 opacity-50" style={{ backgroundColor: 'black', width: '500px', height: '500px', zIndex: 0, borderRadius: '25px', marginLeft: '600px', marginTop: '210px' }}></div>
                <div className="flex flex-col items-center space-y-2 p-2" style={{ width: '70%', marginBottom: '-100px', marginRight: '-50px', marginTop: '130px' }}>
                    <div className="grid grid-cols-3 grid-rows-5 gap-2" style={{ marginBottom: '-800px', marginRight: '-693px' }}>
                        {items[activeCategory].map(item => (
                            <div key={item.id} className="flex flex-col items-center rounded-lg bg-red-500 p-2 shadow" style={{ backgroundColor: '#AA2828', width: '140px', height: '140px', zIndex: 1, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }}>
                                <Image src={item.img} alt={item.name} width={70} height={70} />
                                <p className="text-lg text-white">{item.price}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}