import React, { Fragment } from 'react'
import { Button, Card, Row, Col } from 'reactstrap';
import ContactUs from './ContactUs';
import './customercare.css';

const CustomerCareDetail = () => {
  return (
    <>
     <Fragment>
     <div className="main_cont_customercare_detail">
        <div className="background_image_cont">
        <h2 className='search_help_title'>What kind of help you Actually want?</h2>
        <div className='cutomer_care_search_cont'>
        <input type= 'text' className='customercare_serach_field' placeholder='Search'></input>
        <i className="fa fa-search search_icon"></i>
        </div>
        </div>
        <Card className=' col-12 customercare_detail_card'>
            <Col md='12' className='customercare_detail_backbtn_row'>
              <Button className='customercare_detail_backbtn'>
              <i class="fa fa-reply me-1"></i>
              <span>Back</span>
              </Button>
            </Col>
              <div className='customercare_detail_title_row'>
              <div className='title_div'>
              <i className="fa fa-user me-3"></i>
               <h5 className='m-0 p-0'>I want to edit my profile</h5>
               </div>
              </div>
            <div className = 'customercare_main_help'>
             <div className='help_title'>
                Editing your profile:
             </div>
             <ol className='helping_points'>
               <li className='helping_point_numbers'>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
               </li>
               <li className='helping_point_numbers'>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
               </li>
               <li className='helping_point_numbers'>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
               </li>
               <li className='helping_point_numbers'>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
               </li>
             </ol>
             <div className='btn_edit_help_row'>
              <Button className='edit_help_btn'>Edit my profile</Button>
             </div>
            </div>
        </Card>
        <ContactUs/>
     </div>
   
     </Fragment>
    </>
  )
}

export default CustomerCareDetail