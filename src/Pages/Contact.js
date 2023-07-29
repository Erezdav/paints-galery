import React from "react";
import styled from "styled-components";
import Whatsapp from "../Whatsapp";

const Contact = () => {
  return (
    <Wrapper>
      <Whatsapp />
      <div className="box-container">
        <h3>צרו איתי קשר</h3>
        <p>לרכישת ציורים שלי אתם מוזמנים לתאם עימי בטלפון</p>
        <p>
          טלפון: <strong>0528-200435</strong>
        </p>
        <p>
          איסוף פרטי אומנות מקצרין. אפשרות לאיסוף מרמת חן וקרית אונו בתאום מראש
          בלבד
        </p>
        <p>אין משלוחים</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;

  .box-container {
    padding: 2rem;
    text-align: center;
    background-color: #f3f3f3;
    border-radius: 5px;
    margin-bottom: 40rem;
    box-shadow: 0 4px 6px rgba(1, 0, 0, 0.1);
  }

  h3 {
    text-transform: none;
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.5;
    max-width: 45em;
    margin-bottom: 1rem;
  }
`;

export default Contact;
