import React, { useState } from "react";

const StarRating = ({ onStarSelect }) => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (value) => {
        setRating(value);
        onStarSelect(value); // Communicate the selected star rating back to the parent component
    };

    return (
        <div>
            {[...Array(5)].map((_, i) => (
                <button

                    key={i}
                    onClick={() => handleStarClick(i + 1)}
                    style={{ fontSize: "90px", color: rating >= i + 1 ? "#ffc107" : "#e4e5e9" }}
                    onMouseEnter={() => setRating(i + 1)}
                    onMouseLeave={() => setRating(0)}
                >
                    ★
                </button>
            ))}
            <p>Rating: {rating}</p>
        </div>
    );
};

export default StarRating;
