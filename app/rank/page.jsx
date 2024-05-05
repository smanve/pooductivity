"use client";
import React, { useState } from "react";
import './rank.css'; // Ensure this CSS file contains styles for rectangles and images
import Image from 'next/image';
import StarRating from './StarRating';

function Page() {
    const [users, setUsers] = useState([
        { username: "@ap231", stars: 125 },
        { username: "@pp002", stars: 124 },
        { username: "@cdx23", stars: 90 },
    ]);

    const handleStarSelect = (selectedStars) => {
        // Create a new array to avoid mutating the original state directly
        const updatedUsers = users.map(user =>
            user.username === "@pp002" ? { ...user, stars: user.stars + selectedStars } : user
        );

        // Sort the users based on their star ratings
        updatedUsers.sort((a, b) => b.stars - a.stars);

        // Update the state with the new array
        setUsers(updatedUsers);
    };

    return (
        <div style={{ position: 'relative' }}>

            <div className="rectangle" style={{
            }}></div>
            <div className="rectangle2"></div>
            <div
                style={{
                    position: 'absolute',
                    left: '620px',
                    top: '650px',
                }}
            >
                <StarRating onStarSelect={handleStarSelect} />
            </div>

            <table
                style={{
                    position: 'absolute',
                    left: '120px',
                    top: '290px',
                    fontSize: '30px',
                    borderSpacing: '10px', // Add spacing between cells
                    zIndex: 20, // Ensure the table appears in front
                }}
            >
                <thead>
                    <tr>
                        <th style={{ padding: '10px', fontFamily: "Sometype Mono, monospace" }}>Username</th>

                        <th style={{ padding: '10px', fontFamily: "Sometype Mono, monospace" }}>Stars</th> {/* Add padding to th */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px', zIndex: 100, fontFamily: "Sometype Mono, monospace" }}>{user.username}</td> {/* Add padding to td */}
                            <td style={{ padding: '10px', zIndex: 10, fontFamily: "Sometype Mono, monospace" }}>{user.stars}</td> {/* Add padding to td */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div
                style={{
                    position: 'absolute',
                    left: '820px',
                    top: '300px',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '24px',
                    color: 'black',
                    zIndex: 1,
                    fontFamily: "Sometype Mono, monospace",

                    className: "ating" // Ensure it's displayed in front of the image
                }}
            >
                Poo
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '820px',
                    top: '280px',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '24px',
                    color: 'black',
                    fontFamily: "Sometype Mono, monospace",
                    zIndex: 1,
                    // Ensure it's displayed in front of the image
                }}
            >
                @pp002
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '869px',
                    top: '110px',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '52px',
                    color: '#992121',
                    zIndex: 1,
                    fontFamily: "Cherry Bomb One, system-ui"
                }}
                className="snow-day" // Use the correct class name
            >
                Snow Day
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '180px',
                    top: '130px',
                }}
            >
                <Image
                    src="/img/trophey.png"
                    alt="trophie"
                    width={123}
                    height={122}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: '600px',
                    top: '80px',
                }}
            >
                <Image
                    src="/img/themecontainer.png"
                    alt="theme container"
                    width={550}
                    height={181}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: '345px',
                    top: '375px',
                    zIndex: 50,
                }}
            >
                <Image
                    src="/img/star.png"
                    alt="theme container"
                    width={22}
                    height={22}

                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '345px',
                    top: '440px',
                    zIndex: 50,
                }}
            >
                <Image
                    src="/img/star.png"
                    alt="theme container"
                    width={22}
                    height={22}
                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '345px',
                    top: '500px',
                    zIndex: 50,
                }}
            >
                <Image
                    src="/img/star.png"
                    alt="theme container"
                    width={22}
                    height={22}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: '60px',
                    top: '360px',
                    zIndex: 2, // Adjust the z-index to make it appear in front
                }}
            >
                <div style={{ position: 'relative', left: '60px', }}>
                    <Image src="/img/textbox.png" alt="textbox" width={250} height={150} />
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '60px',
                    top: '430px',
                    zIndex: 2, // Adjust the z-index to make it appear in front
                }}
            >
                <div style={{ position: 'relative', left: '60px', }}>
                    <Image src="/img/textbox.png" alt="textbox" width={250} height={150} />
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '60px',
                    top: '490px',
                    zIndex: 2, // Adjust the z-index to make it appear in front
                }}
            >
                <div style={{ position: 'relative', left: '60px', }}>
                    <Image src="/img/textbox.png" alt="textbox" width={250} height={150} />
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '550px',
                    top: '180px',
                }}
            >
                <Image
                    src="/img/runway.png"
                    alt="runway"
                    width={600}
                    height={200}
                />
            </div>
        </div>
    );
}

export default Page;
