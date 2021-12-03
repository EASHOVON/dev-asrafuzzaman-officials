import React, { useEffect } from "react";
import ButtonForResume from "../components/ButtonForResume";
import PText from "../components/PText";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import { useLocation } from "react-router-dom";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("hello");
  }, [pathname]);
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Asrafuzzaman</span>
            </p>
            <h2 className="about__heading">A Front-End Web Developer</h2>
            <div className="about__info">
              <PText>
                I amd from Uttara, Dhaka, Bangladesh. A place of beauty and in
                Dhaka. Since my college life, I love to coding and design. I
                always try to design and development stuff with my unique point
                of view. I also love to create things that can be useful to
                others.
                <br /> <br />
                I started coding since I was in collage. Coding is also an art
                for me. I love it and now I have the opportunity to design along
                with the coding. I find it reality interesting and I enjoyed the
                process a lot. <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <ButtonForResume
              btnText="Download Resume"
              btnLink="https://drive.google.com/uc?export=download&id=1g2ffSrJ3knZSe6AUnBYJvSyru04TElr-"
            />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Asrafuzzaman Img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={["Kanchpur Omar Ali High School, Narayangonj"]}
            />
            <AboutInfoItem
              title="College"
              items={["Faridpur Polytechnic Institute"]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="Expertise"
              items={["HTML5", "CSS3", "BootStrap", "React"]}
            />
            <AboutInfoItem title="Comfortable" items={["JavaScript", "ES6"]} />
            <AboutInfoItem title="Familiar" items={["Tailwind CSS"]} />
            <AboutInfoItem
              title="Tools"
              items={[
                "Firebase",
                "Netlify",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Heroku",
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
};

export default About;
