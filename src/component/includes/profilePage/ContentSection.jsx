import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${props => props.darkBackground ? "#182153" : "#fff"};
  border-top: ${props => props.darkBackground ? "1px solid #fff" : "none"};
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  min-height: 781px;
  width: 100%;
  padding: 20px; /* 패딩 추가 */
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ExperienceContainer = styled.div`
  margin-top: 20px; /* 위쪽 여백 */
`;

const ExperienceItem = styled.div`
  background-color: #f9f9f9; /* 경력 아이템 배경 색상 */
  border: 1px solid #ccc; /* 테두리 */
  border-radius: 8px; /* 모서리 둥글게 */
  padding: 15px; /* 내부 여백 */
  margin-bottom: 15px; /* 아래쪽 여백 */
`;

const ExperienceTitle = styled.h3`
  font-size: 18px;
  color: #182153; /* 제목 색상 */
`;

const ExperienceDuration = styled.p`
  font-size: 14px;
  color: #999; /* 기간 색상 */
`;

const ExperienceDescription = styled.p`
  font-size: 14px;
  color: #555; /* 설명 색상 */
`;

const EditInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

function ContentSection({ darkBackground, isEditing }) {
  // 더미 경력 데이터 정의
  const [experiences, setExperiences] = useState([
    {
      title: "소프트웨어 엔지니어",
      company: "ABC 테크",
      duration: "2021년 1월 - 현재",
      description: "웹 애플리케이션 개발 및 유지보수."
    },
    {
      title: "프론트엔드 개발자",
      company: "XYZ 솔루션",
      duration: "2019년 6월 - 2020년 12월",
      description: "사용자 인터페이스 설계 및 구현."
    },
    {
      title: "인턴",
      company: "123 스타트업",
      duration: "2018년 7월 - 2019년 5월",
      description: "프로젝트 지원 및 문서화 작업."
    }
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value; // 해당 필드 업데이트
    setExperiences(updatedExperiences);
  };

  return (
    <Section darkBackground={darkBackground}>
      <ExperienceContainer>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index}>
            {isEditing ? (
              <>
                <EditInput 
                  type="text" 
                  value={experience.title} 
                  onChange={(e) => handleInputChange(index, 'title', e.target.value)} 
                  placeholder="직업 제목" 
                />
                <EditInput 
                  type="text" 
                  value={experience.company} 
                  onChange={(e) => handleInputChange(index, 'company', e.target.value)} 
                  placeholder="회사명" 
                />
                <EditInput 
                  type="text" 
                  value={experience.duration} 
                  onChange={(e) => handleInputChange(index, 'duration', e.target.value)} 
                  placeholder="근무 기간" 
                />
                <EditInput 
                  type="text" 
                  value={experience.description} 
                  onChange={(e) => handleInputChange(index, 'description', e.target.value)} 
                  placeholder="설명" 
                />
              </>
            ) : (
              <>
                <ExperienceTitle>{experience.title} - {experience.company}</ExperienceTitle>
                <ExperienceDuration>{experience.duration}</ExperienceDuration>
                <ExperienceDescription>{experience.description}</ExperienceDescription>
              </>
            )}
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </Section>
  );
}

export default ContentSection;
