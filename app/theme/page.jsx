import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from 'next/link'
import './theme.css';

function Page() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <Image
                src="/img/theme.png"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
            <div style={{ position: 'absolute', top: '185px', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Image
                    src="/img/beach.png"
                    alt="Beach Image"
                    width={200} // Adjust width as needed
                    height={200} // Adjust height as needed
                />
            </div>

            <div style={{ position: 'absolute', top: '54%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '36px' }}>
                <p style={{ fontSize: '70px', color: "#FFD80B", fontFamily: "Cherry Bomb One, system-ui" }}>Theme for today: </p>
                <p style={{ fontSize: '100px', marginBottom: '36px', fontFamily: "Cherry Bomb One, system-ui" }}>Beach Day</p>
            </div>

            {/* Use Link component to navigate to "/rank" */}
            <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Link href="/rank">
                    <a style={{
                        backgroundColor: 'white',
                        border: '2px solid white',
                        padding: '14px 35px',
                        fontSize: '27px',
                        cursor: 'pointer',
                        borderRadius: '20px',
                        textDecoration: 'none', // Remove underline
                        color: 'black', // Change text color
                        fontFamily: "Sometype Mono, monospace",
                        fontWeight: 'bolder'
                    }}>
                        Join
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Page;
