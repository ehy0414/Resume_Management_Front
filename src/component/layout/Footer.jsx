import React from "react";
import styled from "styled-components";

const Footer = () => {
  const useCases = [
    "UI design",
    "UX design",
    "Wireframing",
    "Diagramming",
    "Brainstorming",
    "Online whiteboard",
    "Team collaboration"
  ];

  const explore = [
    "Design",
    "Prototyping",
    "Development features",
    "Design systems",
    "Collaboration features",
    "Design process",
    "FigJam"
  ];

  const resources = [
    "Blog",
    "Best practices",
    "Colors",
    "Color wheel",
    "Support",
    "Developers",
    "Resource library"
  ];

  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b742f3f6e1cba31a89a8e6720d9b537141ad17b582c67349ffda3d14027d6bb4?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db", alt: "Social Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e6637054873d652d596f8730dd0ab29a914ee436e61757048d3116727600d99?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db", alt: "Social Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/68833f614a17cde2333c405c87315acddcf774febd43d8cb0b303af825cf3d93?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db", alt: "Social Icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b436379ee407fd1bdd8ca0b138959fd3cb83157d9c6899b1cf5ad2ebfc141f3?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db", alt: "Social Icon 4" }
  ];

  return (
    <StyledFooter>
      <FooterLogo>
        <LogoImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/092ab438b8bf74b8c1890a59c9396edb86c8bfa724e26378bdd4f3e386b7094b?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db" alt="Figma Logo" />
        <IconContainer>
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} loading="lazy" src={icon.src} alt={icon.alt} />
          ))}
        </IconContainer>
      </FooterLogo>
      <FooterColumn title="Use cases" items={useCases} />
      <FooterColumn title="Explore" items={explore} />
      <FooterColumn title="Resources" items={resources} />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #fff;
  border-top: 1px solid #d9d9d9;
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 16px;
  overflow: hidden;
  justify-content: center;
  flex-wrap: wrap;
  padding: 32px 32px 160px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px 100px;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 262px;
`;

const LogoImage = styled.img`
  aspect-ratio: 0.66;
  object-fit: contain;
  object-position: center;
  width: 23px;
  align-self: stretch;
  margin: auto 0;
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: center;
  gap: 16px;
  justify-content: flex-start;
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

const FooterColumn = ({ title, items }) => {
  return (
    <Column>
      <ColumnTitle>{title}</ColumnTitle>
      <ColumnList>
        {items.map((item, index) => (
          <ColumnItem key={index}>{item}</ColumnItem>
        ))}
      </ColumnList>
    </Column>
  );
};

const Column = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  align-items: flex-start;
  color: var(--sds-color-text-default-default);
  justify-content: flex-start;
  width: 262px;
  font: var(--sds-typography-body-font-weight-regular) var(--sds-typography-body-size-medium) / 1.4 var(--sds-typography-body-font-family);
`;

const ColumnTitle = styled.h3`
  align-self: stretch;
  display: flex;
  width: 100%;
  padding-bottom: 16px;
  font-weight: var(--sds-typography-body-font-weight-strong);
`;

const ColumnList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ColumnItem = styled.li`
  margin-top: 12px;
  width: 89px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

export default Footer;