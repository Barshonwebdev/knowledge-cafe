import Blog from '../Blog/Blog';
import './Blogs.css'
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    console.log(blogs)
    const [counter, setCounter] = useState(0);
    const handleBlogRead=(time)=>{
      console.log(time);
      const newRead=time+counter;
      setCounter(newRead);
    }
    return (
      <div className="container">
        <div className="blogs-container">
          {blogs.map((blog) => (
            <Blog
              handleBlogRead={handleBlogRead}
              key={blog.id}
              blog={blog}
            ></Blog>
          ))}
        </div>
        <div>
          <div className="read-container">
            <h4>Spent on reading: {counter} mins </h4>
          </div>
        </div>
      </div>
    );
};

export default Blogs;