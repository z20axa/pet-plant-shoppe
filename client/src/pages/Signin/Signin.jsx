import React, { useState, useEffect } from "react";
import "./Signin.scss";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Signin = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
// check for valid 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>How are you?</h1>
        </div>
        <div className="right">
          <h1>Plant the seed</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              placeholder="Username"
            />
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              placeholder="Password"
            />

            <button className="btn btn-primary btn-block py-3" type="submit">
              ENTER
            </button>

     
          </form>
          <span>If you have an account with us, please log in.</span>
          <button className="btn btn-primary btn-block py-3" type="submit">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
