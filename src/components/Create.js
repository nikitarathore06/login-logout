// import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
//     axios
//       .post("", {
//         name: name,
//         email: email,
//       })
//       .then(() => {
//         navigate("/read");
//       });
  };

  return (
    <>
      {/* <div>Create</div> */}
      {/* <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form> */}
    </>
  );
}

export default Create;
