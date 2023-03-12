import React from 'react';
import SideBar from '../../sidebar/SideBar';
import "./settings.css";
import img7 from '../../Images/me.jfif';

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete  Account</span>
        </div>
            <form  className="settingsForm">
              <label> Profile Picture</label>
              <div className="settingsPP">
                <img src={img7} alt="" />
                <label htmlFor="fileInput"><i className='fa fa-user-circle settingPPIcon'></i> </label>
                <input type="file" id='finleInput' style={{display:"none"}} />
              </div>
              <label >Username</label>
              <input type="text" placeholder='Bapi' />
              <label >Email</label>
              <input type="email" placeholder='Bapi@gmailcom' />
              <label >Password</label>
              <input type="password"  />
              <button className='settingsSubmit'>Update</button>
            </form>
      </div>
      <SideBar/>
    </div>
  )
}
