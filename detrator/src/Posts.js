import axios from "axios";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    return axios.get("https://dummyjson.com/posts");
  };

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data.posts);
        console.log(res.data.posts);
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
        justifyContent:'center',
        gap: "20px",
        margin: "auto",
      }}
    >
      {data.map((el) => (
        <Box
          sx={{
            border: "1px solid",
            borderRadius: "10px",
            padding:"5px",
            flex:'1 1 480px'
          }}
          key={el.id}
        >
          <h4>Title: {el.title}</h4>
          <span>Body: {el.body}</span>
          <p>Reaction: {el.reactions}</p>
          <p>UserId: {el.userId}</p>
          {el.tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Posts;
