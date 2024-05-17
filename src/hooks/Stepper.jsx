import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Line = styled.div`
  width: 100px;
  height: 5px;
  background-color: ${({ theme }) => theme.primary+60};
`;

const Content = styled.div`
  padding: 20px;
`;

const Stepper = () => {
  const [stepCount, setStepCount] = useState(1);

  useEffect(() => {
    
  });
  const handleNext = () => {
    setStepCount(stepCount + 1);
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <StepperContainer>
        <Step step={1} />
        <Line />
        <Step step={2} />
        <Line />
        <Step step={3} />
        <Line />
        <Step step={4} />
      </StepperContainer>

      <Content>Content Here</Content>

      <button>Next</button>
    </Container>
  );
};

export default Stepper;

const Round = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary+85};
  color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Step = ({ step }) => {
  return <Round>{step}</Round>;
};
