import React, {useEffect, useState} from "react";
import styled from "styled-components";

const IntroTitle = styled.h2`
  color: #182153;
  font: 400 30px Inter, sans-serif;
`;

const IntroText = styled.p`
  color: #182153;
  text-align: center;
  font: 400 18px/29px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 8px;
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
      {
        isEditing ? (
          <>
            <IntroTitle>
              <Input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="제목 입력" />
            </IntroTitle>
            <IntroText>
              <Input
                type="text"
                name="introText"
                value={content}
                onChange={handleContentChange}
                placeholder="본문 입력"
              />
            </IntroText>
          </>
        ):
        <>
        <IntroTitle>{userInfo?.title}</IntroTitle>
        <IntroText>
          {userInfo?.content}
        </IntroText>
        </>
    }
     
    </>
  );
}

export default Introduction;