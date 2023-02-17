/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MobileHeaderContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LargeScreenHeaderContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  width: 100%;
  padding: 10px 50px 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoAndHeadContainer = styled.div`
  display: flex;
`

export const MobileLogo = styled.img`
  width: 70px;
  height: 30px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
`
export const ThemeAndHamburgerContainer = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
  margin-left: 20px;
`

export const ThemeAndMenuContainer = styled.div`
  display: flex;
  width: 40%;
  min-width: 520px;
  justify-content: space-between;
  margin-left: 20px;
  align-items: center;
`

export const NavLinkItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const MenuContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin: 0px;
    padding: 0px;
  }
`
export const MobileMenuContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Menu = styled.ul`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  justify-content: space-between;
  width: 300px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  padding: 0px;
  list-style-type: none;
`

export const MenuBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${props =>
    props.isDarkTheme
      ? props.isActive
        ? '#0a7efa'
        : '#ffffff'
      : props.isActive
      ? '#0a7efa'
      : '#0f0f0f'};
  font-weight: 600;
`
export const LogoutBtn = styled.button`
  border: none;
  background-color: #0a7efa;
  color: #ffffff;
  padding: 5px;
  border-radius: 3px;
  font-weight: 600;
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f9f9f9f9')};
  padding-top: 10px;
  @media screen and (min-width: 576px) {
    padding-top: 0px;
  }
`

export const SearchBar = styled.div`
  display: flex;
  border-style: solid;
  border-width: 2px;
  border-color: #dbdbdb;
  padding: 0px;
`
export const Input = styled.input`
  border: none;
`
