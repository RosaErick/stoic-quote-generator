const URL = "https://stoicquotesapi.com/v1/api/quotes";
const getQuote = async () => {
  const response = await fetch(URL);
  const quoteData = await response.json();

  const getQuote = quoteData.data;
  const index = Math.floor(Math.random() * getQuote.length) - 1;
  const quoteObject = getQuote[index];
  const showQuote = `${quoteObject.body}
  -${quoteObject.author}`;

  console.log(showQuote);

  return (<>
    
    
    <p> " {quoteObject.body} "</p><br></br>
    <p> -{quoteObject.author}</p>
    
    </>);
};

export { getQuote };
