import React from "react";

const TodoList = ({ items, handleDelete, handleEdit }) => {
  return (
    <div className="table-container">
      <table className="todo-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>COURSE</th>
            <th>TRAINER</th>
            <th>MORE OPTION</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="4" className="empty-msg">
                No Data Available
              </td>
            </tr>
          ) : (
            items.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.course}</td>
                <td>{val.trainer}</td>

                <td className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(val.id)}
                  >
                    EDIT
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(val.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
};

export default TodoList;
