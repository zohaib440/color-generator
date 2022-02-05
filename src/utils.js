function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;

// import React, { useState } from "react";
// import SingleColor from "./SingleColor";

// import Values from "values.js";

// function App() {
//   const [color, setColor] = useState("");
//   const [error, setError] = useState(false);
//   const [list, setList] = useState(new Values("#f22222").all(10));

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     try {
//       let colors = new Values(color).all(10);
//       setList(colors);
//       console.log(colors);
//     } catch (error) {
//       setError(true);
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <section className="container">
//         <h3>color generator</h3>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="#f22222"
//             value={color}
//             onChange={(event) => {
//               setColor(event.target.value);
//             }}
//             className={`${error ? "error" : null}`}
//           />
//           <button type="submit" className="btn">
//             submit
//           </button>
//         </form>
//       </section>
//       <section className="colors">
//         {list.map((color, index) => {
//           return (
//             <SingleColor
//               key={index}
//               {...color}
//               index={index}
//               hexColor={color.hex}
//             />
//           );
//         })}
//       </section>
//     </>
//   );
// }

// export default App;

// // alert usestate is for copyclipboard
// import React, { useState, useEffect } from "react";

// const SingleColor = ({ rgb, weight, index, hexColor }) => {
//   const [alert, setAlert] = useState(false);
//   // converting array rgb into string bcg to set background color
//   const bcg = rgb.join(",");
//   const hexValue = `#${hexColor}`;
// console.log(rgb);
//   console.log(hexColor);
//   console.log(bcg);
//   console.log(hexValue);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setAlert(false);
//     }, 3000);
//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [alert]);

//   return (
//     <article
//       className={`color ${index > 10 && "color-light"} `}
//       style={{ backgroundColor: `rgb(${bcg})` }}
//       onClick={() => {
//         setAlert(true);
//         navigator.clipboard.writeText(hexValue);
//       }}
//     >
//       <p className="percent-value">{weight}%</p>
//       <p className="color-value">{hexValue} </p>
//       {alert && <p>copy to clipboard</p>}
//     </article>
//   );
// };

// export default SingleColor;
