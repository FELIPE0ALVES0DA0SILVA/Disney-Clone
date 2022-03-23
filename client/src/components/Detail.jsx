import React from 'react'
import styled from 'styled-components'


const Detail = () => {
  return (
    <Container>
      <Background>
      </Background>
      <ImageTitle>
        <img src="/media/images/viewers-starwars.png" alt="title" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/media/images/play-icon-black.png" alt="button black" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/media/images/play-icon-white.png" alt="button black" /><span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/media/images/group-icon.png" alt="button group" />
        </GroupWatchButton>

      </Controls>
      <SubTitle>
        2018 * 7m * Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;

`
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249,249,249);
  border:none;
  letter-spacing: 1.8px;
  cursor:pointer;

  &:hover{
    background: rgb(198,198,198);
  }
`
const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color: rgb(249,249,249);
  text-transform: uppercase;
`
const AddButton = styled.button`
  margin-right: 16px;
  color:white;
  width: 44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;

  span{
    font-size:30px;
  }
`
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0,0,0);
`
const SubTitle = styled.div`
  color: rgba(249,249,249,0.8);
  margin: 15px 0px 10px 10px;
  font-size: 15px;

`
const Description = styled.div`
  line-height: 1.7;
  max-width: 50%;
  font-size: 20px;
  margin-top:16px;
  color:rgb(249,249,249);
`