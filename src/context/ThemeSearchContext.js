import React from 'react'

const ThemeSearchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  searchInput: '',
  openMenu: false,
  searchPostView: false,
  showSearchBox: false,
  button: false,
  activeBtn: 'HOME',
  onChangeLikeIcon: () => {},
  onChangeUnLikeIcon: () => {},
  changeSearchValue: () => {},
  setSearchInput: () => {},
  onClickHamburgerButton: () => {},
  searchBox: () => {},
  closeMenuButton: () => {},
  onChangeActiveBtn: () => {},
})

export default ThemeSearchContext
