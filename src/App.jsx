import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodoList';
import "./Global.css"

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

  //*edit function 
  const handleEdit=(editId)=>{
    //?collections "all remaining  items " apart from the items to edit
    const remaingVal=formData.items.filter((val)=>{
      return  val.id !==editId
    })
    //? finding  specific   item to edit 
    const editItem=formData.items.find((val)=>{
      return val.id===editId
    })
    console.log("edit item id" ,editItem)
    console.log("remaining val",remaingVal)
    setFormData({
      items:remaingVal,//*apart form  to edit  bringing  "remaining vals into the UI"
      course:editItem.course,//*bringing "course to the edit into the  course input "
      trainer:editItem.trainer,
      id:editItem.id//*   pointing to the exact same id to edit
    })
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
          handleDelete={handleDelete}
          handleEdit={handleEdit} />
      </section>
    </>
  );
}
export default App

//! SBE -->target -->1)name 2)value