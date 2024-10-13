import React from "react";
import styled from "styled-components";

const IntroTitle = styled.h2`
  color: #182153;
  font: 400 30px Inter, sans-serif;
`;

const IntroText = styled.p`
  color: #182153;
  text-align: center;
  font: 400 18px/29px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

function Introduction() {
  return (
    <>
      <IntroTitle>안녕하세요?</IntroTitle>
      <IntroText>
        *여기를 클릭해 내용을 입력하세요. 마우스로 텍스트 상자의 <br />
        위치와 크기를 변경하고, 텍스트 에디터에서 글꼴과 색상을 <br />
        선택해 보세요. 다양한 한글 글꼴을 사용하려면, <br />
        글꼴 언어를 한국어로 지정하세요.
      </IntroText>
    </>
  );
}

export default Introduction;