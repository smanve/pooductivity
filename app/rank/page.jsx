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
            <div className="rectangle"></div>
            <div className="rectangle2"></div>

            <div
                style={{
                    position: 'absolute',
                    left: '620px',
                    top: '600px',
                }}
            >
                <StarRating onStarSelect={handleStarSelect} />
            </div>

            <table
                style={{
                    position: 'absolute',
                    left: '75px',
                    top: '300px',
                    fontSize: '30px',
                    borderSpacing: '10px', // Add spacing between cells
                }}
            >
                <thead>
                    <tr>
                        <th style={{ padding: '10px' }}>Username</th> {/* Add padding to th */}
                        <th style={{ padding: '10px' }}>Stars</th> {/* Add padding to th */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px' }}>{user.username}</td> {/* Add padding to td */}
                            <td style={{ padding: '10px' }}>{user.stars}</td> {/* Add padding to td */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div
                style={{
                    position: 'absolute',
                    left: '850px',
                    top: '300px',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '24px',
                    color: 'black',
                    zIndex: 1,

                    className: "ating" // Ensure it's displayed in front of the image
                }}
            >
                Ating
            </div>


            <div
                style={{
                    position: 'absolute',
                    left: '850px',
                    top: '280px',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '24px',
                    color: 'black',
                    zIndex: 1,
                    // Ensure it's displayed in front of the image
                }}
            >
                @pp002
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '850px',
                    top: '130px',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '24px',
                    color: 'black',
                    zIndex: 1,
                    // Ensure it's displayed in front of the image
                }}
            >
                Beach Day
            </div>



            <div
                style={{
                    position: 'absolute',
                    left: '130px',
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
                    top: '100px',
                }}
            >
                <Image
                    src="/img/themecontainer.png"
                    alt="theme container"
                    width={500}
                    height={141}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: '300px',
                    top: '385px',
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
                    left: '300px',
                    top: '450px',
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
                    left: '300px',
                    top: '517px',
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
                    left: '600px',
                    top: '200px',
                }}
            >
                <Image
                    src="/img/runway.png"
                    alt="runway"
                    width={500}
                    height={200}
                />
            </div>
        </div>
    );
}

export default Page;
