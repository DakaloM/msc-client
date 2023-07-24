import React from 'react';
import "./contact.scss";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="header">
            <h1 className='title'>Get in Touch</h1>
            
            <p className="desc">
              This is your first step in taking your business to the next level
            </p>
      </div>

      <div className="intro pScreen">
          <div className="introWrapper">
              <div className="imgContainer">
                
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.741824022368!2d28.21233107468255!3d-25.746050077361705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561f3e36f8ad7%3A0x9a6820b4f57b000d!2sPretorius%20St%2C%20Arcadia%2C%20Pretoria!5e0!3m2!1sen!2sza!4v1689249438157!5m2!1sen!2sza"
               width={"100%"} height={"100%"} style={{ border: "none"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="info">

                  <div className="item">
                    < LocationOnOutlinedIcon className='icon'/>
                    <div className="infoContent">
                      <span className="title">Address</span>
                      <span className="line">784 Makhado Street</span>
                      <span className="line">Johannesburg Gauteng</span>
                      <span className="line">1800</span>
                    </div>
                  </div>

                  <div className="item">
                    < PhoneInTalkOutlinedIcon className='icon'/>
                    <div className="infoContent">
                      <span className="title">Phone</span>
                      <span className="line">(27) 015 998 2254</span>
                      <span className="line">(27) 021 998 2255</span>
                    </div>
                  </div>

                  <div className="item">
                    < MailOutlineOutlinedIcon className='icon'/>
                    <div className="infoContent">
                      <span className="title">E-mail</span>
                      <span className="line">Msc@info.co.za</span>
                      <span className="line">help@msc.co.za</span>
                    </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="core pScreen" id='core'>
        <h1 className="title">Drop Us a Line</h1>
        <p className="desc">Reach out to us from our contact form and we will get back to you shortly.</p>
        
        <form action="">
          <div className="inputs">
            <input type="text" required name='firstname' placeholder='First Name *'/>
            <input type="text" required name='lastname' placeholder='Last Name *'/>
            <input type="text" required name='email' placeholder='Email *'/>
            <input type="text" required name='subject' placeholder='Subject *'/>
          </div>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Message *'></textarea>
          <button type='submit'>Send message</button>
          <span className="extra">* These fields are required</span>
        </form>
      </div>
    </div>
  )
}

export default Contact