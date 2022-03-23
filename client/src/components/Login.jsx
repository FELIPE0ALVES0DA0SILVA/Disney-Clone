import React from 'react'
import styled from 'styled-components'


const Login = () => {
  return (
    <Container>
      <CallToAction>
        <CallToActionImageOne src='/media/images/cta-logo-one.svg'/>
        <SignUp>
          GET ALL THERE
        </SignUp>
        <Description>
          The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate 
        </Description>
        <CallToActionImageTwo src='/media/images/cta-logo-two.png'/>
      </CallToAction>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background-image: url('/media/images/login-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index:-1;
  }
`
const CallToAction = styled.div`
  max-width: 750px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`
const CallToActionImageOne = styled.img`
  padding:10px
`
const CallToActionImageTwo = styled.img`
`
const SignUp = styled.a`
  width: 100%;
  margin: 5px 0px 0px;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  text-align: center;
  sont-size: 18px;
  letter-spacing: 1.5px;
  cursor: pointer;

  transition: all 250ms;

  &:hover{
    background: #0483ee;
  }
`
const Description = styled.p`
  font-weight: 200;
  font-size: 14px;
  opacity: 0.75;
  letter-spacing: 1.7px;
`