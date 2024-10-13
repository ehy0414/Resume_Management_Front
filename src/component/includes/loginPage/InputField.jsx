import React from "react";
import styled from "styled-components";

function InputField({ label, type }) {
  const id = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <StyledInputField>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={`Enter your ${label.toLowerCase()}`} />
    </StyledInputField>
  );
}

const StyledInputField = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 24px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Label = styled.label`
  color: var(--sds-color-text-default-default);
  line-height: 1.4;
`;

const Input = styled.input`
  align-self: stretch;
  flex: 1;
  border-radius: 8px;
  background-color: #fff;
  min-width: 240px;
  margin-top: 8px;
  width: 100%;
  overflow: hidden;
  color: var(--sds-color-text-default-tertiary);
  line-height: 1;
  padding: 12px 16px;
  border: 1px solid #d9d9d9;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default InputField;