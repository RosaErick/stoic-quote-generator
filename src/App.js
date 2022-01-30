import { useState } from "react";
import styled from "styled-components";
import { getQuote } from "./getQuotes";
import Loader from "./Loader";
import { QuotesButton } from "./Button";

const TWITTER_URL = "https://twitter.com/intent/tweet/";


const Wrapper = styled.div`



`

const Quote = styled.p`
  padding: 5px;
  margin-top: 10px;
`;

const TweetLink = styled.a`
  text-decoration: none;
  width: 3.75em;
  height: 3.75em;
  display: inline-block;
margin: 20px 0 0 50px;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
`;

const Content = styled.div`
  color: #656565;
  margin: 100px auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
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
          <Quote> {quote ? quote : <Loader />}</Quote>
          
          <Wrapper>
      <QuotesButton onUpdate={asyncCall} />
      <TweetLink
        id="tweet-quote"
        title="Tweet this quote!"
        href={`${TWITTER_URL}?text="${quote}"&hashtags=StoicQuotes`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="44"
          height="35"
          fill="none"
          viewBox="0 0 44 35"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.067 4.143a17.671 17.671 0 01-5.075 1.392A8.86 8.86 0 0041.879.646a17.696 17.696 0 01-5.611 2.144A8.825 8.825 0 0029.817 0a8.836 8.836 0 00-8.836 8.836c0 .692.078 1.366.229 2.013-7.343-.368-13.854-3.886-18.212-9.232A8.796 8.796 0 001.802 6.06c0 3.066 1.56 5.77 3.93 7.355a8.8 8.8 0 01-4.002-1.105v.11c0 4.282 3.046 7.853 7.088 8.665a8.85 8.85 0 01-3.99.151 8.845 8.845 0 008.253 6.136 17.73 17.73 0 01-10.973 3.783c-.714 0-1.417-.042-2.108-.124A25.009 25.009 0 0013.544 35c16.253 0 25.14-13.464 25.14-25.14 0-.383-.008-.764-.026-1.143 1.73-1.25 3.223-2.8 4.41-4.574"
            fill="#1DA1F2"
          />
        </svg>
    
              </TweetLink>
              </Wrapper>
    </Content>
  );
};

export { App };
