import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodoList';

const App = () => {

    const [formData, setFormData] = useState({
        items:[],//!to store multi set of data
        course: "",
        trainer: "",
        id:uuidv4()//?to generate id for each data
    })

    //event-->SBE(onChange)
    const handleChange = (event) => {
        // console.log(event);
        const { name, value } = event.target
        setFormData({...formData,[name]:value})
    }

    //event-->SBE(onSubmit)
    const handleSubmit = (event) => {
      event.preventDefault()
      
      //!pass the "multi set of data" within array
      if (formData.course === "" || formData.trainer === "") {
        alert("Kindly fill input filed!!!")
      } else {
         setFormData({
           ...formData, //?to prevent overriding of data within state obj
           items: [
             ...formData.items, //?to prevent overriding of data within items array
             {
               course: formData.course,
               trainer: formData.trainer,
               id: formData.id,
             },
           ],
           course: "", //* converting "course input" back to empty
           trainer: "", //* converting "trainer input" back to empty
           id: uuidv4(), //* to generate id for "next data"
         });
      }
  }
  
  //! *****delete set of data*********
  const handleDelete = (delId) => {
    console.log("Id of item to be deleted",delId);
    const filterVal=formData.items.filter((val) => {
      // console.log("within filter current val",val);
      return val.id !== delId
    })
    console.log("remaining val",filterVal);//array
    setFormData({...formData,items:filterVal})
  }

  return (
    <>
      <section>
        <FormContainer
          handleSubmit={handleSubmit}
          course={formData.course}
          trainer={formData.trainer}
          handleChange={handleChange}
        />
        <TodoList
          items={formData.items}
          handleDelete={handleDelete} />
      </section>
    </>
  );
}
export default App

//! SBE -->target -->1)name 2)value