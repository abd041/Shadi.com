import React from 'react'
import "./PartnerPreferences.css"
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PartnerPreferences = () => {

    const ProfileWomen = "assets/images/profiles/dummy/profile-photo-4.jpg";
    const ProfileMen = "assets/images/profiles/dummy/profile-photo-men-1.jpg";
    const percentage = 70;

    return (
        <div className="matchviewbox_partner_preferences">
            <div className="partner_preferences_match_box">
                <div className="partner_preferences_match_box_body">
                    <div className="partner_preferences_match_box_bg_dot_box">
                        <div className="partner_preferences_match_box_bg_dot_box_body">
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                            <span className="dots"></span>
                        </div>
                    </div>
                    <div className="partner_preferences_match_imagebox">
                        <img className="partner_preferences_match_image img_fluid"
                            src={`${process.env.PUBLIC_URL}/${ProfileWomen}`} alt="" />
                    </div>
                    <div className="partner_preferences_match_percentage_box">
                        {/* https://codesandbox.io/s/vymm4oln6y */}
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            circleRatio={1.0}
                            strokeWidth={8}
                            styles={buildStyles({
                                textColor: "var(--color-secondary)",
                                pathColor: "var(--color-secondary)",
                                trailColor: "lightgray",
                                textSize: "24px",
                            })}
                            counterClockwise={true}
                        />
                        <p className='title mb-0'>Matches</p>
                    </div>
                    <div className="partner_preferences_match_imagebox">
                        <img className="partner_preferences_match_image img_fluid"
                            src={`${process.env.PUBLIC_URL}/${ProfileMen}`} alt="" />
                    </div>
                </div>
            </div>
            <div className="matched_preferences_details_wrapped">
                <div className="matched_preferences_details_box">
                    <div className="matchviewbox_partner_preferences_box_header">
                        <div className="pb_title_box">
                            <div className="pb_icon_box">
                                <DescriptionOutlinedIcon className='pb_icon' />
                            </div>
                            <h5 className='pb_title'>Matched Preferences</h5>
                        </div>
                    </div>
                    <div className="matchviewbox_partner_preferences_box_body">
                        <div className="row m-0">
                            <div className="col-12 col-sm-6 col-md-4 mb-3">
                                <div className="detail_box_title_box_v1">
                                    <h6 className="detail_box_title">Age</h6>
                                    <div className="detail_box_body">
                                        <p className='info_alpha detail_box_title_box_v1_after_comma'>27 yrs</p>
                                        <p className='info_beta'>5'5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mb-3">
                                <div className="detail_box_title_box_v1">
                                    <h6 className="detail_box_title">City</h6>
                                    <div className="detail_box_body">
                                        <p className='info_alpha detail_box_title_box_v1_after_comma'>Karachi</p>
                                        <p className='info_beta'>Sindh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mb-3">
                                <div className="detail_box_title_box_v1">
                                    <h6 className="detail_box_title">Religion</h6>
                                    <div className="detail_box_body">
                                        <p className='info_alpha detail_box_title_box_v1_after_hyphen'>Muslim</p>
                                        <p className='info_beta'>Sunni</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mb-3">
                                <div className="detail_box_title_box_v1">
                                    <h6 className="detail_box_title">Education</h6>
                                    <div className="detail_box_body">
                                        <p className='info_alpha'>Bachelors Degree In Arts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mb-3">
                                <div className="detail_box_title_box_v1">
                                    <h6 className="detail_box_title">Profession</h6>
                                    <div className="detail_box_body">
                                        <p className='info_alpha'>Content Writer</p>
                                        {/* <p className='info_beta'></p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mb-3">
                                <div className="detail_box_title_box_v1">
                                    <h6 className="detail_box_title">Earning</h6>
                                    <div className="detail_box_body">
                                        <p className='info_alpha'>Rs. 18,000 / Monthly</p>
                                        {/* <p className='info_beta'></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerPreferences