import React from "react";
import styled from "styled-components";
import FormContact from "../includes/joinPage/FormContact";

function JoinPage() {
  return (
    <StyledHeroForm>
      <Header>
        <Title>회원가입</Title>
        <Subtitle>회원 정보 입력</Subtitle>
      </Header>
      <FormContact />
    </StyledHeroForm>
  );
}

const StyledHeroForm = styled.main`
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2); /* 그라데이션 배경 */
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
  font-size: 40px;
  color: #2a9d8f; /* 세련된 청록색 */
  font-weight: 700; /* 강조된 굵기 */
`;

const Subtitle = styled.h2`
  margin-top: 8px;
  font-size: 18px; /* 적당한 크기로 조정 */
  font-weight: 400; /* 가벼운 느낌의 굵기 */
  color: #264653; /* 깊이감 있는 어두운 청록색 */
`;
export default JoinPage;