import React from 'react';

const BookmarkBlog = (props) => {
    const title=props.bookmarked.pop();
    console.log(title);
    console.log(props.bookmarked);
    return (
      <div>
        {
          <div>
            <h4>
              {title} <br />
            </h4>
          </div>
        }
      </div>
    );
};

export default BookmarkBlog;