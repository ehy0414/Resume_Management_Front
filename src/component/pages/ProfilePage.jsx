import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import ProfileHeader from "../includes/profilePage/ProfileHeader";
// import ProfileInfo from "../includes/profilePage/ProfileInfo";
import { useParams } from 'react-router-dom';
import api from "../api/axios";
import ContentSection from "../includes/profilePage/ContentSection";
import Introduction from "../includes/profilePage/Introduction";
import SectionTitle from "../includes/profilePage/SectionTitle";

function ProfilePage() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [formData, setFormData] = useState({ ...userInfo });
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [career, setCareer] = useState([]);
  const [education, setEducation] = useState([]);

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
    getCareer();
    getEducation();
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
      await updateCareer();
      await updateEducation();
      getUserAllInfo();
      getCareer();
      getEducation();
    }catch(error){
      console.error(error);
    }
  }

  const getCareer = async() => {
    try{
      const response = await api.get(`/users/getCareer/${userId}`);
      console.log(response.data);
      setCareer(response.data);
    }catch(error){
      console.error(error);
    }
  }

  const updateCareer = async() => {
    console.log(career);
    try{
      const response = await api.post("/users/updateCareer",career);

    }catch(error){
      console.error(error);
    }
  }

  const getEducation = async() => {
    try{
      const response = await api.get(`/users/getEducation/${userId}`);
      console.log(response.data);
      setEducation(response.data);
    }catch(error){
      console.error(error);
    }
  }

  const updateEducation = async() => {
    console.log(career);
    try{
      const response = await api.post("/users/updateEducation",education);

    }catch(error){
      console.error(error);
    }
  }

  return (
    <main className="profile-page">


      <ProfileHeader userInfo={userInfo} formData={formData} setFormData={setFormData} handleChange={handleChange} onUpdate={onUpdate} isEditing={isEditing} setIsEditing={setIsEditing} title={title} content={content}/>

      <section className="introduction-section">
        {/* <SocialLinks /> */}<br/>
        <Introduction userInfo={userInfo} formData={formData} setFormData={setFormData} handleChange={handleChange} onUpdate={onUpdate} isEditing={isEditing} setIsEditing={setIsEditing} setTitle={setTitle} setContent={setContent}/>
      </section>
      <SectionTitle title="경력사항" />
          <ContentSection isEditing={isEditing} data={career} setData={setCareer} userId={userId}/>
      <SectionTitle title="학력사항" darkBackground />
      {/* <ContentSection darkBackground /> */}
      {/* <SectionTitle title="기타 이력사항" /> */}
      <ContentSection isEditing={isEditing} data={education} setData={setEducation} userId={userId}/>
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