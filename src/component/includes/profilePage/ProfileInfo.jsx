import React from "react";
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

function ProfileInfo() {
  return (
    <InfoContainer>
      <EditButton>
        <EditIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/93b33e933c3c66f9802c61b0ad6d40a5d5c06db07b7a1a9bcf6e86c31dc0fdb8?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db" alt="Edit" />
        수정하기
      </EditButton>
      <Name>Rachel Smith</Name>
      <JobTitle>법률전문 컨설턴트</JobTitle>
      <ContactInfo>
        전화번호 <br />
        <span>02-1234-5678</span> <br />
        <br />
        이메일 <br />
        <span>info@mysite.com </span> <br />
        <br />
        주소 <br />
        <span> 500 Terry Francois Street </span> <br />
        <span>San Francisco, CA 94158</span>
      </ContactInfo>
      <Website>
        홈페이지 <br />
        <span>www.wix.com</span>
      </Website>
    </InfoContainer>
  );
}

export default ProfileInfo;