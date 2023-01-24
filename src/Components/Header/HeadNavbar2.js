import React from "react";
import { useState } from "react";
import logo from "../../assets/shaadi-logo.png";
import { Link } from 'react-router-dom'
import styles from "../Header/HeadNavbar2/HeadNavbar2.module.css";

function HeadNavbar2() {
  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);

  // Change Navbar Bg Color on Scroll
  const [navBar, setNavBar] = useState(false);

  const navBarBg = () => {
    if (window.scrollY >= 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", navBarBg);

  const [activeTabShaadi, setActiveTabShaadi] = useState(false);
  const [activeTabMatches, setActiveTabMatches] = useState(false);
  const [activeTabInbox, setActiveTabInbox] = useState(false);

  const handleActiveTabShaadi = () => {
    setActiveTabShaadi(!activeTabShaadi);
    setActiveTabMatches(false);
    setActiveTabInbox(false);
  };

  const handleActiveTabMatches = () => {
    setActiveTabShaadi(false);
    setActiveTabMatches(!activeTabMatches);
    setActiveTabInbox(false);
  };

  const handleActiveTabInbox = () => {
    setActiveTabShaadi(false);
    setActiveTabMatches(false);
    setActiveTabInbox(!activeTabInbox);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={styles.D_navbar}>
        <div className="container" style={{ height: "100%" }}>
          <div className={styles.inner}>
            {/* LOGO */}
            <div className={styles.logo}>
              <Link to={"/"}><img src={logo} alt="logo" /></Link>
            </div>

            <div
              className={
                openNav ? `${styles.links} ${styles.active}` : `${styles.links}`
              }
            >
              {/* LINKS */}
              <ul
                className={
                  navBar
                    ? `${styles.navbar_list} ${styles.active}`
                    : `${styles.navbar_list}`
                }
              >
                <li
                  className={
                    activeTabShaadi
                      ? `${styles.nl_list} ${styles.active}`
                      : `${styles.nl_list}`
                  }
                onClick={()=> handleActiveTabShaadi()}
                >
                  My Shaadi
                      <ul className={activeTabShaadi
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                        <li className={styles.nlh_list}><Link to={"/dashboard2"}>Dashboard</Link></li>
                        <li className={styles.nlh_list}><Link to={"/link-2"}>Link 2</Link></li>
                      </ul>
                </li>
                <li
                  className={
                    activeTabMatches
                      ? `${styles.nl_list} ${styles.active}`
                      : `${styles.nl_list}`
                  }
                  onClick={() => handleActiveTabMatches()}
                >
                  Matches
                  <ul className={activeTabMatches
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                        <li className={styles.nlh_list}><Link to={"/today-recommendation"}>Today's Matches</Link></li>
                        <li className={styles.nlh_list}><Link to={"/partners"}>My-Matches</Link></li>
                        <li className={styles.nlh_list}><Link to={"/near-me"}>Near Me</Link></li>
                        <li className={styles.nlh_list}><Link to={"/viewed"}>Recently Viewed</Link></li>
                      </ul>
                </li>
                <li
                  className={
                    activeTabInbox
                      ? `${styles.nl_list} ${styles.active}`
                      : `${styles.nl_list}`
                  }
                  onClick={() => handleActiveTabInbox()}
                >
                  Inbox
                  <ul className={activeTabInbox
                      ? `${styles.nl_hidden_list} ${styles.active}`
                      : `${styles.nl_hidden_list}`}>
                        <li className={styles.nlh_list}><Link to={"/link-1"}>Link 1</Link></li>
                        <li className={styles.nlh_list}><Link to={"/link-2"}>Link 2</Link></li>
                      </ul>
                </li>
              </ul>
            </div>

            

            {/* HAMBURGER */}
            <div class={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
              <input class={styles.checkbox} type="checkbox" />
              <div
                class={
                  openNav
                    ? `${styles.hamburger_lines} ${styles.active}`
                    : `${styles.hamburger_lines}` && navBar
                    ? `${styles.hamburger_lines} ${styles.color_active}`
                    : `${styles.hamburger_lines}`
                }
              >
                <span class={`${styles.line} ${styles.line1}`}></span>
                <span class={`${styles.line} ${styles.line2}`}></span>
                <span class={`${styles.line} ${styles.line3}`}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeadNavbar2;
