import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Blog = (props) => {
    const {blogTitle,blogCover}=props.blog;
    return (
        <div className='each-blog'>
            <img src={blogCover} alt="" />
            <div className='blog-infos'>
                <div className='blog-author'>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className='blog-read'>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <h3>{blogTitle}</h3>
            <p></p>
            <a href='#'>Mark as read</a>
            <FontAwesomeIcon className='icon' icon={faBookmark}></FontAwesomeIcon>
        </div> 
    );
};

export default Blog;