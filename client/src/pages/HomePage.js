import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/Header'
import PostList from './../components/PostList';
const HomePage = () => {
  return <Container maxWidth="lg" className="">
    <Header />
    <PostList/>
  </Container>
}

export default HomePage;