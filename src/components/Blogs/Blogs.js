import React from "react";
import "./Blog.css";
const Blogs = () => {
  return (
    <div className="blog">
      <div className="blog-content">
        <div>
          <h1>What is Context Api?</h1>
          <p>
            We pass information between components through props.But in time of
            passing data to a child we need to go through all the components in
            react tree.This causes props drilling.Context api is a component
            structure where we can avoid props drilling and pass through data
            any components of the react tree.
          </p>
        </div>
        <div>
          <h1>What is semantic tag?</h1>
          <p>
            Semantic tag is a tag who conatin a meaning rather than mere
            presentation.Browser can undersdant its meaning and presentation.We
            use semantic tags to make a website usnderstable.Semantic tags
            express the website content properly so that we can understand what
            is written in this content.Example:Header tags Header tags{" "}
            <code>{`<h1>`}</code> through <code>{`<h6>`}</code>,
            <code>{`<article>`}</code>,<code>{`<audio>`}</code>etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
