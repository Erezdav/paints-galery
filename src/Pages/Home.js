import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import aboutImg from "../assets/IMG-20230715-WA0003.jpg";
import aboutImg1 from "../assets/1689433945549.jpg";
import aboutImg2 from "../assets/IMG-20230715-WA0019.jpg";

const AboutPage = () => {
  return (
    <Wrapper>
      <div className="box-container">
        <article>
          <h2>
            הניה דוידוביץ-<span color="red">אמנית ישראלית</span>{" "}
          </h2>

          <div className="underline"></div>
          <img src={aboutImg} alt="nice desk" className="img" />
          <p>
            הציור המפורסם "אמריקן גות'יק", שצויר על ידי גרנט ווד בשנת 1930, מתאר
            זוג אמריקאי "שמתאים לגור בבית כזה", כמו שאמר האמן. האישה בציור לבושה
            בסינר אופייני לארצות-הברית של המאה ה-19. שני בני הזוג מציגים את
            התפקידים המסורתיים של גברים ונשים בני אותה התקופה - הגבר אוחז
            בקילשון שמשמש לעבודת כפיים והאישה עקרת בית, עם פרחים ובלבוש ביתי. הם
            מצוירים על רקע בית דו-קומתי (קוטג') שעוצב בסגנון אדריכלי שנקרא
            "גותיקת הנגרים" והוא מתאפיין בין השאר בחלון עליון ומאורך, כמו זה
            שנראה בציור. הציור הפך למוכר מאד והרבה מאד התייחסויות אמנותיות היו
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
            הציור המפורסם "אמריקן גות'יק", שצויר על ידי גרנט ווד בשנת 1930, מתאר
            זוג אמריקאי "שמתאים לגור בבית כזה", כמו שאמר האמן. האישה בציור לבושה
            בסינר אופייני לארצות-הברית של המאה ה-19. שני בני הזוג מציגים את
            התפקידים המסורתיים של גברים ונשים בני אותה התקופה - הגבר אוחז
            בקילשון שמשמש לעבודת כפיים והאישה עקרת בית, עם פרחים ובלבוש ביתי.
          </p>
        </article>
        <Link
          style={{ fontSize: "14px", padding: "1rem" }}
          className="home-button"
          to="/Collection"
        >
          {" "}
          לגלריה שלי
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
`;

export default AboutPage;
