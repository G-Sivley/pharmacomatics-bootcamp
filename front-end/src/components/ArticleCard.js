import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ArticleCard = (props) => {
  return (
    <Link to={props.article.id + "/"} state={{ article: props.article }}>
      <Card className="mx-auto shadow" sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.article.img}
          title={props.article.img_title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.article.title}
          </Typography>
          <Typography gutterBottom variant="body2">
            Written by {props.article.author.user.first_name} {props.article.author.user.last_name} on {props.article.date_created}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.article.subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
