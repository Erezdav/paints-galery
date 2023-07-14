import React from "react";
import styled from "styled-components";

import aboutImg from "../assets/2.jpg";

const AboutPage = () => {
  return (
    <Wrapper>
      <div className="box-container">
        <article>
          <h2>הניה</h2>
          <div className="underline"></div>
          <p>אני אמנית רב תחומית. עוסקת בציור, תכשיטנות, פיסול</p>
          <img src={aboutImg} alt="nice desk" className="img" />
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;

  .box-container {
    text-align: center;
    padding: 2rem;
    background-color: #f3f3f3;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(1, 0, 0, 0.1);
  }

  h2 {
    text-transform: none;
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .underline {
    margin: 0 auto 1rem auto;
    width: 8rem;
    height: 3px;
    background-color: #333;
  }

  p {
    line-height: 2;
    color: var(--clr-grey-5);
    font-size: 20px;
  }

  .img {
    width: 100%;
    border-radius: 5px;
    margin-top: 2rem;
    box-shadow: 0 4px 6px rgba(1, 0, 0, 0.1);
  }
`;

export default AboutPage;
