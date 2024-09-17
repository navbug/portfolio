import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 84% 87%, 65% 79%, 38% 80%, 17% 88%, 0 100%);
`;

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 20px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.white + 9};
  }
  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const GitHubLogo = styled.div`
  width: 80%;
  padding: 0 6px;
  cursor: pointer;
  font-size: 1.5rem;
  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export const ThemeButton = styled.div`
  width: 80%;
  padding-left: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  justify-content: start;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 640px) {
    padding: 0px;
  }
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: sticky;
    top: 0;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const EndBox = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 13px;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.card_light + 99};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
`;

export const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
