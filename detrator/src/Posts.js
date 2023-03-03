import { Box } from "@mui/system";
import axios from "axios";
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
      .catch((err) => {
        console.log(err);
      });
  }, []);

   return (
       <Box sx={{
              display:"flex",
              flexWrap:"wrap",              
              alignItems: "center",
              borderRadius: "12px",
              boxShadow: 1,
              fontWeight: "bold",
              gap:"25px",
            }}>
      

      {data.map((elem) => (
          <Box sx={{
              border: "1px solid",
              width:"32%",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",             
              overflow: "hidden",
              borderRadius: "12px",              
              fontWeight: "bold",
              height:"500px"
            }}
            key={elem.id}
          >
            <h3>Title: {elem.title}</h3>
            <span>Body: {elem.body}</span>
            <p>Reaction: {elem.reactions}</p>
            <p>UserId: {elem.userId}</p>
             {elem.tags.map((tag) => (
             <p>Tags:{tag}</p>  
            ))} </Box>
          
        ))}
    </Box>
   
  );
};

export default Posts;
