import React from "react";
import Testimonial from "./Components/Testimonial";
import reviews from "./data";


const App = () => {
  
  return (
    <div >
    <div>
      <h1>Kashir Tourist Places</h1>
      <div></div>
      <Testimonial reviews={reviews}/>

    </div>

    
    </div>
  );
};

export default App;
