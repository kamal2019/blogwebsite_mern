import React from 'react';
import Post from './Post/Post';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import useStyless from './styles';
import { useSelector } from 'react-redux';


const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    // const classes = useStyless();

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
          )
    )}
export default Posts;