import React from 'react';

const BookmarkBlog = (props) => {
    const title=props.bookmarked.pop();
    console.log(title);
    return (
      <div>
        {
          <div>
            <h4>
              {title}
            </h4>
          </div>
        }
      </div>
    );
};

export default BookmarkBlog;