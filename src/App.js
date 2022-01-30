import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { getQuote }  from './quoteBlock';
import { Quotes } from './Quote';


const Content = styled.div`
display: flex;
margin:0 auto;
justify-content: center;

`


const App = () => {
    const [quotex, setQuoteState] = useState('');


    const asyncCall = async () => {
        const quotex = await getQuote();


        setQuoteState(quotex);




    }


    return (
        <Content>

            <div> {quotex}</div>
            <Quotes onUpdate={asyncCall} />



        </Content>
    );
};

export { App };