import React from "react";
import { posts } from "../../shared/projectData";
import { getAmountPosts } from "../../shared/projectLogic";
import "./blog-content.css";

const blogPosts = posts.map((item) => {
  return (
    <div key={item.id} className="post">
      <h2>{item.title}</h2>
      <p>
        {item.description}
      </p>
    </div>
  );
});

export const BlogContent = () => {
  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        {blogPosts}
      </div>

      <div className="count">
        <button onClick={() => {getAmountPosts(posts)}}>Get amount of posts</button>
      </div>
    </>
  );
};
