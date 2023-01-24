import React, { Fragment } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import './settings.css'

const Settings = () => {
  return (
    <>
      <Fragment>
        <Container className="settings_main">
          <Card className="settings_left_cont">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active setting_tab_btns"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
              <div className="setting_icon_cont">
              <i class="fa fa-cog" aria-hidden="true"></i>
              </div>
              <div className = 'setting_title_cont'>
              <span >Account Setting</span>
              </div>
              </a>
              <a
                class="nav-link setting_tab_btns"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
              <div className="setting_icon_cont">
              <i class="fa fa-address-book" aria-hidden="true"></i>
              </div>
              <div className = 'setting_title_cont'>
              <span >Contact Filters</span>
              </div>
              </a>
              <a
                class="nav-link setting_tab_btns"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
               <div className="setting_icon_cont">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className = 'setting_title_cont'>
              <span >Email/SMS Alerts</span>
              </div>
              </a>
              <a
                class="nav-link setting_tab_btns"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
               <div className="setting_icon_cont">
               <i class="fa fa-shield" aria-hidden="true"></i>
              </div>
              <div className = 'setting_title_cont'>
              <span >Privacy Setting</span>
              </div>
              </a>
              <a
                class="nav-link setting_tab_btns"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
               <div className="setting_icon_cont">
               <i class="fa fa-trash" aria-hidden="true"></i>
              </div>
              <div className = 'setting_title_cont'>
              <span >Hide/Delete Profile</span>
              </div>
              </a>
            </div>
           
          </Card>
          <Card className="settings_right_cont">
          <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                hello
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                new
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                ...
              </div>
            </div>
          </Card>
        </Container>
      </Fragment>
    </>
  );
};

export default Settings;
