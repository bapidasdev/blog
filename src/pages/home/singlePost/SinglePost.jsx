import React from 'react'
import "./singlePost.css";
import img5 from '../../../Images/10.jfif';



export default function SinglePost() {
    return (
        <div className='SinglePost'>
            <div className="singlePostWrapper">
                <img src={img5} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className=" SinglePostIcon fa fa-edit"></i>
                        <i className=' SinglePostIcon fa fa-trash-alt'></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>
                        Author: <b>Bapi !</b>
                    </span>
                    <span className="singlrPostDate">1 hour ago</span>
                </div>
                <p className='singlrPostDese'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corporis illum, ducimus, veniam vitae corrupti eligendi dignissimos optio iste numquam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum commodi dolorem cupiditate rem natus voluptatibus praesentium, dolor laudantium at nesciunt doloribus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quo quam consectetur quod distinctio officiis architecto molestias expedita accusamus debitis. Accusantium exercitationem nostrum nulla quasi voluptatibus nesciunt corrupti. Natus, perspiciatis? accusantium, numquam, autem nisi. Repellendus natus totam distinctio rerum? nesciunt placeat iure soluta ex perferendis, saepe atque ad. Dolore! Vitae laboriosam error quis, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sunt, ab hic quis nam enim doloremque dolores. Error, et, deleniti unde voluptate, mollitia dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id nobis perferendis impedit, rem placeat debitis deserunt nesciunt ullam molestiae dolorem veritatis adipisci magnam sunt, deleniti commodi! Magni, est placeat! nobis aperiam aliquam porro recusandae odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam laborum voluptas eius quaerat rem voluptates eaque sit sint? Doloremque omnis animi quam minima sed asperiores sit quod. Assumenda, a? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis repellat enim voluptatum reprehenderit? Qui illo totam vero quo eligendi, reiciendis, laudantium eaque corporis magnam animi commodi aperiam. Modi, accusamus. nobis enim maiores cumque tempora. Nostrum, veritatis saepe placeat consequuntur commodi accusamus eveniet consectetur quam. Natus, enim perspiciatis?</p>
            </div>
        </div>
    )
}
