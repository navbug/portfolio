import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-bottom: 100px;
  clip-path: polygon(100% 0, 100% 100%, 50% 95%, 0 100%, 0 0);
`;

const Text = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Footer = () => {
  return (
    <Container>
        <Text>Get in Touch</Text>
    </Container>
  );
};

export default Footer