import React from "react";
import user_profile_img from "../../../assets/IMAGES/girl_profile.jpg";
import camera_img from "../../../assets/IMAGES/camera_img.svg";
import tick_img from "../../../assets/IMAGES/tick.svg";
import edit_img from "../../../assets/IMAGES/edit_img.png";
import green_tick_img from "../../../assets/IMAGES/green_tick.svg";
import styles from "../../../styles/Dashboard2/Dashboard2.module.css";
import DashNotifications from "../DashNotifications";

function DashMainProfile() {
  return (
    <>
      <div className={styles.dm_profile}>
        <div className="row">
          <div
            className={`col-lg-4 col-md-6 col-sm-12 dmp_notification ${styles.dmp_notification}`}
          >
            <DashNotifications />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={styles.dmp_user}>
              <div className={styles.dmpu_verify}>
                <div className={styles.dmpu_tick}>
                  <img src={tick_img} alt="tick" />
                </div>
                <span>Verify ID</span>
              </div>

              <div className={styles.dmpu_profile_img}>
                <div className={styles.dmpup_img}>
                  <img src={user_profile_img} alt="user-img" />
                  <div className={styles.dmpup_camera_img}>
                    <img src={camera_img} alt="camera-img" />
                  </div>
                </div>
              </div>

              <div className={styles.dmpu_name}>
                <h4 className="text-center">
                  Alex <img src={edit_img} alt="edit-img" />
                </h4>
                <h5 className="text-center">RN8565264648</h5>
              </div>

              <div className={styles.dmpu_name}>
                <h4 className={styles.small}>Account</h4>
                <h5>Free Membership</h5>
                <button className={styles.font_sm}>Upgrade Now</button>
              </div>

              <div className={styles.dmpu_name}>
                <h4 className={styles.small}>Mobile Number</h4>
                <h5>Not Verified</h5>
                <button>Verified Now</button>
              </div>

              <div className={styles.dmpu_name}>
                <h4 className={styles.small}>CNIC Verification</h4>
                <h5>RN8565264648</h5>
                <button>Verified Now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={styles.number}>
              <div className={styles.main}>
                <h1>01</h1>
                <p className="px-2">Pending Invitations</p>
              </div>

              <div className={styles.main}>
                <h1>08</h1>
                <p>Accepted Invitations</p>
              </div>

              <div className={styles.main}>
                <h1>20</h1>
                <p className={styles.para}>Recent Visitors</p>
              </div>

              <div className={styles.main}>
                <h1>05</h1>
                <p className={styles.para1}>Contacts Viewed</p>
              </div>
              <div className={[styles.main]}>
                <div className={styles.dmp_status}>
                  <h1>
                    Profile is completed
                    <div className={styles.dmps_greenTick}>
                      <img src={green_tick_img} alt="green-tick" />
                    </div>
                  </h1>
                  <p>
                    Visit <a href="#abc">My Matches</a> to get in touch with
                    interseted profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashMainProfile;
