import React from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";
import SectionTitle from "../components/SectionTitle";
import ProjectInfo from "../assets/data/projects";
import { useState, useEffect } from "react";

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />
        <div className="projects__searchBar">
          <form>
            <input
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
              type="text"
              name=""
              id=""
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              clientCodeLink={item.clientCodeLink}
              liveSite={item.liveSite}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
