import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

function FormContact({ setUserInfo }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputFields = [
    { key: "email", label: "아이디", type: "email", holder: "아이디를 입력해주세요" },
    { key: "password", label: "비밀번호", type: "password", holder: "비밀번호를 입력해주세요" },
  ];

  const handleChange = (key, value) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const data = {
      email: user.email,
      password: user.password,
    };
    try {
      const response = await api.post("/users/login", data);
      console.log(response.data);
      alert("로그인 성공!");
      // 비밀번호를 제외한 정보만 저장
      const { password, ...userInfo } = response.data; // 비밀번호 제외
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo)); // 예시
      setUserInfo(userInfo); // 상태 업데이트
      navigate(`/profile/${response.data.userId}`);
    } catch (error) {
      console.error(error);
    }
  };

  // Enter 키 감지
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(); // Enter 키 누르면 로그인
    }
  };

  return (
    <StyledFormContact onKeyDown={handleKeyDown}>
      {inputFields.map((field) => (
        <InputField
          key={field.key}
          label={field.label}
          type={field.type}
          holder={field.holder}
          value={user[field.key]}
          onChange={(value) => handleChange(field.key, value)}
        />
      ))}
      <ButtonGroup>
        <SubmitButton type="button" onClick={handleSubmit}>
          로그인
        </SubmitButton>
      </ButtonGroup>
    </StyledFormContact>
  );
}

const StyledFormContact = styled.form`
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  min-width: 320px;
  margin-top: 32px;
  width: 320px;
  max-width: 100%;
  flex-direction: column;
  justify-content: start;
  padding: 24px;
  font: var(--sds-typography-body-font-weight-regular) var(--sds-typography-body-size-medium) var(--sds-typography-body-font-family);
  border: 1px solid #d9d9d9;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  align-items: center;
  gap: 16px;
  color: var(--sds-color-text-brand-on-brand);
  line-height: 1;
  justify-content: start;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubmitButton = styled.button`
  align-self: stretch;
  border-radius: 8px;
  background-color: #2c2c2c;
  min-width: 240px;
  width: 100%;
  gap: 8px;
  overflow: hidden;
  flex: 1;
  margin: auto 0;
  padding: 12px;
  border: 1px solid #2c2c2c;
  color: white;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default FormContact;
