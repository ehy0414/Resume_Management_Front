import React from "react";
import styled from "styled-components";

function ProductCard({ name, date, imageUrl }) {
  return (
    <CardWrapper>
      <ProductImage src={imageUrl} alt={`Product: ${name}`} loading="lazy" />
      <CardBody>
        <ProductName>{name}</ProductName>
        <ProductDate>{date}</ProductDate>
      </CardBody>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  border-radius: 8px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: start;
  flex-grow: 1;
  width: 192px;
  margin: auto 0;
  padding: 16px;
  border: 1px solid #d9d9d9;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProductImage = styled.img`
  aspect-ratio: 0.84;
  object-fit: contain;
  object-position: center;
  width: 208px;
  min-height: 247px;
`;

const CardBody = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  max-width: 208px;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProductName = styled.h2`
  flex: 1;
  width: 100%;
  font-size: var(--sds-typography-body-size-medium);

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProductDate = styled.time`
  margin-top: 8px;
  width: 100%;
  font-size: var(--sds-typography-body-size-small);

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default ProductCard;