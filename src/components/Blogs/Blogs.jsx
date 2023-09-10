import './Blogs.css'
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs,newBlogs]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='blogs-container'>
            
        </div>
    );
};

export default Blogs;