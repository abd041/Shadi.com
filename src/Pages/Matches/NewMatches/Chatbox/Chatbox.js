import React from 'react'
import './chatbox.css'

const Chatbox = () => {

    
    const user_profile1 = "assets/images/profiles/dummy/profile-photo-1.jpg";
    const user_profile2 = "assets/images/profiles/dummy/profile-photo-4.jpg";
    const user_profile3 = "assets/images/profiles/dummy/profile-photo-3.jpg";
    const user_profile4 = "assets/images/profiles/dummy/profile-photo-5.jpg";
    const user_profile5 = "assets/images/profiles/dummy/profile-photo-6.jpg";
    const user_profile6 = "assets/images/profiles/dummy/profile-photo-7.jpg";
    const user_profile7 = "assets/images/profiles/dummy/profile-photo-8.jpg";


  return (
   <>
    <div className='card cb_main_card'>
        <div className='cb_header'>
        <i class="fa fa-commenting me-2" aria-hidden="true"></i>
            <span className='cb_head_title'>Chat Box</span>
        </div>
        <ul className='chat_messges'>
        <li className='msg'>
            <img className='user_pic' src={user_profile1} alt='user1'/>
            <div className = 'title_row'>
                <b>Murtaza Khan</b>
                <div className='notification_msg'>
                <small >Hi there, how are you fine here and whats</small>
                </div>
            </div>
            <div className='badge_div'>
            <div className = 'notification_badge'>
                1
            </div>
            </div>
            
        </li>
        <li className='msg'>
            <img className='user_pic' src={user_profile2} alt='user1'/>
            <div className = 'title_row'>
                <b>Khalid Arslan</b>
                <div className='notification_msg'>
                <small >Hi there, how are you fine here and whats</small>
                </div>
            </div>
            <div className='badge_div'>
            <div className = 'notification_badge'>
                2
            </div>
            </div>
            
        </li>
        <li className='msg'>
            <img className='user_pic' src={user_profile3} alt='user1'/>
            <div className = 'title_row'>
                <b>Abdullah Ahmed</b>
                <div className='notification_msg'>
                <small >Hi there, how are you fine here and whats</small>
                </div>
            </div>
            <div className='badge_div'>
            <div className = 'notification_badge'>
                11
            </div>
            </div>  
        </li>
        <li className='msg'>
            <img className='user_pic' src={user_profile1} alt='user1'/>
            <div className = 'title_row'>
                <b>Murtaza Khan</b>
                <div className='notification_msg'>
                <small >Hi there, how are you fine here and whats</small>
                </div>
            </div>
            <div className='badge_div'>
            <div className = 'notification_badge'>
                1
            </div>
            </div>
            
        </li>
        </ul>
    </div>
   </>
  )
}

export default Chatbox