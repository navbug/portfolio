import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;
  @media screen and (max-width: 960px) {
    padding: 6 6px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  clip-path: polygon(0 0, 100% 0, 100% 93%, 65% 95%, 0 100%, 0 100%);
`;

export const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  line-height: 68px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TitleName = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const TextLoop = styled.div`
  font-size: 32px;
  line-height: 68px;
  font-weight: 600;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.white};
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.div`
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: ${({ theme }) => theme.button};
    &:hover {
      transform: scale(1.05);
      transition: all 0.4s ease-in-out;
      box-shadow:  20px 20px 60px #1F2634,
      filter: brightness(1);
    }
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 490px;
  border-radius: 28%;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-5px) scale(1.01);
    transform: ;
    box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 490px;
  }
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 350px;
  }
`;