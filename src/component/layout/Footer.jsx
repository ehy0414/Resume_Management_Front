import React from "react";
import styled from "styled-components";

const Footer = () => {
  const useCases = ["엄현용", "강건한"];
  const explore = ["React.js", "Spring", "Mybatis", "Javascript", "Java", "MySQL"];
  const resources = ["GitHub", "VSCode", "Figma"];

  return (
    <StyledFooter>
      <FooterContent>
        <FooterLogo>
          <LogoText>개인프로젝트</LogoText>
          <Tagline>엄현용 & 강건한</Tagline>
        </FooterLogo>
        <FooterColumn title="제작자" items={useCases} />
        <FooterColumn title="기술스택" items={explore} />
        <FooterColumn title="도구" items={resources} />
      </FooterContent>
      <FooterBottom>
        <BottomText>&copy; 2024 My Project. All Rights Reserved.</BottomText>
      </FooterBottom>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #fff;
  border-top: 2px solid #f0f0f0;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterLogo = styled.div`
  flex: 1;
  text-align: center;
`;

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const Tagline = styled.p`
  font-size: 14px;
  color: #666;
`;

const FooterColumn = ({ title, items }) => (
  <Column>
    <ColumnTitle>{title}</ColumnTitle>
    <ColumnList>
      {items.map((item, index) => (
        <ColumnItem key={index}>{item}</ColumnItem>
      ))}
    </ColumnList>
  </Column>
);

const Column = styled.div`
  flex: 1;
  text-align: center;
  min-width: 200px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #444;
`;

const ColumnList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ColumnItem = styled.li`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
  transition: color 0.3s;

  &:hover {
    color: #007BFF;
    cursor: pointer;
  }
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  width: 100%;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  padding-top: 20px;
`;

const BottomText = styled.p`
  font-size: 12px;
  color: #999;
`;

export default Footer;
