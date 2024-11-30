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
  cursor: pointer; /* 클릭 가능하도록 설정 */
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ImageInput = styled.input`
  display: none; /* 기본적으로 input을 숨김 */
`;

const UploadButton = styled.label`
  cursor: pointer;
  background-color: #2c2c2c;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 20px;
  display: ${props => (props.isEditing ? 'block' : 'none')}; /* isEditing이 true일 때만 표시 */
`;

function ProfileHeader({ userInfo, formData, setFormData, handleChange, onUpdate, isEditing, setIsEditing, title, content }) {
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 이미지 미리보기 설정
        setFormData((prevData) => ({
          ...prevData,
          profileImage: reader.result, // 이미지 미리보기
          imageFile: file // 파일 저장
        }));
      };
      reader.readAsDataURL(file);
    }
  };


  const handleImageClick = () => {
    if (isEditing) {
      document.getElementById("image-upload").click(); // 파일 입력 클릭
    }
  };

  return (
    <Header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ProfileImage
          loading="lazy"
          src={formData.profileImage || `http://localhost:8000/uploads/${userInfo?.profileImage}`} 
          alt="Profile"
          onClick={handleImageClick} // 이미지 클릭 시 파일 선택
        />
        {/* 이미지 업로드 버튼 및 파일 입력 */}
        <ImageInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="image-upload"
        />
        <ProfileInfo
          userInfo={userInfo}
          formData={formData}
          handleChange={handleChange}
          onUpdate={onUpdate}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          title={title}
          content={content}
        />
      </div>
    </Header>
  );
}

export default ProfileHeader;
