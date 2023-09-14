import Blog from '../Blog/Blog';
import BookmarkBlog from '../BookmarkBlog/BookmarkBlog';
import Bookmarks from '../BookmarksCount/BookmarksCount';
import Read from '../Read/Read';
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
    const [bookmarkcounter,setBookmarkcounter]=useState(0);
    const [bookmarked,setBookmarked]=useState([]);
    const handleBookmark=(blogsTitle)=>{
      const newCount=bookmarkcounter+1;
      setBookmarkcounter(newCount);
      console.log(blogsTitle);
      const newBook=[...bookmarked,blogsTitle];
      setBookmarked(newBook);
      console.log(bookmarked);
    }
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
              handleBookmark={handleBookmark}
            ></Blog>
          ))}
        </div>
        <div>
          <div className="read-container">
            <Read counter={counter}></Read>
          </div>
          <div>
            <Bookmarks bookmarkcounter={bookmarkcounter}></Bookmarks>
            <div>
              <h2>bookmarks: </h2>
              <div>
                
                  <BookmarkBlog bookmarked={bookmarked}>
                    <div></div>
                  </BookmarkBlog>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;