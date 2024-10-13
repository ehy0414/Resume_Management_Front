import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${props => props.darkBackground ? "#182153" : "#fff"};
  border-top: ${props => props.darkBackground ? "1px solid #fff" : "none"};
  display: flex;
  min-height: 781px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

function ContentSection({ darkBackground }) {
  return <Section darkBackground={darkBackground} />;
}

export default ContentSection;