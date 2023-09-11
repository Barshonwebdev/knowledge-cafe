import React from 'react';
import './Bookmarks.css'
const Bookmarks = (props) => {
    return (
        <div className='bookmarks-container'>
            <h4>Bookmarked blogs: {props.bookmarkcounter}</h4>
        </div>
    );
};

export default Bookmarks;