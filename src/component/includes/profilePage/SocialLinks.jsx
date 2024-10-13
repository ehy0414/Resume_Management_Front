import React from "react";
import styled from "styled-components";

const SocialContainer = styled.div`
  background-color: #182153;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 22px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 22px 20px;
  }
`;

const LinksList = styled.ul`
  display: flex;
  max-width: 100%;
  width: 168px;
  gap: 20px;
  justify-content: space-between;
  padding: 0;
  list-style-type: none;
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0ff46b0bbb2cd633fc32f80fcfd6c3968c0a544ee2097b6070147c6fc2cbfaa?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db", alt: "Social Icon 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb59295ed8d17707494223eef0fbbfefafe98a84c267bf4f948aeb53851818a3?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db", alt: "Social Icon 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee76e5a03b691c55c787cc1ee0c52a4e5a08c645f29f1f58c440b9f3ea837b33?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db", alt: "Social Icon 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6072727e1cbeac0a24abe3191dcffd67eb2130f442aaef2889e00a76f8be5c03?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db", alt: "Social Icon 4" },
];

function SocialLinks() {
  return (
    <SocialContainer>
      <LinksList>
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <a href="#" aria-label={`Social link ${index + 1}`}>
              <SocialIcon loading="lazy" src={icon.src} alt={icon.alt} />
            </a>
          </li>
        ))}
      </LinksList>
    </SocialContainer>
  );
}

export default SocialLinks;