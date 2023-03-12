import React from 'react';
import "./write.css";
import img6 from '../../Images/10.jfif';

export default function Write() {
    return (
        <div className='write'>
            <img src={img6} alt="" className='writeImg' />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=' fa fa-plus writeIcon'></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: "none" }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story....' type="text" className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}
