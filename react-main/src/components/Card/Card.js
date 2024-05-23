import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #dddae2;
  width: 200px;
  border-radius: 5px;
  margin: 10px;

  h1 {
    color: yellow;
  }
`;

export function Card({ title, content }) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{content}</p>
    </Container>
  );
}
