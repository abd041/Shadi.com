/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./AuthUser.css"
import { useForm } from "react-hook-form";
import { HeaderWrapper } from "../../Components"
import { Container, Form, InputGroup, FormControl, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import PasswordShow from './PasswordShow';

const Login = (props) => {

  const { className, style } = props;

  const [validated, setValidated] = useState(false);

  const initialFormValue = {
    firstName: "",
    lastName: "",
    gender: "",
    looking_for: "",
    date_of_birth: "",
    religion: "",
    education: "",
    country: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const [RegisterForm, setRegisterForm] = useState(initialFormValue);
  const {
    firstName,
    lastName,
    gender,
    looking_for,
    date_of_birth,
    religion,
    education,
    country,
    email,
    password,
    repeatPassword,
  } = RegisterForm;

  const [passwordShow, setPasswordShow] = useState(false);
  const [passRepeatShow, setPassRepeatShow] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const [statePassAlert, setStatePassAlert] = useState({
    openPassAlert: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, openPassAlert } = statePassAlert;
  const [alertType, setAlertType] = useState("error");
  const handleClickPassAlert = (newState) => {
    setStatePassAlert({ openPassAlert: true, ...newState });
  };
  const handleClosePassAlert = () => {
    setStatePassAlert({ ...statePassAlert, openPassAlert: false });
  };

  const controlRegisterForm = (event) => {
    const { name, value } = event.target;
    setRegisterForm({
      ...RegisterForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("Form Data: ", form);

    }

    setValidated(true);
  }

  return (
    <>
      {/* <HeaderWrapper /> */}
        <div className={`registration__page ${className}`} style={style}>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="registration__box">
                <h3 className='reg_title mb-3'>Login to your Membership</h3>
                <Form
                  className="needs-validation"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <Form.Group controlId="reg_email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          value={email}
                          name="email"
                          onChange={controlRegisterForm}
                          required
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-12 mb-3">
                      <Form.Group controlId="reg_pass">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                          <FormControl
                            type={passwordShow ? "text" : "password"}
                            value={password}
                            name="password"
                            onChange={(event) => {
                              controlRegisterForm(event);
                              setPasswordError("");
                              setAlertType("error");
                            }}
                            required
                          />
                          <PasswordShow
                            passShow={passwordShow}
                            onclick={() => setPasswordShow(!passwordShow)}
                          />
                        </InputGroup>
                      </Form.Group>
                    </div>
                  </div>
                  <Button type='submit' className='btn_submit'>{"Login"}</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login