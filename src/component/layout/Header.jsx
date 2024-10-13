import React from "react";
import styled from "styled-components";

const Header = () => {
  const navItems = [
    { label: "이력서 보기", variant: "default" },
    { label: "개인페이지", variant: "secondary" },
    { label: "Contact", variant: "tertiary" }
  ];

  return (
    <HeaderWrapper>
      <nav>
        <NavigationList>
          {navItems.map((item, index) => (
            <NavigationPill key={index} variant={item.variant}>
              {item.label}
            </NavigationPill>
          ))}
        </NavigationList>
      </nav>
      <AuthSection>
        <AuthButton variant="secondary">Sign in</AuthButton>
        <AuthButton variant="primary">Register</AuthButton>
      </AuthSection>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  min-height: 142px;
  width: 100%;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 55px 32px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const NavigationList = styled.ul`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  align-items: flex-start;
  gap: 8px;
  color: var(--sds-color-text-default-default);
  justify-content: flex-end;
  flex-wrap: wrap;
  flex: 1;
  flex-basis: 0%;
  margin: auto 0;
  list-style-type: none;
  padding: 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const NavigationPill = styled.li`
  align-self: stretch;
  border-radius: 8px;
  gap: 8px;
  padding: 8px;
  white-space: ${props => props.variant !== "default" ? "nowrap" : "normal"};
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const AuthSection = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  width: 178px;
  margin: auto 0;
`;

const AuthButton = styled.button`
  align-self: stretch;
  border-radius: 8px;
  background-color: ${props => props.variant === "primary" ? "#2c2c2c" : "#e3e3e3"};
  gap: 8px;
  overflow: hidden;
  color: ${props => props.variant === "primary" ? "var(--sds-color-text-brand-on-brand)" : "var(--sds-color-text-default-default)"};
  white-space: ${props => props.variant === "primary" ? "nowrap" : "normal"};
  flex: 1;
  margin: auto 0;
  padding: 8px;
  border: 1px solid ${props => props.variant === "primary" ? "#2c2c2c" : "#767676"};
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default Header;