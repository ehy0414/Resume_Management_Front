import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function Header({userInfo, setUserInfo}) {
  const navigate = useNavigate();
  
  const navigationItems = [
    { path: "/resume", text: "이력서보기" },
    { path: `/profile/${userInfo?.userId}`, text: "개인페이지" },
  ];

  const authButtons = [
    { variant: "secondary", text: "로그인", path: "/login" },
    
    { variant: "primary", text: "회원가입", path: "/join" },
  ];

  const handleLogout = () => {
    console.log(userInfo);
    sessionStorage.removeItem("userInfo"); // 세션에서 사용자 정보 삭제
    setUserInfo(null); // 상태 업데이트
    navigate("/"); // 홈으로 리다이렉트
  };

  return (
    <HeaderWrapper>
      <LogoContainer to="/">
        <LogoImage alt="Home" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6adb87bcda0e0209efe8943f42ac571aa849fac731b86711b7732f9cf97ec1c2?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c"
        />
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
          {userInfo==null ?
            (authButtons.map((button, index) => (
              <AuthButton
                key={index}
                variant={button.variant}
                role="button"
                tabIndex={0}
                onClick={() => {
                  navigate(button.path);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                  }
                }}
              >
                {button.text}
              </AuthButton>
            ))) :
            <AuthButton
              variant="primary"
              role="button"
              tabIndex={0}
              onClick={handleLogout}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                }
              }}
            >
              Log out
            </AuthButton>
          }
        </AuthButtonGroup>
      </RightSection>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background: #fff;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  min-height: 80px;
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

  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }

  &:focus-within {
    outline: 2px solid #4A90E2;
    outline-offset: 2px;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    filter: brightness(1.1);
  }

  &:focus {
    outline: none;
    filter: brightness(1.1);
  }
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
