import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import aboutImg from "../assets/IMG-20230715-WA0003.jpg";
import aboutImg1 from "../assets/1689433945549.jpg";
import aboutImg2 from "../assets/IMG-20230715-WA0019.jpg";
import henia from "../assets/henia.jpeg";

const AboutPage = () => {
  return (
    <Wrapper>
      <div className="box-container">
        <article>
          <h2>
            <br></br>
            הניה דוידוביץ-<span color="red">אמנית ישראלית</span>{" "}
          </h2>

          <div className="underline"></div>
          <img src={henia} alt="nice desk" className="img" />
          <img src={aboutImg} alt="nice desk" className="img" />
          <p>
            שמי הניה דוידוביץ ואני אמנית וציירת המתגוררת בקצרין-רמת הגולן. לאורך
            השנים התמקדתי ביצירת תכשיטים, רקמות עמים ועבודות טוויה וסריגה. בשנים
            האחרונות נחשפתי לעולם הציור וציירתי עשרות ציורים מקוריים בצבעי שמן,
            המשקפים את אהבתי לפשטות, לנוף הכפרי, לטבע ולאנשים. כאמא וכסבתא אני
            מנסה ללכוד בציוריי את רגעי החן וההומור שבחיי היומיום.
          </p>
          <div className="image-row">
            <div className="framed-box">
              <img src={aboutImg1} alt="Image 1" className="image" />
            </div>
            <div className="framed-box">
              <img src={aboutImg2} alt="Image 2" className="image" />
            </div>
          </div>
          <br></br>

          <p>
            ציורי מלאי חיים ומעבירים את אהבתי לנופי הטבע, לנופים כפריים ואת
            הרגעים הקטנים והפשוטים של חיי היומיום. עבודותיי מנסות לשלב הומור
            וחן, והן מעניקות מבט נוסטלגי ואופטימי על החיים. ציורי מוצגים מעת לעת
            בתערוכות פרטיות בקצרין.
          </p>
        </article>
        <Link className="home-button" to="/Collection">
          {" "}
          לגלריה
        </Link>
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
    max-width: 800px; /* Add max-width property to limit the width */
    margin: 0 auto; /* Center the box-container horizontally */
  }

  h2 {
    text-transform: none;
    /* color: #333; */
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
    font-size: 16px;
    text-align: right;
  }

  .img {
    width: 100%;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: 0 4px 6px rgba(1, 0, 0, 0.1);
  }
  .image-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .framed-box {
    width: calc(50% - 1rem); /* Adjust the width as per your preference */
    padding: 1rem;
    border: 1px solid #c59d5f;

    border-radius: 8px;
    margin: 0 0.5rem;
    box-shadow: 0 4px 6px rgba(1, 0, 0, 0.1);
  }

  .image {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(1, 0, 0, 0.1);
  }
  .home-button {
    font-size: 14px;
    padding: 1rem;
    border: 2px solid var(--clr-gold);
    color: var(--clr-gold);
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    margin-top: 1rem;
  }
  .home-button:hover {
    background-color: var(--clr-gold); /* Fill color with gold on hover */
    color: var(--clr-white); /* Change text color on hover */
  }

  /* Styles for small screens (up to 767px) */
  @media screen and (max-width: 767px) {
    .home-button {
      /* Apply styles specific to small screens here */
    }
  }

  /* Styles for medium screens (768px to 991px) */
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .home-button {
      /* Apply styles specific to medium screens here */
    }
  }

  /* Styles for large screens (992px and above) */
  @media screen and (min-width: 992px) {
    .home-button {
      /* Apply styles specific to large screens here */
    }
  }
`;

export default AboutPage;
