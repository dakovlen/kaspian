import React, { Component } from "react";
import { posts } from "../../shared/projectData";
import "./BlogContent.css";
import { BlogCard } from "./components/BlogCard";

export class BlogContent extends Component {
  state = {
    blogArr: posts
  }
  
  likePost = pos => {
    const temp =this.state.blogArr;
    temp[pos].likeCount++

    this.setState({
      blogArr: temp
    })
  }

  render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard 
          key={item.id}
          title={item.title}
          description={item.description}
          likeCount={item.likeCount}
          likePost={() => this.likePost(pos)}
        />
      );
    });
    return (
      <>
        <h1>Simple Blog</h1>
        <div className="posts">
          {blogPosts}
        </div>
      </>
    );
  }
};
