import React from 'react';
import styled from 'styled-components';
import SwapForm from './components/SwapForm';

const App = () => {
  return (
      <Container>
        <Title>Currency Swap</Title>
        <SwapForm />
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

export default App;