import React from 'react'
import "./sidebar.css";
import img3 from '../Images/me.jfif'

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={img3} alt="" className='aboutImg' />
        <p className='aboutP'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ducimus, a obcaecati commodi, ea quae veniam porro sapiente quos cupiditate sunt mollitia illo fugiat ipsam magnam rem quisquam at ab!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarList'>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-instagram"></i>
          <i className=" sidebarIcon fa-brands fa-github"></i>
          <i className=" sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>

    </div>
  )
}
