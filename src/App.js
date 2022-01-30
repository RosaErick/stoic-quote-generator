import { useState } from "react";
import styled from "styled-components";
import { getQuote } from "./quoteBlock";
import { Quotes } from "./Quote";

const Content = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`;

const App = () => {
  const [quote, setQuote] = useState("");

  const asyncCall = async () => {
    const quote = await getQuote();

    setQuote(quote);
  };

    return (
        <Content>
        <h1>STOIC QUOTES</h1>
      <div> {quote}</div>
      <Quotes onUpdate={asyncCall} />
    </Content>
  );
};

export { App };
