import {useCallback} from 'react';
import { Container, Fab } from '@material-ui/core';
import Header from '../components/Header'
import PostList from './../components/PostList';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';
const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch])
  return <Container maxWidth="lg" className="">
    <Header />
    <PostList />
    <CreatePostModal/>
    <Fab color="primary" className={classes.fab} onClick={openCreatePostModal}>
      <AddIcon/>
    </Fab>
  </Container>
}

export default HomePage;