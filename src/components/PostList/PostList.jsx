import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";
import {useDispatch} from "react-redux";
import {deletePost} from "../../store/posts/actions";

export const PostList = ({posts}) => {
    const dispatch = useDispatch()
    const handleRemovePost = (id) => {
        dispatch(deletePost(id))
    }

  return (
      <>
          {posts.map((post) => {
              return (
                  <Card sx={{maxWidth: 450, minHeight: 450}} key={post.id}>
                      <CardMedia
                          component="img"
                          height="240"
                          image={post.image}
                          alt={post.image}
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                              {post.title}
                          </Typography>
                          <Typography gutterBottom variant="p" component="div">
                              {post.text}
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small">Learn More</Button>
                          <Button size="small" onClick={()=>handleRemovePost(post.id)}>Delete</Button>
                      </CardActions>
                  </Card>
              )
          })}
      </>
  )
}