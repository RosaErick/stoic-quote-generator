import React, { Component } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const QuotesSource = styled.p`
  text-align: right;
  color: #130106;
  font-family: "monospace", sans-serif;
  font-weight: bold;

`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
const QuotesBlock = styled.blockquote`
  margin-top: 1.5rem;
  min-height: 9.625rem;
`;
const TweetLink = styled.a`
  text-decoration: none;
  width: 3.75em;
  height: 3.75em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

const QuoteButton = styled.button`
  background-color: #ef1a56;
  border-radius: 3px;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-size: 1.1em;
  padding: 0.7em 1em;
  transition: all 0.175s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    background-color: #f4668f;
  }
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    background-color: #86092c;
  }
`;

const QuoteText = styled.p`
  background-color: rgba(255, 255, 255, 0.8);
  display: inline;
  font-family: "monospace", serif;
  font-size: 1.7em;
  color: #130106;
  font-style: italic;
  font-weight: normal;
  letter-spacing: 1px;
  line-height: 1.4;
`;

const API_URL = "https://stoicquotesapi.com/v1/api/quotes";
const TWITTER_URL = "https://twitter.com/intent/tweet/";

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quoteText: "",
      quoteAuthor: "",
      isLoading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.fetchQuote();
  }

  async fetchQuote() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json(); 
      const getQuote = data.data;
      const index = Math.floor(Math.random() * getQuote.length) - 1;
      const quoteObject = getQuote[index];
      console.log(quoteObject);

      this.setState({
        quoteText: quoteObject.body,
        quoteAuthor: quoteObject.author,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleClick() {
    this.setState({ isLoading: true });
    this.fetchQuote();
  }

  render() {
    const { isLoading, quoteText, quoteAuthor } = this.state;
    return (
      <section id="quote-box" aria-live="polite">
        <QuotesBlock>
          <QuoteText id="text">{isLoading ? <Loader /> : quoteText}</QuoteText>
          <footer>
            {!isLoading && (
              <QuotesSource id="author">
                -{quoteAuthor}
              </QuotesSource>
            )}
          </footer>
        </QuotesBlock>
        <Container>
          <TweetLink
            id="tweet-quote"
            title="Tweet this quote!"
            href={`${TWITTER_URL}?text="${quoteText}" - ${quoteAuthor}&hashtags=StoicQuotes`}
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
          <QuoteButton id="new-quote" onClick={this.handleClick}>
            Bring me knowledge...
          </QuoteButton>
        </Container>
      </section>
    );
  }
}

export default Quotes;
