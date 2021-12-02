import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Asrafuzzaman</h1>
          <PText>
            I am a Frontend Web Developer, and I'm very passionate and dedicated
            to my work. With wide experience as a React Web Developer, I have
            acquired the skills and knowledge necessary to succeed in your
            project. I enjoy every step of the design process, from discussion
            and collaboration.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              { title: "Home", path: "/", type: "link" },
              { title: "About", path: "/about", type: "link" },
              { title: "Projects", path: "/projects", type: "link" },
              { title: "Contact", path: "/contact", type: "link" },
            ]}
          />
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+8801515226983",
                path: "tel:+8801515226983",
              },
              {
                title: "ashrafuzzzaman.shovon.786@gmail.com",
                path: "mailto:ashrafuzzzaman.shovon.786@gmail.com",
              },
              {
                title: "Uttara, Sector-4, Dhaka, Bangladesh",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Facebook",
                path: "https://facebook.com/masuvon",
              },
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/eashovon/",
              },
              {
                title: "GitHub",
                path: "https://www.github.com/eashovon",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Ashrafuzzaman | All Right Reserved</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
