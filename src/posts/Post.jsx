import React from 'react'
import "./post.css";
import img4 from '../Images/11.jfif'

export default function Post() {
  return (
    <div className='post'>
      <img src={img4} alt="" className='postImg' />
      <div className="postInfo">
        <div className="postCats">
          <span className='postCat'>Life</span>
          <span className='postCat'>Music</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non pariatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi labore, possimus natus quas blanditiis architecto error ullam et Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, temporibus soluta repellat numquam aspernatur vel possimus, accusamus veniam similique commodi, asperiores molestiae fugit est porro laudantium blanditiis officiis sed nam. qui, reprehenderit esse, quis quidem sunt dolorum vero! Explicabo, cumque ea. dignissimos quibusdam inventore numquam, exercitationem, ullam dolores doloremque quidem odit explicabo deleniti cupiditate facilis, unde error? Natus adipisci omnis harum!</p>
    </div>
  )
}
