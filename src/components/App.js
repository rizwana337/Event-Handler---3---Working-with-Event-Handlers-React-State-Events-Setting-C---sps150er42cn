import React from 'react';
import '../styles/App.css';

const App = () => {
  const handleInput = (event) => {
    const inputType = event.target.type;
    const inputId = event.target.id;
    const inputValue = event.target.value;

    if (inputType === "text") {
      console.log(`Input in #${inputId} is ${inputValue}`);
    } else if (inputType === "number") {
      const otherInputValue = document.getElementById("text-input").value;
      console.log(`Input in #${inputId} is ${otherInputValue}${inputValue}`);
    }
  };

  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input id="text-input" type="text" onChange={handleInput} />

      <br />
      <br />

      <label htmlFor="num-input">Number input</label>
      <input id="num-input" type="number" onChange={handleInput} />
      <br />
    </div>
  );
};

export default App;





// import React from 'react'
// import '../styles/App.css';
// const App = () => {

//   const handleInput = (event) =>{
//    // use console.log
//   }

//   // do not change id of input elements
//   return (
//     <div id="main">
//       <label htmlFor='text-input'>Text Input:- </label>
//       <input id="text-input" type={'text'} />

//       <br/>
//       <br/>

//       <label htmlFor='num-input'>Number input</label>
//       <input id="num-input"  type={'number'} />
//       <br/>
//     </div>
//   )
// }


// export default App;
