import React from "react";
import styled from "styled-components";
import FormContact from "../includes/loginPage/FormContact";

function JoinPage() {
  return (
    <StyledHeroForm>
      <Header>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
      </Header>
      <FormContact />
    </StyledHeroForm>
  );
}

const StyledHeroForm = styled.main`
  background-color: #f5f5f5;
  display: flex;
  min-height: 913px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  padding: 190px 24px;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 100px 20px;
  }
`;

const Header = styled.header`
  display: flex;
  width: 151px;
  max-width: 100%;
  flex-direction: column;
  color: var(--sds-color-text-brand-on-brand-tertiary);
  text-align: center;
  line-height: 1.2;
  justify-content: start;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Title = styled.h1`
  letter-spacing: -2.16px;
  font: var(--sds-typography-title-hero-font-weight) var(--sds-typography-title-hero-size) var(--sds-typography-title-hero-font-family);
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.h2`
  margin-top: 8px;
  font: var(--sds-typography-subtitle-font-weight) var(--sds-typography-subtitle-size-base) var(--sds-typography-subtitle-font-family);
`;

export default JoinPage;