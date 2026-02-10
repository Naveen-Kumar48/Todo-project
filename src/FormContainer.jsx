import React from 'react'

const FormContainer = (props) => {

    // console.log(props);//obj
    const {handleSubmit,course,trainer,handleChange } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>ENTER THE DETAILS BELOW</h1>
        </div>
        <div>
          <label htmlFor="cname">COURSE : </label>
          <input
            type="text"
            id="cname"
            name="course"
            value={course}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tname">TRAINER : </label>
          <input
            type="text"
            id="tname"
            name="trainer"
            value={trainer}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>SUBMIT</button>
        </div>
      </form>
    </>
  );
}
export default FormContainer