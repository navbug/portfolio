import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Skills from "./components/skills/Skills";
import { BrowserRouter } from "react-router-dom";
import Projects from "./components/projects/Projects";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import useCustomEffect from "./hooks/custom-useEffect";

const Body = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 51% 95%, 0 100%, 0 100%);
`;

const HeroWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.card_light};
`;

const ContactWrapper = styled.div`
  clip-path: polygon(100% 0, 100% 100%, 50% 95%, 0 100%, 0 0);
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const themeToggler = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    setIsDarkMode(!isDarkMode);
  };


  // useEffect hook
  useEffect(() => {
    console.log("useEffect");

    //cleanup fn
    return () => {
      console.log("cleanup");
    }
  }, [theme]);

  //useEffect hook polyfill
  useCustomEffect(() => {
    console.log("useCustomEffect");

    return () => {
      console.log("custom cleanup");
    }
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Wrap>
          <Header themeToggle={themeToggler} isDarkMode={isDarkMode} />
          <Body>
            <HeroWrapper>
              <HeroSection />
            </HeroWrapper>
            <Wrapper>
              <Skills />
            </Wrapper>
            <HeroWrapper>
              <Projects />
            </HeroWrapper>
              <ContactForm />
          </Body>
        </Wrap>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
