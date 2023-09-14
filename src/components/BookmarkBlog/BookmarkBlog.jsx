import React from 'react';
import './BookmarkBlog.css'
const BookmarkBlog = (props) => {
    console.log(props.bookmarked);
    const blogs=props.bookmarked;
    return (
      <div>
        {
          <div>
            <h4>
              {blogs.map((b) => (
                <p className="each-bookmark">{b}</p>
              ))}
            </h4>
          </div>
        }
      </div>
    );
};

export default BookmarkBlog;