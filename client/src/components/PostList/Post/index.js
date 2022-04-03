import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './styles';
import { updatePost } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
const Post = ({ post }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const onLikeButton = React.useCallback(() => {
        dispatch(updatePost.updatePostRequest({...post, likeCount: post.likeCount + 1}))
    },[dispatch, post])
    return <Card>
        <CardHeader
            avatar={<Avatar>TD</Avatar>}
            title={post.author}
            subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
            action={
                <IconButton>
                    <MoreVertIcon/>
            </IconButton>
            }
        />
        <CardMedia image={post.attachment} title="Title"  className={classes.media}/>
        <CardContent>
            <Typography variant='h5' color="textPrimary">{post.title}</Typography>
            <Typography variant='body2' component="p" color="textSecondary">{post.content}</Typography>
        </CardContent>
        <CardActions>
            <IconButton onClick={onLikeButton}>
                <FavoriteIcon />
                <Typography component="span" color="textSecondary">{post.likeCount} likes</Typography>
            </IconButton>
        </CardActions>
  </Card>
}

export default Post;