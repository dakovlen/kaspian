import React from "react";
import { posts } from "../../shared/projectData";
import "./BlogContent.css";
import { BlogCard } from "./components/BlogCard";

const blogPosts = posts.map((item) => {
  return (
    <BlogCard 
      key={item.id}
      title={item.title}
      description={item.description}
    />
  );
});

export const BlogContent = () => {
  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        {blogPosts}
      </div>
    </>
  );
};
