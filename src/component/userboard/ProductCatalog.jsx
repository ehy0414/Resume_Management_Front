import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const productData = [
  { id: 1, name: "Product 1", date: "2020.01.01", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/53ba7ab99cf0f8dfdd35346761f6ff1a0b7fbd143dcf25450be45d2625bf57c5?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c" },
  { id: 2, name: "Product 2", date: "2020.02.02", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/53ba7ab99cf0f8dfdd35346761f6ff1a0b7fbd143dcf25450be45d2625bf57c5?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c" },
  { id: 3, name: "Product 3", date: "2020.03.03", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/53ba7ab99cf0f8dfdd35346761f6ff1a0b7fbd143dcf25450be45d2625bf57c5?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c" },
  { id: 4, name: "Product 4", date: "2020.04.04", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/53ba7ab99cf0f8dfdd35346761f6ff1a0b7fbd143dcf25450be45d2625bf57c5?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c" },
];

function ProductCatalog() {
  return (
    <CatalogContainer>
      {productData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </CatalogContainer>
  );
}

const CatalogContainer = styled.main`
  background-color: #fff;
  display: flex;
  min-height: 420px;
  width: 100%;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  font-family: var(--sds-typography-body-font-family);
  color: var(--sds-color-text-default-default);
  font-weight: var(--sds-typography-body-font-weight-regular);
  line-height: 1.4;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 105px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export default ProductCatalog;