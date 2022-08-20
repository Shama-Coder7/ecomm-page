import React, { useState, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Login.css';

const Login = ({ ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  //  States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  //Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  //Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  //Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <Fragment>
      <div>
        <Button className="btn-login" onClick={() => setShow(true)}>
          {name || 'LOGIN'}
        </Button>
        <Modal show={show} onHide={handleClose} {...props}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="form">
              <div>
                <h2 className="login-head">User Registration</h2>
              </div>

              {/* Calling to the methods */}
              <div className="messages">
                {errorMessage()}
                {successMessage()}
              </div>

              <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input
                  onChange={handleName}
                  className="input"
                  value={name}
                  type="text"
                />

                <label className="label">Email</label>
                <input
                  onChange={handleEmail}
                  className="input"
                  value={email}
                  type="email"
                />

                <label className="label">Password</label>
                <input
                  onChange={handlePassword}
                  className="input"
                  value={password}
                  type="password"
                />

                <button
                  onClick={handleSubmit}
                  className="btn-submit"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Login;
