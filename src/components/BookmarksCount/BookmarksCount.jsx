import React from 'react';
import './BookmarksCount.css'
const Bookmarks = (props) => {
    return (
        <div className='bookmarks-container'>
            <h4>Bookmarked Blogs: {props.bookmarkcounter}</h4>
        </div>
    );
};

export default Bookmarks;