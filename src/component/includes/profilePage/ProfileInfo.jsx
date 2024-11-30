import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InfoContainer = styled.section`
  background-color: #f1f1f1;
  display: flex;
  width: 550px;
  height: 570px;
  min-width: 450px;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 18px 125px 43px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 0 100px 20px;
  }
`;

const EditButton = styled.button`
  border-radius: 8px;
  background-color: #2c2c2c;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  padding: 12px;
  font: 400 16px/1 Inter, sans-serif;
  border: 1px solid #2c2c2c;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const EditIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  align-self: stretch;
  margin: auto 0;
`;

const Name = styled.h1`
  font-size: 27px;
  margin-top: 32px;
`;

const JobTitle = styled.h2`
  font-size: 14px;
  line-height: 1.8;
  letter-spacing: 0.7px;
  margin-top: 13px;
`;

const ContactInfo = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.7px;
  margin-top: 33px;
`;

const Website = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.7px;
  margin: 18px 0 -25px;
  @media (max-width: 991px) {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 8px;
`;

function ProfileInfo({ userInfo, onUpdate, isEditing, setIsEditing, formData, title, content }) {
  // const [isEditing, setIsEditing] = useState(false);
  const [formDataState, setFormData] = useState({ ...userInfo });

  useEffect(() => {
    if (isEditing) {
      setFormData({ ...userInfo }); // 수정 모드일 때 userInfo로 formData 설정
    }
  }, [isEditing, userInfo]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formDataState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append('userId', formDataState.userId);
    updatedData.append('name', formDataState.name);
    updatedData.append('desiredJob', formDataState.desiredJob);
    updatedData.append('phone', formDataState.phone);
    updatedData.append('address', formDataState.address);
    updatedData.append('github', formDataState.github);
    updatedData.append('skill', formDataState.skill);
    updatedData.append('title', title);
    updatedData.append('content', content);
    updatedData.append('profileImage', userInfo?.profileImage);
    if (formData.imageFile) {
      updatedData.append('image', formData.imageFile); // 이미지 파일 추가
    }

    await onUpdate(updatedData); // 업데이트 함수 호출
    setIsEditing(false);
  };


  return (
    <InfoContainer>
      <EditButton onClick={isEditing ? handleSubmit : handleEditClick}>
        <EditIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/93b33e933c3c66f9802c61b0ad6d40a5d5c06db07b7a1a9bcf6e86c31dc0fdb8?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db" alt="Edit" />
        {isEditing ? "저장하기" : "수정하기"}
      </EditButton>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formDataState.name}
            onChange={handleChange}
            placeholder="이름"
          />
          <Input
            type="text"
            name="desiredJob"
            value={formDataState.desiredJob}
            onChange={handleChange}
            placeholder="희망 직무"
          />
          <Input
            type="text"
            name="phone"
            value={formDataState.phone}
            onChange={handleChange}
            placeholder="전화번호"
          />
          {/* <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
          /> */}
          <Input
            type="text"
            name="address"
            value={formDataState.address}
            onChange={handleChange}
            placeholder="주소"
          />
          <Input
            type="url"
            name="github"
            value={formDataState.github}
            onChange={handleChange}
            placeholder="GitHub 링크"
          />
          <Input
            type="text"
            name="skill"
            value={formDataState.skill}
            onChange={handleChange}
            placeholder="기술스택"
          />
        </form>
      ) : (
        <>
          <Name>{userInfo?.name}</Name>
          <JobTitle>{userInfo?.desiredJob}</JobTitle>
          <ContactInfo>
            전화번호 <br />
            <span>{userInfo?.phone}</span> <br />
            <br />
            이메일 <br />
            <span>{userInfo?.email}</span> <br />
            <br />
            주소 <br />
            <span>{userInfo?.address}</span> <br />
            <br />
            기술스택 <br />
            <span>{userInfo?.skill}</span> <br />
          </ContactInfo>
          <Website>
            Git <br />
            <a href={userInfo?.github} target="_blank" rel="noopener noreferrer">{userInfo?.github}</a>
          </Website>
        </>
      )}
    </InfoContainer>
  );
}

export default ProfileInfo;
