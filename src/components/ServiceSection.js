import React from "react";
import { MdCode, MdDesktopMac } from "react-icons/md";
import { RiNodeTree } from "react-icons/ri";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItmeStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItmeStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what i will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="WebSite Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<RiNodeTree />}
            title="BackEnd Dev"
            desc="I started to develop a website backend part litle more."
          />
        </div>
      </div>
    </ServicesItmeStyles>
  );
}
