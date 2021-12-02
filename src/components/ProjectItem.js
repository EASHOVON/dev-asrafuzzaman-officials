import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CarImg from "../assets/images/car.png";
import ButtonForResume from "../components/ButtonForResume";

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  .projectSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
    .projectSection__button {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function ProjectItem({
  img = CarImg,
  title = "Project Name",
  desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti facere tempora impedit quis, exercitationem iure dolores ad expedita non animi et omnis harum eveniet beatae enim nisi rem repellat aspernatur!",
  clientCodeLink,
  liveSite,
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project Img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="projectSection__buttons">
          <ButtonForResume btnLink={liveSite} btnText="Live Site" />
          <ButtonForResume
            btnLink={clientCodeLink}
            btnText="Source Code"
            outline
          />
        </div>
      </div>
    </ProjectItemStyles>
  );
}
