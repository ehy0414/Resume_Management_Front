import React from "react";
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

const AddButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #182153;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0f1a3f;
  }
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #ff4d4d; /* 빨간색 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000; /* 어두운 빨간색 */
  }
`;

function ContentSection({ darkBackground, isEditing, data, setData, userId }) {
  const handleInputChange = (index, field, value) => {
    const updatedExperiences = [...data];
    updatedExperiences[index][field] = value; // 해당 필드 업데이트
    setData(updatedExperiences);
  };

  const addExperience = () => {
    const newExperience = {
      userId: userId,
      occupation: "",
      company: "",
      period: "",
      details: ""
    };
    setData([...data, newExperience]); // 새로운 경력 항목 추가
  };

  const deleteExperience = (index) => {
    const updatedExperiences = data.filter((_, i) => i !== index); // 해당 인덱스 삭제
    setData(updatedExperiences);
  };

  return (
    <Section darkBackground={darkBackground}>
      <ExperienceContainer>
        {data.map((data, index) => (
          <ExperienceItem key={index}>
            {isEditing ? (
              <>
                {data?.occupation &&
                  <EditInput
                    type="text"
                    value={data.occupation}
                    onChange={(e) => handleInputChange(index, 'occupation', e.target.value)}
                    placeholder="직업 제목"
                  />
                }

                <EditInput
                  type="text"
                  value={data.company}
                  onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                  placeholder="회사명"
                />
                <EditInput
                  type="text"
                  value={data.period}
                  onChange={(e) => handleInputChange(index, 'period', e.target.value)}
                  placeholder="근무 기간"
                />
                {data?.details &&
                  <EditInput
                    type="text"
                    value={data.details}
                    onChange={(e) => handleInputChange(index, 'details', e.target.value)}
                    placeholder="설명"
                  />
                }

                <DeleteButton onClick={() => deleteExperience(index)}>삭제</DeleteButton>
              </>
            ) : (
              <>
                {data?.occupation ?
                  <ExperienceTitle>{data.occupation} - {data.company}</ExperienceTitle> :
                  <ExperienceTitle>{data.company}</ExperienceTitle>
                }
                {/* <ExperienceTitle>{data.occupation} - {data.company}</ExperienceTitle> */}
                <ExperienceDuration>{data.period}</ExperienceDuration>
                {data?.occupation &&
                  <ExperienceDescription>{data.details}</ExperienceDescription>
                }
                {/* <ExperienceDescription>{data.details}</ExperienceDescription> */}
              </>
            )}
          </ExperienceItem>
        ))}
        {isEditing && <AddButton onClick={addExperience}>추가</AddButton>}
      </ExperienceContainer>
    </Section>
  );
}

export default ContentSection;
