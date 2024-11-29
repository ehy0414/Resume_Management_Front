import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const navigationItems = [
  { path: "/resume", text: "이력서보기" },
  { path: "/profile", text: "개인페이지" },
  { path: "/contact", text: "Contact" },
];

const authButtons = [
  { variant: "secondary", text: "Sign in" },
  { variant: "primary", text: "Register" },
];

function Header() {
  return (
    <HeaderWrapper>
      <LogoContainer to="/">
        <LogoImage alt="Home" />
      </LogoContainer>
      <RightSection>
        <NavList>
          {navigationItems.map((item, index) => (
            <NavItem key={index}>
              <NavLink to={item.path}>{item.text}</NavLink>
            </NavItem>
          ))}
        </NavList>
        <AuthButtonGroup>
          {authButtons.map((button, index) => (
            <AuthButton
              key={index}
              variant={button.variant}
              role="button"
              tabIndex={0}
              onClick={() => {}}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                }
              }}
            >
              {button.text}
            </AuthButton>
          ))}
        </AuthButtonGroup>
      </RightSection>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background: #fff;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  min-height: 142px;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;

  @media (max-width: 991px) {
    padding: 0 20px;
    flex-wrap: wrap;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 24px;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #2c2c2c;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #2c2c2c;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }
`;

const AuthButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthButton = styled.div`
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  text-align: center;
  transition: opacity 0.2s;
  font-size: 16px;
  min-width: 80px;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid #2c2c2c;
    outline-offset: 2px;
  }

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: #2c2c2c;
    color: #ffffff;
    border: 1px solid #2c2c2c;
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: #e3e3e3;
    color: #2c2c2c;
    border: 1px solid #767676;
  `}
`;

export default Header;
