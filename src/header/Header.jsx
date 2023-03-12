import "./header.css";
import React from 'react'
import img2 from '../Images/20.avif'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm">react & node</span>
        <span className="headerTitlesLg">Blog</span>
      </div>
      <img src={img2} alt="" className="headerImg" />
    </div>
  )
}
