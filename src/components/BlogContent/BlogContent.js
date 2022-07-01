import React, { Component } from "react";
import { posts } from "../../shared/projectData";
import "./BlogContent.css";
import { BlogCard } from "./components/BlogCard";

export class BlogContent extends Component {
  state = {
    blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts
  }
  
  likePost = pos => {
    const temp = [...this.state.blogArr];
    temp[pos].liked = !temp[pos].liked

    this.setState({
      blogArr: temp
    })

    localStorage.setItem('blogPosts', JSON.stringify(temp))
  }

  render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard 
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
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
