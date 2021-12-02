import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnqwawev");
  if (state.succeeded) {
    return <h2 style={{ fontSize: "3rem" }}>Thanks for contacting me</h2>;
  }

  return (
    <div>
      <FormStyles
        action="https://formspree.io/f/xnqwawev"
        onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input id="name" type="text" name="name" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your Message
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>
        </div>
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </FormStyles>
    </div>
  );
}
