import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoSunny, IoMoon } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  Span,
  MobileIcon,
  NavItems,
  NavLink,
  ButtonContainer,
  MobileMenu,
  MobileMenuLinks,
  GitHubLogo,
  ThemeButton,
  EndBox,
  Wrapper,
} from "./styledComponent";

const Header = ({ themeToggle, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              marginBottom: "10",
              cursor: "pointer",
            }}
            href="/"
          >
            <FaLaptopCode style={{ fontSize: "34px" }} /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <EndBox>
          <MobileIcon>
            <FaBars
              style={{ color: "#fff" }}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          </MobileIcon>
          <ThemeButton onClick={themeToggle}>
            {isDarkMode ? (
              <IoSunny style={{ fontSize: "30px", color: "white" }} />
            ) : (
              <IoMoon style={{ fontSize: "30px", color: "white" }} />
            )}
          </ThemeButton>
        </EndBox>
        <NavItems>
          <NavLink href="#about">Introduction</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubLogo>
            <a
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                marginBottom: "10",
                cursor: "pointer",
              }}
              href="https://github.com/navbug"
              target="_blank"
            >
              <FaGithub style={{ fontSize: "34px" }} />
            </a>
          </GitHubLogo>
          <ThemeButton onClick={themeToggle}>
            {isDarkMode ? (
              <IoSunny style={{ fontSize: "30px", color: "white" }} />
            ) : (
              <IoMoon style={{ fontSize: "30px", color: "white" }} />
            )}
          </ThemeButton>
        </ButtonContainer>
      </NavContainer>
      {isOpen && (
        <>
          <MobileMenu isOpen={isOpen}>
            <MobileMenuLinks
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Introduction
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileMenuLinks>
            <GitHubLogo>
              <a
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  marginBottom: "10",
                  cursor: "pointer",
                }}
                href="https://github.com/navbug"
                target="_blank"
              >
                <FaGithub style={{ fontSize: "24px" }} />
                <Span style={{ marginLeft: "10px", fontWeight: "500" }}>
                  Github
                </Span>
              </a>
            </GitHubLogo>
          </MobileMenu>
        </>
      )}
    </Nav>
    </Wrapper>
  );
};

export default Header;
