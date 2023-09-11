import Blog from '../Blog/Blog';
import ReadCounter from '../ReadCounter/ReadCounter';
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
    const handleCount = () => {
      const result = counter;
      return result;
    };
    return (
      <div className='container'>
        <div className="blogs-container">
          {blogs.map((blog) => (
            <Blog handleCount={handleCount} key={blog.id} blog={blog}></Blog>
          ))}
        </div>
        <div>
          <ReadCounter handleCount={handleCount}></ReadCounter>
        </div>
      </div>
    );
};

export default Blogs;