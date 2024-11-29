import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ResumeCard = ({ name, title, description, onViewResume }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px',
    height: '300px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    // transition: 'transform 0.2s',
    textAlign: 'center'
  };

  const porfilImgStyle = {
    width: '200px',
    height: '150px'
  }

  const nameStyle = {
  };
  const descriptionStyle = {
  };

  const navigate = useNavigate();

  return (
    <div
      style={cardStyle} 
      onClick={() => navigate('/profile')}
    >
      <img style={porfilImgStyle} src={"/images/profileImage/example.png"}/>
      <h2 style={nameStyle}>{name}</h2>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default ResumeCard;
