import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 50px;
  padding-bottom: 100px;
`;

export const image = styled.img`
  width: 22rem;
  height: 24rem;
`;
