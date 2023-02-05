import React from "react";

import ArticleCard from "../components/ArticleCard";

const articles = [
  {
    id: 1,
    title: "Lizards suck",
    subtitle:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img_location:
      "https://us.123rf.com/450wm/buhta/buhta2002/buhta200200049/buhta200200049.jpg?ver=6",
    img_title: "green iguana",
    date_created: "December 24th, 2022",
    author: "Grant Sivley",
    content: "I love lizards",
    likes: 4,
  },
  {
    id: 2,
    title: "Lizards are awesome",
    subtitle:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img_location:
      "https://us.123rf.com/450wm/buhta/buhta2002/buhta200200049/buhta200200049.jpg?ver=6",
    img_title: "green iguana",
    date_created: "December 24th, 2022",
    author: "Kelly Sivley",
    content: "I love lizards",
    likes: 4,
  },
];

const Articles = () => {
  return (
    <div className="container mt-10 max-w-2xl">
      <h1 className="text-5xl font-bold text-accent">
        Pharmacomatics Articles
      </h1>
      <div className="grid grid-cols-1 mt-8 gap-4 md:grid-cols-2">
        {/*  Map through articles and create an article for each one */}
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
