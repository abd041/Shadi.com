/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./AuthUser.css"
import { useForm } from "react-hook-form";
import { HeaderWrapper } from "../../Components"
import { Container, Form, InputGroup, FormControl, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import PasswordShow from './PasswordShow';
import { useNavigate } from "react-router-dom";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

const Register = (props) => {

  const { className, style } = props;

  const navigate = useNavigate();

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

    navigate("profile-creation")

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
      {/* <Container> */}
      <div className={`registration__page ${className}`} style={style}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="registration__box">
              <h3 className='reg_title mb-3'>Register New Member</h3>
              <Form
                className="needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <Form.Group controlId="reg_fname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={firstName}
                        name="firstName"
                        onChange={controlRegisterForm}
                        required
                      />
                    </Form.Group>
                    <Form.Control.Feedback>
                      {"First Name is required"}
                    </Form.Control.Feedback>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Group
                      className="ms-0 ms-md-2"
                      controlId="reg_lname"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="select"
                        value={lastName}
                        name="lastName"
                        onChange={controlRegisterForm}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12 mb-3">
                    <Form.Group controlId="reg_gender">
                      <Form.Label>Gender</Form.Label>
                      <div className='d-flex align-items-center'>
                        <div className="radio_box d-flex">
                          <Form.Check
                            type="radio"
                            name="gender"
                            // label="Male"
                            id="male"
                            checked />
                          <ManIcon />
                        </div>
                        <div className="radio_box d-flex">
                          <Form.Check
                            type="radio"
                            name="gender"
                            // label="Female"
                            id="female"
                            className='ms-3' />
                          <WomanIcon />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12 mb-3">
                    <Form.Group controlId="reg_looking_for">
                      <Form.Label>Looking For</Form.Label>
                      <div className='d-flex align-items-'>
                        <div className="radio_box d-flex">
                          <Form.Check
                            type="radio"
                            name="looking_for"
                            // label="Male"
                            id="male_2" />
                          <ManIcon />
                        </div>
                        <div className="radio_box d-flex">
                          <Form.Check
                            type="radio"
                            name="looking_for"
                            // label="Female"
                            className='ms-3'
                            id="female_2"
                            checked />
                          <WomanIcon />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  {/* <div className="col-md-12 mb-3">
                    <Form.Group controlId="reg_religion">
                      <Form.Select name="religion" aria-label="Default select example" required>
                        <option disabled selected>Select Religion</option>
                        <option value="1">Islam</option>
                        <option value="2">Christianity</option>
                        <option value="3">Sikh</option>
                        <option value="4">Hindu</option>
                      </Form.Select>
                    </Form.Group>
                  </div> */}
                  {/* <div className="col-md-12 mb-3">
                    <Form.Group controlId="reg_education">
                      <Form.Select name="education" aria-label="Default select example" required>
                        <option disabled selected>Education</option>
                        <option value="1">High School</option>
                        <option value="2">Bachelors</option>
                        <option value="3">Masters</option>
                        <option value="4">Associates degree</option>
                      </Form.Select>
                    </Form.Group>
                  </div> */}
                  {/* <div className="col-md-12 mb-3">
                    <Form.Group controlId="reg_country">
                      <Form.Select name="country" aria-label="Default select example" required>
                        <option disabled selected>Country</option>
                        <option value="1">Pakistan</option>
                        <option value="2">China</option>
                        <option value="3">India</option>
                        <option value="4">Canada</option>
                      </Form.Select>
                    </Form.Group>
                  </div> */}
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
                      <Form.Text className="text-muted" style={{ fontSize: 12 }}>
                        {"We'll never share your email with anyone else."}
                      </Form.Text>
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
                  <div className="col-md-12 mb-3">
                    <Form.Group controlId="reg_repeat_pass">
                      <Form.Label>Confirm Password</Form.Label>
                      <InputGroup>
                        <FormControl
                          type={passRepeatShow ? "text" : "password"}
                          value={repeatPassword}
                          name="repeatPassword"
                          onChange={(event) => {
                            controlRegisterForm(event);
                            setPasswordError("");
                            setAlertType("error");
                          }}
                          required
                        />
                        <PasswordShow
                          passShow={passRepeatShow}
                          onclick={() => setPassRepeatShow(!passRepeatShow)}
                        />
                      </InputGroup>
                    </Form.Group>
                  </div>
                </div>
                <Button type='submit' className='btn_submit'>{"Register"}</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </>
  )
}

export default Register