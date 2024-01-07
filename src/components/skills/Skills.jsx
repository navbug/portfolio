import React from "react";

import { skills } from "../../data/constants";
import {Container, Wrapper, Title, Desc, SkillsContainer, SkillContainer, IconContainer, Icon, TextContainer} from "./styledComponent";


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill) => (
            <SkillContainer key={skill.title}>
              <IconContainer>
                <Icon src={skill.image} alt="skill image logo" />
              </IconContainer>
              <TextContainer>{skill.title}</TextContainer>
            </SkillContainer>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
