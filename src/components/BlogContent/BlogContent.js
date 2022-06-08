import React, { Component } from "react";
import { posts } from "../../shared/projectData";
import "./BlogContent.css";
import { BlogCard } from "./components/BlogCard";

export class BlogContent extends Component {
  
  blogPosts = posts.map((item) => {
    return (
      <BlogCard 
        key={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });


  render() {
    return (
      <>
        <h1>Simple Blog</h1>
        <div className="posts">
          {this.blogPosts}
        </div>
      </>
    );
  }
};
