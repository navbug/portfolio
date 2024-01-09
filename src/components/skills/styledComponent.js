import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-bottom: 100px;
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
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
  color: ${({ theme }) => theme.text_primary};
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

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 35px;
  justify-content: center;
  padding: 20px;
`;

export const SkillContainer = styled.div`
  display: flex;
  gap: 0;
  align-items: center;
  opacity: 0.8;
`;

export const TextContainer = styled.div`
  color: #8a4500;
  font-size: 20px;
  font-weight: 500;
  background-color: white;
  border-radius: 0 20% 20% 0;
  padding: 8px;
  visibility: visible;
`;

export const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  background-color: white;
  border-radius: 20%;
  padding: 8px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 58px;
`;