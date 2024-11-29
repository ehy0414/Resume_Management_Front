import React from "react";
// import styled from "styled-components";
import ProfileHeader from "../includes/profilePage/ProfileHeader";
// import ProfileInfo from "../includes/profilePage/ProfileInfo";
import SocialLinks from "../includes/profilePage/SocialLinks";
import Introduction from "../includes/profilePage/Introduction";
import SectionTitle from "../includes/profilePage/SectionTitle";
import ContentSection from "../includes/profilePage/ContentSection";

function ProfilePage() {
    return (
        <main className="profile-page">

        
                <ProfileHeader />
         
            
            <section className="introduction-section">
                {/* <SocialLinks /> */}
                <Introduction />
            </section>
            <SectionTitle title="경력사항" />
            <ContentSection />
            <SectionTitle title="학력사항" darkBackground />
            <ContentSection darkBackground />
            <SectionTitle title="기타 이력사항" />
            <ContentSection />
            <style>{`
        .profile-page {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .introduction-section {
          background-color: #f1f1f1;
          display: flex;
          min-height: 504px;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
          justify-content: flex-start;
          padding: 0 235px 102px 232px;
        }
        @media (max-width: 991px) {
          .introduction-section {
            max-width: 100%;
            padding: 0 20px 100px;
          }
        }
      `}</style>
        </main>
    );
}

export default ProfilePage;