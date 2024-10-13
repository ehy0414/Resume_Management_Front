import React from "react";
import styled from "styled-components";
import InputField from "./InputField";

function FormContact() {
  const inputFields = [
    { label: "Name", type: "text" },
    { label: "ID", type: "text" },
    { label: "Password", type: "password" }
  ];

  return (
    <StyledFormContact>
      {inputFields.map((field, index) => (
        <InputField key={index} label={field.label} type={field.type} />
      ))}
      <ButtonGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
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
  color: inherit;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default FormContact;