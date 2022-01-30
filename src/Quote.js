import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Quotes = ({ quote, onUpdate }) => {
  return (
    <>
      <Quote>{quote}</Quote>

      <Button onClick={onUpdate}> bring me knowledge...</Button>
    </>
  );
};

const Quote = styled.div`
  display: flex;
    margin: auto 0;
  justify-content:center;
`;

export { Quotes };
