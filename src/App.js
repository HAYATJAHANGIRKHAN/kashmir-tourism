import React from "react";
import Testimonial from "./Components/Testimonial";
import reviews from "./data";


const App = () => {
  
  return (
    <div className="flex flex-col w-[100 vh] h-[100vh] justify-center items-center bg-green-400" >
    <div className="text-center">
      <h1 className="text-4xl font-bold">Kashmir Tourist Places</h1>
      <div className="bg-violet-400 h-[4px] w-[1/5] mt-1"></div>
      <Testimonial reviews={reviews}/>

    </div>

    
    </div>
  );
};

export default App;
