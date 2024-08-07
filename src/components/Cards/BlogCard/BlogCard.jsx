import React from "react";
import "./blogCard.css";
import { Link } from "react-router-dom";
import { shortenDescription } from "../../../utils/ShortenDesc";

const BlogCard = ({ blog }) => {
  return (
    <div className="blogCard">
      <img src={blog.image} alt="" />
      <div className="blogCardContent">
        <div className="blogCardMetaData">
          <Link to="">{blog.category}</Link>
          <p>|</p>
          <p>{blog.publishDate}</p>
        </div>
        <div className="blogCardText">
          <Link>{blog.title}</Link>
          <p>{shortenDescription(blog.subtitle, 20)}</p>
        </div>
        <Link>View More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
