import React, { useState } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Button = styled.button`
    background: -webkit-linear-gradient(
        top left,
        #007d35 0%,
        #007d35 40%,
        #0f574e 100%
    );
    background-size: 400px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
`;

function App() {
    // State de frases
    const [quote, setQuote] = useState({});

    const fetchFromAPI = async () => {
        const api = await fetch(
            'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
        );
        const quote = await api.json();
        setQuote(quote[0]);
    };

    return (
        <Container>
            <Quote quote={quote} />
            <Button onClick={fetchFromAPI}>Get Random Quote</Button>
        </Container>
    );
}

export default App;
