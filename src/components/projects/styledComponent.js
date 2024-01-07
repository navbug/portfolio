import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-bottom: 100px;
  clip-path: polygon(100% 0, 100% 100%, 50% 97%, 0 100%, 0 0);
  @media (min-width: 800px) {
    clip-path: polygon(100% 0, 100% 100%, 50% 95%, 0 100%, 0 0);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.white};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
`