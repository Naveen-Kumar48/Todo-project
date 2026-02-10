import React, { useState } from "react";
import FormContaniner from "./FormContaniner";
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [FormData, setFormdata] = useState({
    items:[],//to store the multiple value
    course: "",
    trainer: "",
    id:uuidv4()//?to geneate the  unique id for each data
  });

  //*EVENT -->SBE(on-change)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...FormData, [name]: value });
    // console.log(e.target.value);
    
  };

  //*event -->SBE(on-submit)
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <FormContaniner
        handleSubmit={handleSubmit}
        course={FormData.course}
        trainer={FormData.trainer}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
