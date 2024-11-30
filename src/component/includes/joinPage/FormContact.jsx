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
      });
      
      const navigate = useNavigate();
    
      const inputFields = [
        { key: "name", label: "이름", type: "text", holder: "이름을 입력해주세요" },
        { key: "email", label: "아이디", type: "email", holder: "아이디를 입력해주세요" },
        { key: "password", label: "비밀번호", type: "password", holder: "비밀번호를 입력해주세요" },
        { key: "confirmPassword", label: "비밀번호 재입력", type: "password", holder: "비밀번호를 재입력해주세요" },
      ];

      const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
      };

      const handleSubmit = async () => {
        try {
          const response = await api.post("/users/join", {
            email: formData.email,
            password: formData.password,
            name: formData.name
          });
          alert("회원가입 성공!");
          alert("로그인 페이지로 넘어갑니다");
          navigate("/");
          console.log(response.data);
        } catch (error) {
            if(error.status === 409) {
                alert(error.response.data.essMsg);
            }
          console.error(error);
        }
      };

      console.log(formData.email)

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

export default FormContact;