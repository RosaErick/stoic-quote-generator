

const getQuote = async () => {
    const URL = "https://stoicquotesapi.com/v1/api/quotes";
  const response = await fetch(URL);
  const quoteData = await response.json();



  const getQuote = quoteData.data;
  const index = Math.floor(Math.random() * getQuote.length) - 1;
  const quoteObject = getQuote[index];
  const showQuote = `${quoteObject.body} - ${quoteObject.author}`;

  console.log(showQuote);

  return showQuote;
};

//class QuoteBlock extends Component {
//
//    constructor(props) {
//        super(props);
//        this.state = {
//
//            quote: [],
//        }
//    }
//

//    async componentDidMount() {
//
//            const response = await fetch(`${URL}`);
//            const quote = response.json();
//
//           console.log(quote)
//
//
//    }
//
//
//
//    render() {
//       return ( <QuoteBlock>
//            <h1>Stoic Quotes</h1>
//
//            <Quote author='' text=''/>
//
//
//
//            </QuoteBlock>
//)
//
//    }
//
//
//}
//
//

export { getQuote }
