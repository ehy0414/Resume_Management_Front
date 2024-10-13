import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  background-color: ${props => props.darkBackground ? "#182153" : "#fff"};
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 39px 70px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 39px 20px;
  }
`;

const Title = styled.h2`
  color: ${props => props.darkBackground ? "#fff" : "#182153"};
  text-align: center;
  letter-spacing: 4px;
  font: 700 20px Inter, sans-serif;
`;

function SectionTitle({ title, darkBackground }) {
  return (
    <TitleContainer darkBackground={darkBackground}>
      <Title darkBackground={darkBackground}>{title}</Title>
    </TitleContainer>
  );
}

export default SectionTitle;