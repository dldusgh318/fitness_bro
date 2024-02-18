// ReviewDetail.js

import { useState, useEffect } from 'react';
import './ReviewDetail.css'
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';

// 받은 후기 상세보기

const ReviewDetail = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    
    const [userData, setUserData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const location = useLocation();
    const reviewId = location.state.reviewId;

    useEffect(() => {

        axios.get(`${apiUrl}coaches/reviews/${reviewId}`)
            .then((response) => {
                const data = response.data;
                console.log("API 응답:", response);

                if (data.isSuccess) {
                    const result = data.result;
                    setUserData(result);
                } else {
                    console.error("API 요청 실패:", data.message);
                }
            })
            .catch(error => {
                console.error("API 요청 중 오류 발생:", error);
                console.error("에러 상세 정보:", error.response);
            });
    }, [reviewId]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? userData.pictureURLs.length - 1 : prevIndex - 1));
    };
      
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === userData.pictureURLs.length - 1 ? 0 : prevIndex + 1));
    };
    
    const navigate = useNavigate();

    const onClickBackBtn = () => {
        navigate(-1);
    }

    // 별을 렌더링하는 함수
    const renderStars = () => {
        const starArray = Array.from({ length: 5 }, (_, index) => index);

        return starArray.map((index) => (
            <span
                key={index}
                className="star"
            >
                <Icon
                    icon={index < userData.rating ? "carbon:star-filled" : "carbon:star"} // 후기의 별점에 따라 별이 채워지는지 여부 결정
                    style={{ color: "#643E23" }}
                />
            </span>
        ));
    };

    const renderImages = () => {
        return userData.pictureURLs.map((url, index) => (
            <img key={index} src={url} alt={`${index}`} className={index === currentIndex ? 'active' : ''} />
        ));
    };

    return (
        <div className="ReviewDetail">

            <div className="titleAndBack">
                <h2>후기 작성</h2>
                <button onClick={onClickBackBtn} className="backBtn">뒤로가기</button>
            </div>

            <div className="star-text-container">
                <div className="star-container">
                    <div className="iconsForImages">
                        <button onClick={handlePrev} className="arrow-button">
                            <Icon className="leftArrow" icon="mdi:keyboard-arrow-left" />
                        </button>

                        {userData.pictureURLs && userData.pictureURLs.length > 0 ? (
                            renderImages()
                        ) : (
                            <Icon className="clipIcon" icon="mdi:paperclip" />
                        )}

                        <button onClick={handleNext} className="arrow-button">
                            <Icon className="rightArrow" icon="mdi:keyboard-arrow-right" />
                        </button>
                    </div>

                    <div className="start-rating">
                        <div className="rating-text">{userData.rating}</div>

                        <div className="stars-for-review-detail">
                            {renderStars()} {/* renderStars 함수를 호출하여 별을 렌더링함 */}
                        </div>
                    </div>
                </div>
                
                <div className="reviewTextarea">
                    <div className="userDataDetail">
                        <p className="nickname">{userData.nickname}</p>

                        <p className="createdAt">{userData.createdAt}</p>

                        <p className="content">{userData.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;
