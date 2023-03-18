import axios from "axios";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [post, setPost] = useState([]);

  const fetchData = () => {
    return axios.get("https://dummyjson.com/posts");
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setPost(res.data.posts);
        // console.log(res.data.posts);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: "90vw",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        margin: "auto",
      }}
    >
      {post.map((el) => (
        <Box
          sx={{
            border: "1px solid",
            borderRadius: "10px",
            padding: "8px",
            flex: "1 1 480px",
          }}
          key={el.id}
        >
          <h4>Title: {el.title}</h4>
          <span>Body: {el.body}</span>
          <p>Reaction: {el.reactions}</p>
          <p>UserId: {el.userId}</p>
          {el.tags.map((eltag) => (
            <p>{eltag}</p>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Posts;
