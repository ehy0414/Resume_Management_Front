import React from "react";
import styled from "styled-components";

const PaginationComponent = () => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <nav aria-label="Pagination">
      <PaginationWrapper>
        <PaginationButton direction="previous" />
        <PaginationList pages={pages} />
        <PaginationButton direction="next" />
      </PaginationWrapper>
    </nav>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 31px 14px;
  background-color: #fff;
  font: var(--sds-typography-body-font-weight-regular) var(--sds-typography-body-size-medium) / 1 var(--sds-typography-body-font-family);
  color: var(--sds-color-text-default-default);
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PaginationButton = ({ direction }) => {
  const isNext = direction === "next";
  const text = isNext ? "Next" : "Previous";
  const imageSrc = isNext ? "https://cdn.builder.io/api/v1/image/assets/TEMP/2f60a87431dfb5d3b9a2006a8a8ff24522cd66905113bf3cf773519213ea89af?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db" : "https://cdn.builder.io/api/v1/image/assets/TEMP/cdf2d12a1e0ad7d84db0283ba8f68f16bb0345cdcb751dd06e1e6127d69f2b79?placeholderIfAbsent=true&apiKey=c7f1d91a917e4e2ba5370da6919a77db";

  return (
    <StyledButton direction={direction}>
      {!isNext && <ButtonImage src={imageSrc} alt="" />}
      <ButtonText>{text}</ButtonText>
      {isNext && <ButtonImage src={imageSrc} alt="" />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${props => props.direction === "next" ? "#f5f5f5" : "transparent"};
  color: var(--sds-color-text-default-secondary);
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ButtonImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 16px;
`;

const ButtonText = styled.span`
  align-self: stretch;
`;

const PaginationList = ({ pages }) => {
  return (
    <PageList>
      {pages.map((page, index) => (
        <PageItem key={index} isActive={index === 0}>
          {page}
        </PageItem>
      ))}
    </PageList>
  );
};

const PageList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PageItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${props => props.isActive ? "#333" : "#f5f5f5"};
  color: ${props => props.isActive ? "var(--sds-color-text-brand-on-brand)" : "inherit"};
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default PaginationComponent;