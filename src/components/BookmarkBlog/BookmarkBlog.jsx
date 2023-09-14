import React from 'react';

const BookmarkBlog = (props) => {
    console.log(props.bookmarked);
    const blogs=props.bookmarked;
    return (
      <div>
        {
          <div>
            <h4>
              {
                blogs.map(b=>(<h4>{b}</h4>))
              }
            </h4>
          </div>
        }
      </div>
    );
};

export default BookmarkBlog;