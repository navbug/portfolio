import React from "react";
import Typewriter from "typewriter-effect";
import heroImage from "../../assets/heroImage.png";
import { Bio } from "../../data/constants";
import { FaDownload } from "react-icons/fa";

import ResumeFile from "../../assets/nvn-res.pdf";
import { HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, TextLoop, Title, TitleName, Span, SubTitle, ResumeButton, Image } from "./styledComponent"

const HeroSection = () => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = ResumeFile;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              🙋‍♂️, I'm <br />
              <TitleName>{Bio.name}</TitleName>
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>
              I'm a dynamic, driven person that is constantly willing to try
              anything new. I am committed to producing excellent work and have
              a strong desire to learn. I'm prepared to contribute significantly
              and accomplish big things since I have a growth mindset and an
              optimistic outlook.
            </SubTitle>
            <ResumeButton target="_blank" onClick={downloadFile}>
              <FaDownload style={{ marginRight: "15px" }} />
              Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            {/* <ImageWrapper> */}
            <Image src={heroImage} alt="" />
            {/* </ImageWrapper> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
