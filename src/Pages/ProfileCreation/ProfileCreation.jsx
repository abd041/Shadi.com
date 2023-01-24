/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./ProfileCreation.css"
import {
    Tabs,
    Tab,
    useFormControl,
    Checkbox,
    Box,
    TextField,
    Stack,
    Button
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { Form, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { Header } from '../../Components'
import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form";
import DoneIcon from '@mui/icons-material/Done';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import EducationIcon from '@mui/icons-material/School';
import YourIntroIcon from '@mui/icons-material/PermIdentity';
import ProfileForm from './ProfileForm';
import EducationForm from './EducationForm';
import YourIntroForm from './YourIntroForm';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const ProfileCreation = () => {

    const navigate = useNavigate();

    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const { screenWidth, screenHeight } = useWindowDimensions();

    const ImageTest = "assets/images/banner/banner-img-3.jpg";
    // const ImageTest = "assets/images/banner/banner-img-6.jpg";

    const handleContinueTab = () => {
        if (tabValue === 0) {
            setTabValue(1);
        }
        if (tabValue === 1) {
            setTabValue(2);
        }
        if (tabValue === 2) {
            navigate("/partners")
        }
    }

    const handlePreviousTab = () => {
        if (tabValue === 2) {
            setTabValue(1);
        }
        if (tabValue === 1) {
            setTabValue(0);
        }
    }

    return (
        <>
            <Header isProfileCreation={true} />
            <div className='profile_creation_wrapper'>
                <div className="container-fluid">
                    <Row className='justify-content-center'>
                        <Col xs="12" sm="12" md="12" className='p-0'>
                            <Row className='justify-content-center m-0'>
                                <Col xs="12" sm="12" md="5" className='d-none d-md-block p-0'>
                                    <div className="profile_creation_imagebox" style={{ height: screenHeight }}>
                                        {/* <img className='profile_creation_image' src={`${process.env.PUBLIC_URL}/${ImageTest}`} alt="" style={{width: '41.5%', height: '100%'}} /> */}
                                        <div className='profile_creation_image' alt="" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${ImageTest})` }} />
                                    </div>
                                </Col>
                                <Col xs="12" sm="12" md="7" className='my-4'>
                                    <Row className='justify-content-center m-0'>
                                        <Col md="9">
                                            <Card>
                                                <CardBody className='px-2'>
                                                    <TabContext value={tabValue}>
                                                        <div className="prof_creation_top_panel text-center">
                                                            <TabPanel
                                                                value={0}
                                                                className="ProfileCreation___tabpanel"
                                                            >
                                                                <h4 className='mb-0'>Let’s create your Profile now</h4>
                                                            </TabPanel>
                                                            <TabPanel
                                                                value={1}
                                                                className="ProfileCreation___tabpanel"
                                                            >
                                                                <h4 className='mb-0'>Just a few questions about your education & career</h4>
                                                            </TabPanel>
                                                            <TabPanel
                                                                value={2}
                                                                className="ProfileCreation___tabpanel"
                                                            >
                                                                <h4 className='mb-0'>One last thing! Describe yourself in a few words</h4>
                                                            </TabPanel>
                                                        </div>
                                                        <Tabs
                                                            TabIndicatorProps={{
                                                                style: { background: "#FF629500", justifyContent: 'center' },
                                                            }}
                                                            value={tabValue}
                                                            onChange={handleTabChange}
                                                            className="ProfileCreation__tab_wrapper"
                                                            aria-label="icon tabs example"
                                                        >
                                                            <Tab
                                                                icon={
                                                                    <ProfileIcon className="prof_creation_icon" />
                                                                }
                                                                // label="Profile"
                                                                aria-label="profile_part"
                                                                className="ProfileCreation_TabContext__tab"
                                                            />
                                                            <Tab
                                                                icon={
                                                                    <EducationIcon className="prof_creation_icon" />
                                                                }
                                                                // label="Education"
                                                                aria-label="education_part"
                                                                className="ProfileCreation_TabContext__tab"
                                                            // disabled={tabValue === 0}
                                                            />
                                                            <Tab
                                                                icon={
                                                                    <YourIntroIcon className="prof_creation_icon" />
                                                                }
                                                                // label="Your Intro"
                                                                aria-label="intro_part"
                                                                className="ProfileCreation_TabContext__tab"
                                                            // disabled={tabValue === 0 || tabValue === 1}
                                                            />
                                                        </Tabs>
                                                        <div className="prof_creation_main_panel">
                                                            <TabPanel
                                                                value={0}
                                                                className="ProfileCreation___tabpanel"
                                                            >
                                                                <ProfileForm nextTab={handleContinueTab} />
                                                            </TabPanel>
                                                            <TabPanel
                                                                value={1}
                                                                className="ProfileCreation___tabpanel"
                                                            >
                                                                <EducationForm nextTab={handleContinueTab} />
                                                            </TabPanel>
                                                            <TabPanel
                                                                value={2}
                                                                className="ProfileCreation___tabpanel"
                                                            >
                                                                <YourIntroForm nextTab={handleContinueTab} />
                                                            </TabPanel>
                                                            {/* <div className="next_button_panel">
                                                                <Button type='button' className='btn_next' onClick={handleContinueTab}>
                                                                    {tabValue === 2 ? "Create Profile" : "Continue"}
                                                                </Button>
                                                            </div> */}
                                                            {
                                                                tabValue !== 0 && <div className="back_button_box">
                                                                    <span className='btn_back' onClick={handlePreviousTab}>
                                                                        <ArrowBackOutlinedIcon />
                                                                    </span>
                                                                </div>
                                                            }
                                                        </div>
                                                    </TabContext>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>

    )
}

export default ProfileCreation