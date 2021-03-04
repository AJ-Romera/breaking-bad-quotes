import React from 'react';
import styled from '@emotion/styled';

const QuoteContainer = styled.div`
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: #fff;
    max-width: 1200px;

    @media (min-width: 992px) {
        margin-top: 15rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        font-size: 1.7rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

function Frase({ quote }) {
    return (
        <QuoteContainer>
            <h1>{quote.quote}</h1>
            <p>- {quote.author}</p>
        </QuoteContainer>
    );
}

export default Frase;
