"use client"
import React, { useState } from 'react';
import StarRating from '../StarRating/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const ReviewForm = () => {
    const [safetyRating, setSafetyRating] = useState(0);
    const [communicationRating, setCommunicationRating] = useState(0);
    const [recommend, setRecommend] = useState(null); // use null for initial state
    const [praise, setPraise] = useState('');

    const handleSafetyRatingChange = (newRating) => {
        setSafetyRating(newRating);
    };

    const handleCommunicationRatingChange = (newRating) => {
        setCommunicationRating(newRating);
    };

    const handleRecommend = (value) => {
        setRecommend(value);
    };

    const handlePraiseChange = (e) => {
        setPraise(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = {
            safetyRating,
            communicationRating,
            recommend,
            praise,
        };
        const message = `
            Safety Rating: ${review.safetyRating}
            Communication Rating: ${review.communicationRating}
            Recommend: ${review.recommend ? 'Yes' : 'No'}
            Praise: ${review.praise}
        `;
        alert(`Review submitted successfully!\n\n${message}`);
    };

    return (
        <div className="reviewForm">
            <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Leave a Review</h1>

        
            <form onSubmit={handleSubmit}>
                <div className="ratingSection">
                    <div className="starRating">
                        <h1 style={{fontSize:'1.5em',fontWeight:'bold'}}>Safety</h1>
                        <p>Add your rating on our safety</p>
                        <StarRating value={safetyRating} onChange={handleSafetyRatingChange} />
                    </div>
                    <div className="starRating">
                        <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Communication</h1>
                        <p>Add your rating on our communication</p>
                        <StarRating value={communicationRating} onChange={handleCommunicationRatingChange} />
                    </div>
                </div>

                <div className="recommendSection">
                    <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Would You Recommend Trusti?</h2>
                    <div>
                        <button
                            type="button"
                            onClick={() => handleRecommend(true)}
                            style={{
                                color: recommend === true ? 'lightgreen' : '#a7a6a6',
                                border: 'none',
                                cursor: 'pointer',
                                margin: '10px',
                                marginRight: '30px',
                                background: 'none'
                            }}
                        >
                            <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                            YES
                        </button>
                        <button
                            type="button"
                            onClick={() => handleRecommend(false)}
                            style={{
                                color: recommend === false ? 'lightcoral' : '#a7a6a6',
                                border: 'none',
                                cursor: 'pointer',
                                background: 'none'
                            }}
                        >
                            <FontAwesomeIcon icon={faThumbsDown} size="2x" />
                            NO
                        </button>
                    </div>
                </div>
                <div className="praiseSection">
                    <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Praise</h2>
                    <textarea
                        rows="2"
                        cols="30"
                        value={praise}
                        onChange={handlePraiseChange}
                        placeholder="Enter your feedback here..."
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: 'lightgreen', 
                        color: 'white', 
                        padding: '10px 20px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        fontSize: '16px', 
                        display:'flex',
                        marginLeft:'auto',
                        marginRight: 'auto'
                    }}
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;
