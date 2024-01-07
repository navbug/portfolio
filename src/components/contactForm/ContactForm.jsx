import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaMobile } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";


const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  // position: relative;
  // z-index: 1;
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const ContactUsForm = styled.div`
  width: 90vw;
  background-color: ${({ theme }) => theme.card_light};
  padding: 20px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  @media (min-width: 428px) {
    width: 400px;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.primary};

      &:focus {
        border: 2px solid ${({ theme }) => theme.primary};
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.primary};

      &:focus {
        border: 2px solid ${({ theme }) => theme.primary};
      }
    }

    label {
      color: ${({ theme }) => theme.primary};
      font-weight: 500;
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    input[type="submit"] {
      width: 90px;
      height: 37px;
      margin-top: 2rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.black + 89};
      color: ${({ theme }) => theme.white};
      font-weight: 500;
      font-size: 1.2rem;
      border: none;
    }
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const ContactForm = () => {
  const [alert, setAlert] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0xtoocw",
        "template_z5j1sdk",
        form.current,
        "7QjMkzLn_iXtIJOkl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert("Your message has been sent. Thank you!");
          setTimeout(() => {
            setAlert("");
          }, 3000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setAlert(`Something went wrong. Please try again later.`);
        }
      );
  };

  return (
    <Container>
      <Title>Get in touch <FaMobileScreen /></Title>
      <ContactUsForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          {alert && <p>{alert}</p>}
          <input type="submit" value="Send" />
        </form>
      </ContactUsForm>
    </Container>
  );
};

export default ContactForm;
