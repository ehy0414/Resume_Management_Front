import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResumeCard = ({ key, name, title, content, skill, userId }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/profile/${userId}`)}>
      <ProfileImage src="/images/profileImage/example.png" alt="Profile" />
      <Name>{name}</Name>
      <Skill>기술스택 : {skill}</Skill>
      <Description>{content}</Description>
    </CardContainer>
  );
};

// 카드 컨테이너 스타일
const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  margin: 16px;
  width: 300px;
  height: 350px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);  // 마우스 오버 시 카드 상승 효과
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); // 그림자 강조
  }
  
  &:active {
    transform: translateY(0);  // 클릭 시 카드가 다시 원래 위치로 돌아옴
  }
`;

// 프로필 이미지 스타일
const ProfileImage = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 16px;
`;

// 이름 스타일
const Name = styled.h2`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  margin: 10px 0;
`;

// 기술스택 스타일
const Skill = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 8px 0;
`;

// 설명 스타일
const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 12px;
  font-style: italic;
`;

export default ResumeCard;
