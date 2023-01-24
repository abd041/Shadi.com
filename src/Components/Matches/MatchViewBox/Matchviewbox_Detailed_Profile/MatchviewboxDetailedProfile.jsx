/* eslint-disable no-unused-vars */
import React from 'react'
import "./MatchviewboxDetailedProfile.css"
import AboutIcon from '@mui/icons-material/InfoOutlined';
import ContactIcon from '@mui/icons-material/PermContactCalendarOutlined';
import LifeStyleIcon from '@mui/icons-material/HeartBrokenOutlined';
import FamilyIcon from '@mui/icons-material/GroupOutlined';
import PhoneIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';

const Matchviewbox_Detailed_Profile = () => {
    return (
        <div className="matchviewbox_detailed_profile">
            <div className="matchviewbox_detailed_profile_box_wrapper matchviewbox_detailed_profile_box_about_box">
                <div className="matchviewbox_detailed_profile_box">
                    <div className="matchviewbox_detailed_profile_box_header">
                        <div className="pb_title_box">
                            <div className="pb_icon_box">
                                <AboutIcon className='pb_icon' />
                            </div>
                            <h5 className='pb_title'>About</h5>
                        </div>
                    </div>
                    <div className="matchviewbox_detailed_profile_box_body">
                        <p className='about_text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium id accusamus dolores non et necessitatibus sit fugiat? Nesciunt veniam quas fugiat debitis ex. Ipsam quas voluptatum quasi libero at. Reiciendis ipsa ex quia corporis aut odio facere quos? Vitae quaerat recusandae doloremque eum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="matchviewbox_detailed_profile_box_wrapper matchviewbox_detailed_profile_box_contact_box">
                <div className="matchviewbox_detailed_profile_box">
                    <div className="matchviewbox_detailed_profile_box_header">
                        <div className="pb_title_box">
                            <div className="pb_icon_box">
                                <ContactIcon className='pb_icon' />
                            </div>
                            <h5 className='pb_title'>Contact</h5>
                        </div>
                    </div>
                    <div className="matchviewbox_detailed_profile_box_body matchviewbox_detailed_profile_box_body_contact_box">
                        <div className="pb_contact_box">
                            <div className="info_box_wrapper">
                                <div className="icon_box">
                                    <PhoneIcon />
                                </div>
                                <div className="info_box_wrap">
                                    <p className="info_box_title mb-0">
                                        Number
                                    </p>
                                    <p className="info_box_detail mb-0">
                                        034678*****
                                    </p>
                                </div>
                            </div>
                            <div className="info_box_wrapper">
                                <div className="icon_box">
                                    <MailIcon />
                                </div>
                                <div className="info_box_wrap">
                                    <p className="info_box_title mb-0">
                                        Email
                                    </p>
                                    <p className="info_box_detail mb-0">
                                        alizabeth@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="upgrade_option_wrap">
                            <div className="upgrade_btn">Subscribe Package</div>
                            <div className="upgrade_link">Click to view our Premium Packages</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="matchviewbox_detailed_profile_box_wrapper">
                <div className="matchviewbox_detailed_profile_box">
                    <div className="matchviewbox_detailed_profile_box_header">
                        <div className="pb_title_box">
                            <div className="pb_icon_box">
                                <LifeStyleIcon className='pb_icon' />
                            </div>
                            <h5 className='pb_title'>LifeStyle</h5>
                        </div>
                    </div>
                    <div className="matchviewbox_detailed_profile_box_body">

                    </div>
                </div>
            </div>
            <div className="matchviewbox_detailed_profile_box_wrapper">
                <div className="matchviewbox_detailed_profile_box">
                    <div className="matchviewbox_detailed_profile_box_header">
                        <div className="pb_title_box">
                            <div className="pb_icon_box">
                                <FamilyIcon className='pb_icon' />
                            </div>
                            <h5 className='pb_title'>Family</h5>
                        </div>
                    </div>
                    <div className="matchviewbox_detailed_profile_box_body">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Matchviewbox_Detailed_Profile