import React from "react";
import { MdArrowBack } from "react-icons/md";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import PText from "./PText";
import SectionTitle from "./SectionTitle";

const TestimonialSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 2rem;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: "Montserrat Bold";
    font-size: 2.2.rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin: 0.3rem;
  }
`;

export default function TestimonialsSection() {
  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          heading="Testimonials"
          subheading="see what our clients say about us"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition>
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <PText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, aperiam.
                  </PText>
                  <h2 className="testimonial__name">Mysha Ahmed</h2>
                  <p className="testimonial__title">CEO, Mysha's World</p>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div className="prev">
            <MdArrowBack />
          </div>
          <div className="prev">
            <MdArrowBack />
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}
