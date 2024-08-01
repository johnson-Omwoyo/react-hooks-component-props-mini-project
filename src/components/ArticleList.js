import React from "react";
import Article from "./Article";

export default function ArticleList({ posts }) {
  const dis = posts.map((post) => (
    <Article title={post.title} date={post.date} preview={post.preview} />
  ));
  return <main>{dis}</main>;
}
