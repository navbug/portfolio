import React from "react";

import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/constants";
import {Container, Wrapper, Title, Desc, CardContainer} from "./styledComponent";
import projectImage1 from "../../assets/imageGallery.png";
import projectImage2 from "../../assets/cryptoTracker.png";
import projectImage3 from "../../assets/shopCart.png";

const images = [
  projectImage1,
  projectImage2,
  projectImage3,
]

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
            (project, index) => (
              <ProjectCard key={project.id} project={project} image={images[index]}/>
            )
          )}
        </CardContainer>
    </Container>
  );
};

export default Projects;
