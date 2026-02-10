import React from "react";

const FormContaniner = (props) => {
  // console.log(props)
  const { handleSubmit, trainer, course, handleChange } = props;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>ENTER YOUR DETAIL BELOW</h1>
        </div>

        <div>
          <label htmlFor="cname">COURSE:</label>
          <input
            type="text"
            name="course"
            value={course}
            id="cname"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="tname">TRAINER:</label>
          <input
            type="text"
            name="trainer"
            value={trainer}
            id="tname"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormContaniner;
