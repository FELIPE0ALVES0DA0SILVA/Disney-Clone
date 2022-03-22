import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo src='/media/images/logo.svg'></Logo>
      <NavMenu>
        <a href="#">
          <img src="/media/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="#">
          <img src="/media/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="/media/images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="/media/images/original-icon.svg" alt="original" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="/media/images/movie-icon.svg" alt="movie" />
          <span>MOVIES</span>
        </a>
        <a href="#">
          <img src="/media/images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </a>
        <UserImg />
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items:center;
  padding: 0 36px;

`
const Logo = styled.img`
  width: 80px;

`
const NavMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  margin-left: 25px;

  a{
    display:flex;
    align-items: center;
    padding: 0 13px;
    cursor:pointer;
    img{
      width:20px;
    }
    span{
      position: relative;
      text-decoration: none; 
      color:white;
      font-size: 13px;
      padding: 0px 4px;

      &:after {
        position: absolute;
        content: '';
        height: 2px;
        background: white;
        left: 0;
        right: 100%;
        opacity: 0;
        bottom: -9px;

        transition: 0.4s ease right;
      }
    }
    &:hover {
      span:after {
        right:-2px;
        opacity: 1;
      }
    }
  }
`
const UserImg = styled.img` 
  position: absolute;
  right: 0;
  width: 48px;
  height: 48px;
  background-color: grey;
  border-radius: 50%;
  cursor: pointer;
`