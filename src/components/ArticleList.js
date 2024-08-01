import React from "react";
import Article from "./Article";

export default function ArticleList({ posts }) {
  const dis = posts.map((post) => (
    <Article title={posts.title} date={posts.date} preview={posts.preview} />
  ));
  return <main>{dis}</main>;
}
