import React from "react";
import styled from "styled-components";

import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Card = styled.div`
  width: 80vw;
  max-width: 1150px;
  height: 580px; 
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  margin-bottom: 8px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  height: auto;
  transition: all 0.4s ease-in-out;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 320px;
  }
  @media (min-width: 1060px) {
    flex-direction: row;
    height: 240px;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.4);
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  height: 100%;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  // object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  margin-left: 12px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.3;
  width: 100%;
  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  padding: 7px 0 0 10px;
  max-width: 100%;
  text-overflow: ellipsis;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
`;

const Tag = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.bg};
  padding: 4px 10px;
  border-radius: 10px;
`;

const Description = styled.div`
  width: 100%;
  height: 210px;
  font-weight: 400;
  color: ${({ theme }) => theme.white};
  opacity: 0.79;
  // overflow: hidden;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  @media (min-width: 500px) {
    height: 180px;
  }
  @media (min-width: 600px) {
    height: 140px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 8px;
  color: white;
  position: absolute;
  bottom: 10px;
  left: 0px;
`;

const CodeButton = styled.div`
  background-color: ${({ theme }) => theme.button};
  display: flex;
  gap: 8px;
  padding: 7px 11px;
  border-radius: 14px;
  border: 1.4px solid #8a6400;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.2);
    // filter: brightness(1.1);
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <LeftContainer>
        <Image src={project.image} alt="project image" />
      </LeftContainer>
      <RightContainer>
        <Title>{project.title}</Title>
        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Description>{project.description.slice(0, 130).concat("...")}</Description>

        <Buttons>
          <CodeButton><a href={project.codeLink} target="_blank" style={{textDecoration: "none", color: "white"}}><FaCode /> Code</a></CodeButton>
          <CodeButton><a href={project.liveLink} target="_blank" style={{textDecoration: "none", color: "white"}}><CgWebsite /> Live</a></CodeButton>
        </Buttons>
      </RightContainer>
    </Card>
  );
};

export default ProjectCard;
