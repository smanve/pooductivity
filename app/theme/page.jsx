import React from 'react';
import Image from 'next/image';

function Page() {
    const handleJoinClick = () => {
        // Redirect to another site when the button is clicked
        window.location.href = 'https://www.google.com/'; // Replace 'https://example.com/another-page' with the URL of the page you want to redirect to
    };

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



            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '36px' }}>
                <p>Theme for today: </p>
                <p style={{ fontSize: '24px' }}>Beach Day</p>
            </div>

            {/* Your content goes here */}
            <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <button
                    style={{
                        backgroundColor: 'white',
                        border: '2px solid white',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                    }}
                    onClick={handleJoinClick}

                >
                    Join
                </button>
            </div>
        </div>
    );
}

export default Page;
