import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 1.8em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gray-1)" : "black")};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

const Button = ({ btnLink = "test", btnText = "test", outline = false }) => (
  <ButtonStyle outline={outline} className="button-wrapper">
    <a rel="noreferrer" target="_blank" className="button" href={btnLink}>
      {btnText}
    </a>
  </ButtonStyle>
);

export default Button;
