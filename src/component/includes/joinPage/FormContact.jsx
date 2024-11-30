import React, { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState(""); // 이메일 오류 상태
  const navigate = useNavigate();

  const inputFields = [
    { key: "name", label: "이름", type: "text", holder: "이름을 입력해주세요" },
    { key: "email", label: "이메일", type: "email", holder: "이메일을 입력해주세요" },
    { key: "password", label: "비밀번호", type: "password", holder: "비밀번호를 입력해주세요" },
    { key: "confirmPassword", label: "비밀번호 재입력", type: "password", holder: "비밀번호를 재입력해주세요" },
  ];

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));

    // 이메일 입력이 변경될 때마다 유효성 검사
    if (key === "email") {
      validateEmail(value);
    }
  };

  // 이메일 유효성 검사 함수
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 검사 정규식
    if (!regex.test(email)) {
      setEmailError("유효한 이메일 주소를 입력해주세요.");
    } else {
      setEmailError(""); // 유효하면 에러 메시지 제거
    }
  };

  const handleSubmit = async () => {
    // 이메일 유효성 검사
    if (emailError) {
      alert("유효한 이메일을 입력해주세요.");
      return; // 이메일에 오류가 있으면 회원가입 진행하지 않음
    }

    // 비밀번호 확인 (선택적으로 추가)
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return; // 비밀번호가 일치하지 않으면 회원가입 진행하지 않음
    }

    try {
      const response = await api.post("/users/join", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      alert("회원가입 성공!");
      alert("로그인 페이지로 넘어갑니다");
      navigate("/"); // 회원가입 성공 후 로그인 페이지로 리다이렉트
      console.log(response.data);
    } catch (error) {
      if (error.status === 409) {
        alert(error.response.data.essMsg);
      }
      console.error(error);
    }
  };

  return (
    <StyledFormContact>
      {inputFields.map((field) => (
        <InputField
          key={field.key}
          label={field.label}
          type={field.type}
          holder={field.holder}
          value={formData[field.key]}
          onChange={(value) => handleChange(field.key, value)}
        />
      ))}
      {emailError && <ErrorMessage>{emailError}</ErrorMessage>} {/* 이메일 에러 메시지 표시 */}
      <ButtonGroup>
        <SubmitButton type="button" onClick={handleSubmit}>
          회원가입
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;

export default FormContact;
