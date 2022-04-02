import {useEffect} from 'react'
import { Grid } from '@material-ui/core';
import Post from './Post/index';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';
const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$)
    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);
    // console.log(posts);
    return <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} sm={6}>
            {
                posts.map(post => <Post key={post._id} post={post} />)
            }
      </Grid>
  </Grid>
}

export default PostList;