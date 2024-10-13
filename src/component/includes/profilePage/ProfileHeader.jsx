import React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
const Header = styled.header`
  background-color: #182153;
  display: flex;
  min-height: 694px;
  width: 100%;
  align-items: flex-end;
  overflow: hidden;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 233px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ProfileImage = styled.img`
  aspect-ratio: 0.97;
  object-fit: contain;
  object-position: center;
  width: 550px;
  min-width: 450px;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

function ProfileHeader() {
  return (
    <Header>
            <div style={{ display: "flex", alignItems: "center" }}>
      <ProfileImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cab6e67db84fe91f6a462890c56a91bcc8354bb0c33d4bb13945c19417001c1a?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db" alt="Profile" />
      <ProfileInfo />

            </div>
    </Header>
  );
}

export default ProfileHeader;