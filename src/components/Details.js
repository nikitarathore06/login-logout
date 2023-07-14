import React, { useEffect, useState } from "react";
// import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Create from "./Create";

const Details = () => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
          <div className="flex">
            <h4>Hello {logindata[0].name}</h4>
            <Button onClick={userlogout}>LogOut</Button>
          </div>
          
        </>
      )}
      <div className="container">
        <Create />
      </div>
    </>
  );
};

export default Details;
