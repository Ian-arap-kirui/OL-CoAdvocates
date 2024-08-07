import React from "react";
import separator1 from "../../assets/separator1.svg";
import "./recentBlogs.css";
import BlogCard from "../../components/Cards/BlogCard/BlogCard";
const RecentBlogs = ({ blogs }) => {
  return (
    <div className="recentBlogs">
      <div className="recentBlogsWrapper">
        <div className="recentBlogsHeader">
          <h2>Recent Blogs</h2>
          <img src={separator1} alt="" />
        </div>
        <div className="recentBlogsContent">
          {blogs.map((item) => {
            return <BlogCard blog={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
