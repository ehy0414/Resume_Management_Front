import React, {useState, useEffect} from "react";
// import styled from "styled-components";
import ProfileHeader from "../includes/profilePage/ProfileHeader";
// import ProfileInfo from "../includes/profilePage/ProfileInfo";
import SocialLinks from "../includes/profilePage/SocialLinks";
import Introduction from "../includes/profilePage/Introduction";
import SectionTitle from "../includes/profilePage/SectionTitle";
import ContentSection from "../includes/profilePage/ContentSection";
import { useParams } from 'react-router-dom';
import api from "../api/axios";

function ProfilePage() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [formData, setFormData] = useState({ ...userInfo });
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const getUserAllInfo = async() => {
    try{
      const response = await api.get(`users/getAllInfo/${userId}`);
      console.log(response.data);
      setUserInfo(response.data);
    }catch(error){ 
      console.error();
    }
  }

  useEffect(() => {
    getUserAllInfo();
    setFormData({ ...userInfo });
  },[userId])

  useEffect(() => {
    setContent(userInfo?.content);
    setTitle(userInfo?.title);
  },[userInfo])
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onUpdate = async(formData) => {
    console.log(formData);
    try{
      const response = await api.post('/users/updateAllInfo',formData);
      getUserAllInfo();
    }catch(error){
      console.error(error);
    }
  }

  return (
    <main className="profile-page">


      <ProfileHeader userInfo={userInfo} formData={formData} setFormData={setFormData} handleChange={handleChange} onUpdate={onUpdate} isEditing={isEditing} setIsEditing={setIsEditing} title={title} content={content}/>


      <section className="introduction-section">
        {/* <SocialLinks /> */}
        <Introduction userInfo={userInfo} formData={formData} setFormData={setFormData} handleChange={handleChange} onUpdate={onUpdate} isEditing={isEditing} setIsEditing={setIsEditing} setTitle={setTitle} setContent={setContent}/>
      </section>
      <SectionTitle title="경력사항" />
      <ContentSection isEditing={isEditing}/>
      <SectionTitle title="학력사항" darkBackground />
      <ContentSection darkBackground />
      {/* <SectionTitle title="기타 이력사항" /> */}
      {/* <ContentSection /> */}
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