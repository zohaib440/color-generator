// // alert usestate is for copyclipboard
// import React, { useState, useEffect } from "react";

// const SingleColor = ({ rgb, weight, index, hexColor }) => {
//   console.log(hexColor);
//   const [alert, setAlert] = useState(false);
//   // converting array into string to set background color
//   const bcg = rgb.join(",");
//   const hexValue = `#${hexColor}`;
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
import React, { useState, useEffect } from "react";

const SingleColor = ({ index, hexColor, rgb, weight }) => {
  const [alert, setAlert] = useState(false);
  console.log(rgb);
  let bcg = rgb.join(",");
  console.log(bcg);
  let hexValue = `#${hexColor}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  return (
    <article
      style={{ backgroundColor: `rgb(${bcg})` }}
      className={`color ${index > 10 && "color-light"}`}
      onClick={() => {
        navigator.clipboard.writeText(hexValue);
        setAlert(true);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      {alert && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
