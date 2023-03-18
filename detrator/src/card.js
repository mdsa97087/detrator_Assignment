import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function BasicCard() {
  const [post, setPost] = React.useState([]);

  const fetchData = () => {
    return axios.get("https://dummyjson.com/posts");
  };

  React.useEffect(() => {
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
        <Card sx={{ maxWidth: 400, padding: "8px", flex: "1 1 480px" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }}>Title: {el.title}</Typography>

            <Typography sx={{ fontSize: 14, mb: 1.5 }} color="text.secondary">
              Body: {el.body}
            </Typography>
            <Typography variant="body2">Reaction: {el.reactions}</Typography>
            <Typography variant="body2">UserId: {el.userId}</Typography>

            {el.tags.map((eltag) => (
              <Typography variant="body2">{eltag}</Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
