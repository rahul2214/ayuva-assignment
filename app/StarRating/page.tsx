// app/StarRating/page.tsx
'use client';
import React from 'react';

interface StarRatingProps {
    value: number;
    onChange: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ value, onChange }) => {
    const handleClick = (rating: number) => {
        onChange(rating);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    style={{
                        cursor: 'pointer',
                        color: star <= value ? 'gold' : 'gray',
                        fontSize: '2em', // Increase the font size to make the stars larger
                    }}
                    onClick={() => handleClick(star)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
