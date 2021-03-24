import React from "react";

function CreateUser() {
  return (
    <>
      <div className="Container">
        <div className="row">
          <div className="col-lg-6">
            <label>UserName</label>
            <input
              className="form-control"
              type="text"
              placeholder="YourName"
            /> <br/>
            <label>EmailAddress</label>
            <input
              className="form-control"
              type="email"
              placeholder="name@email.com"
            />
          </div>
        </div><br/>
        <div className ="col-lg-2">
            <button className="btn btn-info">Add User</button>

        </div>
      </div>
    </>
  );
}

export default CreateUser;
