import React from "react";

import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/constants";
import {Container, Wrapper, Title, Desc, CardContainer} from "./styledComponent";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
      </Wrapper>
        <CardContainer>
          {projects.map(
            project => (
              <ProjectCard key={project.id} project={project} />
            )
          )}
        </CardContainer>
    </Container>
  );
};

export default Projects;
