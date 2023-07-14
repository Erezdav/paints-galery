// import React, { useState, useEffect } from "react";
import { paints_url } from "./utils/constants";
import axios from "axios";

// const FetchPaintsInfo = ({ paints }) => {
//   const [paints, setPaints] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(paints_url);
//         const fetchedPaints = response.data;
//         setPaints(fetchedPaints);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="section-center">
//       {paints.map((paint) => (
//         <article key={paint.id} className="menu-item">
//           <header className="image-gallery">
//             <header className="item-info">
//               <header>
//                 <span style={{ fontWeight: "bold" }}>{paint.title}</span> /
//                 מידות: {paint.dimensions}
//               </header>
//             </header>
//             <div className="item container">
//               <img src={paint.image} alt={paint.title} className="img" />
//               <div className="item-info">
//                 <span className="price">{paint.price} שח</span>
//               </div>
//             </div>
//           </header>
//         </article>
//       ))}
//     </div>
//   );
// };

const FetchPaintsInfo = ({ paints }) => {
  return (
    <div className="section-center">
      {paints.map((paint) => (
        <article key={paint.id} className="menu-item">
          <header className="image-gallery">
            <header className="item-info">
              <header>
                <span style={{ fontWeight: "bold" }}>{paint.title}</span> /
                מידות: {paint.dimensions}
              </header>
            </header>
            <div className="item container">
              <img src={paint.image} alt={paint.title} className="img" />
              <div className="item-info">
                <span className="price">{paint.price} שח</span>
              </div>
            </div>
          </header>
        </article>
      ))}
    </div>
  );
};

export default FetchPaintsInfo;
// export default FetchPaintsInfo;
