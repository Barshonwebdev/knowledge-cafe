import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Blog = (props) => {
  const { blogTitle, blogCover, authorCover, authorName, published_in,reading_time,hashtags } =
    props.blog;
    const readtime=props.blog.reading_time;
    const handleBlogRead=props.handleBlogRead;
    const handleBookmark=props.handleBookmark;
  return (
    <div className="each-blog">
      <img src={blogCover} alt="" />
      <div className="blog-infos">
        <div className="blog-author">
          <div className="author-cover">
            <img src={authorCover} alt="" />
          </div>
          <div>
            <h4>{authorName}</h4>
            <small className="gray-text">{published_in}</small>
          </div>
        </div>
        <div className="blog-read">
          <div>
            <small className="gray-text">{reading_time}min</small>
          </div>
          <div>
            <button onClick={() => handleBookmark(blogTitle)}>
              <FontAwesomeIcon className="icon" icon={faBookmark}>
              </FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
      <h3 className="title">{blogTitle}</h3>
      <p className="gray-text">{hashtags}</p>
      <a>
        <button
          onClick={() => handleBlogRead(readtime)}
          className="read-button"
        >
          Mark as read
        </button>
      </a>
      <p className="gray-text">
        <hr />
      </p>
    </div>
  );
};

export default Blog;
