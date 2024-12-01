import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [blogTitle, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = '환영합니다! 여기는 자기소개서 사이트입니다!';
    const navigate = useNavigate();
  
    useEffect(() => {
      const typingInterval = setInterval(() => {
        setBlogTitle((prevTitleValue) => {
          let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
          setCount(count + 1);
  
          if (count >= completionWord.length) {
            setBlogTitle('환영합니다! 여기는 자기소개서 사이트입니다!');
          }
  
          return result;
        });
      }, 130);
  
      return () => {
        clearInterval(typingInterval);
      };
    });

  const handleStartClick = () => {
    navigate("/resume"); // /resume으로 이동
  };

  return (
    <div className="homepage">
      <div className="intro-container">
        <h1 className="intro-text">{blogTitle}</h1>
      </div>
      <button className="start-button" onClick={handleStartClick}>
        시작하기
      </button>

      <style>{`
        :root {
          --primary-color: #007BFF;
          --background-color: #f0f4f8;
          --text-color: #343a40;
          --button-bg: #0056b3;
          --button-hover-bg: #003f7f;
        }

        .homepage {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: var(--background-color);
          font-family: 'Arial', sans-serif;
        }

        .intro-container {
          margin-bottom: 20px;
          text-align: center;
          max-width: 80%;
        }

        .intro-text {
          font-size: 2rem;
          font-weight: bold;
          color: #182153;
          word-break: break-word;
        }

        .start-button {
          padding: 10px 20px;
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff;
          background-color: var(--button-bg);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .start-button:hover {
          background-color: var(--button-hover-bg);
        }
      `}</style>
    </div>
  );
}

export default HomePage;
