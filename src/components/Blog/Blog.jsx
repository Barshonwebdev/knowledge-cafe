import React from 'react';
import './Blog.css'
const Blog = (props) => {
    const {blogTitle}=props.blog;
    return (
        <div>
            <h3>{blogTitle}</h3>
        </div>
    );
};

export default Blog;