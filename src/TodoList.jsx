import React, { Fragment } from 'react'

const TodoList = (props) => {

    const { items, handleDelete } = props;
    
  return (
      <>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>COURSE</th>
                      <th>TRAINER</th>
                      <th>MORE OPTION</th>
                  </tr>
              </thead>
              <tbody>
                  {items.length > 0 && items.map((val) => {
                      return (
                        <Fragment key={val.id}>
                        <tr>
                          <td>{val.id}</td>
                          <td>{val.course}</td>
                          <td>{val.trainer}</td>
                          <td>
                          <button>EDIT</button>
                          <button onClick={
                          ()=>{handleDelete(val.id)}}>
                          DELETE
                          </button>
                          </td>
                        </tr>
                        </Fragment>
                      );
                  })}
              </tbody>
          </table>
      </>
  )
}
export default TodoList

//!array.length --> no. of elements in array
//? array.length===0  -->empty array