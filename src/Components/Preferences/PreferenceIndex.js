import { Settings } from "@material-ui/icons";
import React, { Fragment, useState } from "react";
import { Container, Card, Row, CardBody, Col, Label, Input } from "reactstrap";
import "./preferences.css";
import Slider from "@mui/material/Slider";

const PreferenceIndex = () => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Fragment>
        <div className="main_cont">
          <div className="parent_cont">
            <div class="d-flex align-items-start">
              <Card
                className="nav flex-column nav-pills me-3 pref_tabs_btn_div"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link tab_btn active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <i class="fa fa-sliders" aria-hidden="true"></i>
                  <span className="tabs_btn_text">Account Settings</span>
                </button>
                <button
                  className="nav-link tab_btn"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <i class="fa fa-filter" aria-hidden="true"></i>
                  <span className="tabs_btn_text">Contact Filters</span>
                </button>
                <button
                  className="nav-link tab_btn"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span className="tabs_btn_text">Email/SMS alerts</span>
                </button>
                <button
                  className="nav-link tab_btn"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <i class="fa fa-user-secret" aria-hidden="true"></i>
                  <span className="tabs_btn_text">Privacy Options</span>
                </button>
                <button
                  className="nav-link tab_btn"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <i class="fa fa-eye-slash" aria-hidden="true"></i>
                  <span className="tabs_btn_text">Hide /Delete Profile</span>
                </button>
              </Card>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane tab_panel fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <Card className="setting_card1">
                    <div className="d-flex justify-content-center mt-2">
                      <span className="header_text">
                        Tell us what are you looking for in a life partner
                      </span>
                    </div>
                    <CardBody>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Age</Label>
                        </Col>
                        <Col md="9">
                          <Slider 
                            style = {{color:'#ff6295'}}
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Height</Label>
                        </Col>
                        <Col md="9">
                          <Slider
                            style = {{color:'#ff6295'}}
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Marital Status</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="Never Married">Never Married</option>
                            <option value="Divorced">Divorced</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Relegion</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="Never Married">Muslim</option>
                            <option value="Divorced">Christian</option>
                            <option value="Divorced">Hndu</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Community</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="Open to All">Open to All</option>
                            <option value="Divorced">Christian</option>
                            <option value="Divorced">Hindu</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Mother Tongue</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="English<">English</option>
                            <option value="Urdu">Urdu</option>
                            <option value="French">French</option>
                          </Input>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <Card className="setting_card1">
                    <div className="d-flex justify-content-center mt-2">
                      <div className="location_details">
                        Location Details
                      </div>
                    </div>
                    <CardBody>
                    <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Mother Tongue</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="English<">Country Name</option>
                            <option value="Urdu">Urdu</option>
                            <option value="French">French</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">State Living in</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="Never Married">Open to all</option>
                            <option value="Divorced">Divorced</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Residency Status</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="Never Married">Open to all</option>
                            <option value="Divorced">Christian</option>
                            <option value="Divorced">Hndu</option>
                          </Input>
                        </Col>
                      </Row>
                      
                    </CardBody>
                  </Card>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                 <Card className="setting_card1">
                    <div className="d-flex justify-content-center mt-2">
                      <div className="location_details">
                        Education & Profession Details
                      </div>
                    </div>
                    <CardBody>
                    <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Qualificaton</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="English<">Open to all</option>
                            <option value="Urdu">Urdu</option>
                            <option value="French">French</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Working with</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="Never Married">Open to all</option>
                            <option value="Divorced">Divorced</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Profession area</Label>
                        </Col>
                        <Col md="9">
                          <Input
                            type="select"
                            name="martial_status"
                            className="input_select_options"
                          >
                            <option value="Never Married">Open to all</option>
                            <option value="Divorced">Christian</option>
                            <option value="Divorced">Hndu</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Annual income</Label>
                        </Col>
                        <Col md="4">
                          <Input
                            type="radio"
                            name="annaul_income"
                            className="input_select_options"
                          >
                          </Input>
                          <span className = 'ms-2'>open to all</span>
                        </Col>
                        <Col md="4">
                          <Input
                            type="radio"
                            name="annaul_income"
                            className="input_select_options"
                          >
                          </Input>
                          <span className = 'ms-2'>specify an income range</span>
                        </Col>
                        <Col md='9 dropDowns_cont'>
                          <Col md='3'>
                            <Input type = 'select' className = 'income_dropdown'>
                              <option value = '1'>1</option>
                            </Input>
                          </Col>
                          <Col md='3'>
                            <Input type = 'select' className = 'income_dropdown'>
                              <option value = '1'>1</option>
                            </Input>
                          </Col>
                          <Col md='3'>
                            <Input type = 'select' className = 'income_dropdown'>
                              <option value = '1'>1</option>
                            </Input>
                          </Col>
                          
                        </Col>
                        <Col md= '9' className="checkbox_cont">
                            <Input type="checkbox"></Input>
                            <Label className="ms-2">include Profiles who have not specified thier income</Label>
                          </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                 <Card className="setting_card1">
                    <div className="d-flex justify-content-center mt-2">
                      <div className="location_details">
                        Education and Profession Details
                      </div>
                    </div>
                    <CardBody>
                    <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Profile created by </Label>
                        </Col>
                        <Col md="9" className="checkboxes_container">
                        <Col md='3'>
                          <Input
                            type="checkbox"
                            name="martial_status"
                            className="input_select_options"
                          >
                          </Input>
                          <span className="label_checkbox ms-2">open to all</span>
                          </Col>
                          <Col md='2'>
                          <Input
                            type="checkbox"
                            name="martial_status"
                            className="input_select_options"
                          >
                          </Input>
                          <span className="label_checkbox ms-2">Self</span>
                          </Col>
                          <Col md='4'>
                          <Input
                            type="checkbox"
                            name="martial_status"
                            className="input_select_options"
                          >
                          </Input>
                          <span className="label_checkbox ms-2">Parents/Guardian</span>
                          </Col>
                          <Col md='3'>
                          <Input
                            type="checkbox"
                            name="martial_status"
                            className="input_select_options"
                          >
                          </Input>
                          <span className="label_checkbox ms-2">Siblings</span>
                          </Col>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col md="3 d-flex align-items-center">
                          <Label className="labels">Diet</Label>
                        </Col>
                        <Col md="9" className="checkboxes_container">
                        <Col md='3'>
                          <Input
                            type="checkbox"
                            name="martial_status"
                            className="input_select_options"
                          >
                          </Input>
                          <span className="label_checkbox ms-2">open to all</span>
                          </Col>
                          <Col md='2'>
                          <Input
                            type="checkbox"
                            name="martial_status"
                            className="input_select_options"
                          >
                          </Input>
                          <span className="label_checkbox ms-2">Veg</span>
                          </Col>
                          <Col md='4'>
                          <Input
                            type="checkbox"
                            name="martial_status"
                            className="input_select_options"
                          >
                          </Input>
                          <span className="label_checkbox ms-2">None-veg</span>
                          </Col>
                          <Col md='3'>
                          <Input
                            type="checkbox"
                            name="martial_status"
                            className="input_select_options"
                          >
                          </Input>
                          <span className="label_checkbox ms-2">Vegan</span>
                          </Col>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default PreferenceIndex;
