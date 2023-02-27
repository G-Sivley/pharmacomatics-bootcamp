import React from "react";

import { useLocation } from "react-router-dom";

const Article = () => {
  // Receive the article from the article card as article payload
  // Then we can use the article to stucture the actual article page
  const location = useLocation();
  const { article } = location.state;

  return (
    <div>
      <img src={article.img} />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
