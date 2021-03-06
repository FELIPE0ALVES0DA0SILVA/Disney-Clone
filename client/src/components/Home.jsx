import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import Movie from './Movie'


import Slider from "./Slider";

const Home = () => {
  return (
    <Container>
      <Slider />
      <Category/>
      <Movie/>
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  padding-top: 20px;

  &:before {
    background: url('/media/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
  }

`