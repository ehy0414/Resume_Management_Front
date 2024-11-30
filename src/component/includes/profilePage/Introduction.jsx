import React, { useEffect, useState } from "react";
import styled from "styled-components";

const IntroTitle = styled.h2`
  color: #182153;
  font: 400 30px Inter, sans-serif;
`;

const IntroText = styled.p`
  color: #182153;
  text-align: left;
  font: 400 18px/29px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  width: 1000px;
  height: 1000px;
`;

const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 8px;
`;

const TextArea = styled.textarea`
  width: 100%; /* 폭을 100%로 설정 */
  height: 100px; /* 원하는 높이로 설정 */
  margin: 8px 0;
  padding: 12px; /* 패딩을 추가하여 내부 여백을 늘림 */
  font-size: 16px; /* 폰트 크기 조정 (선택 사항) */
  border: 1px solid #ccc; /* 테두리 스타일 (선택 사항) */
  border-radius: 4px; /* 모서리 둥글게 (선택 사항) */
  resize: vertical; /* 사용자가 세로로 크기를 조정할 수 있도록 설정 */
`;

function Introduction({ userInfo, onUpdate, isEditing, setIsEditing, formData, setTitle, setContent }) {
  const [title, setTitleState] = useState(userInfo?.title || "");
  const [content, setContentState] = useState(userInfo?.content || "");

  useEffect(() => {
    if (isEditing) {
      setTitleState(userInfo?.title || "");
      setContentState(userInfo?.content || "");
    }
  }, [isEditing, userInfo]);

  const handleTitleChange = (e) => {
    setTitleState(e.target.value);
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContentState(e.target.value);
    setContent(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <>
          <IntroTitle>
            <Input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="제목 입력" />
          </IntroTitle>
          <IntroText>
            <TextArea
              name="introText"
              value={content}
              onChange={handleContentChange}
              placeholder="본문 입력"
            />
          </IntroText>
        </>
      ) : (
        <>
          <IntroTitle>{userInfo?.title}</IntroTitle>
          <IntroText dangerouslySetInnerHTML={{ __html: userInfo?.content.replace(/\n/g, "<br />") }} />
        </>
      )}
    </>
  );
}

export default Introduction;
