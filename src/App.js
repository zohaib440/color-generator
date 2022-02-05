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
import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#654321").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(color);

    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#654321"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
