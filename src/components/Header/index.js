import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon, FaSearch} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import ThemeSearchContext from '../../context/ThemeSearchContext'

import {
  MobileHeaderContainer,
  LargeScreenHeaderContainer,
  LogoAndHeadContainer,
  MobileLogo,
  NavLinkItem,
  Heading,
  ThemeAndHamburgerContainer,
  ThemeAndMenuContainer,
  MobileMenuContainer,
  MenuContainer,
  Menu,
  MenuBtn,
  LogoutBtn,
  SearchBarContainer,
  SearchBar,
  Input,
} from './styledComponents'
import './index.css'

const btnList = [
  {id: 'HOME', btnName: 'Home', pathLink: ''},
  {id: 'SEARCH', btnName: 'Search', pathLink: ''},
  {id: 'PROFILE', btnName: 'Profile', pathLink: 'profile'},
]

const Header = props => (
  <ThemeSearchContext.Consumer>
    {value => {
      const {
        isDarkTheme,
        toggleTheme,
        openMenu,
        onClickHamburgerButton,
        closeMenuButton,
        showSearchBox,
        activeBtn,
        onChangeActiveBtn,
        searchBox,
        searchInput,
        onChangeSearchInput,
        onClickSearchBtn,
        onClickHomeLogo,
      } = value
      const onChangeSearchValue = event => {
        onChangeSearchInput(event.target.value)
      }
      const onClickSearchBtnIcon = () => {
        const {history} = props
        history.replace('/')
        onClickSearchBtn()
      }
      const {match} = props
      console.log(match)
      const {path} = match
      const activePage = path.slice(1)
      const activePageElement = btnList.filter(
        each => each.pathLink === activePage,
      )
      if (activePageElement.length > 0) {
        const activePageId = activePageElement[0].id
        if (activeBtn !== activePageId) {
          onChangeActiveBtn(activePageId)
        }
      }

      const onClickHam = () => {
        onClickHamburgerButton()
      }

      const onClickCloseBtn = () => {
        closeMenuButton()
      }
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickThemeBtn = () => {
        toggleTheme()
      }
      const HamburgerClass = isDarkTheme ? 'light' : 'dark'
      const closeBtnClass = isDarkTheme ? 'light' : 'dark'
      const onClickLogo = () => {
        onChangeActiveBtn('HOME')
      }
      const MenuButtonItem = details => {
        const {item, isActive} = details
        const {btnName, id, pathLink} = item
        const onClickMenuBtn = () => {
          onChangeActiveBtn(id)
        }
        const onClickMenuSearchBtn = () => {
          const {history} = props
          history.replace('/')
          searchBox()
        }

        if (id === 'SEARCH') {
          return (
            <li className="search-menu-btn">
              <MenuBtn
                isActive={isActive}
                isDarkTheme={isDarkTheme}
                onClick={onClickMenuSearchBtn}
              >
                {btnName}
              </MenuBtn>
            </li>
          )
        }
        return (
          <li className="btn">
            <NavLinkItem to={`/${pathLink}`}>
              <MenuBtn
                isActive={isActive}
                isDarkTheme={isDarkTheme}
                onClick={onClickMenuBtn}
              >
                {btnName}
              </MenuBtn>
            </NavLinkItem>
          </li>
        )
      }
      return (
        <>
          <MobileHeaderContainer isDarkTheme={isDarkTheme}>
            <NavLinkItem
              isDarkTheme={isDarkTheme}
              to="/"
              onClick={onClickLogo}
              className="link-item"
            >
              <LogoAndHeadContainer onClick={onClickHomeLogo}>
                <MobileLogo
                  src="https://res.cloudinary.com/dieyyopcy/image/upload/v1675164683/Standard_Collection_8_jklojp.png"
                  alt="website logo"
                />
                <Heading>Insta Share</Heading>
              </LogoAndHeadContainer>
            </NavLinkItem>
            <ThemeAndHamburgerContainer>
              {isDarkTheme ? (
                <BiSun className="sun" onClick={onClickThemeBtn} />
              ) : (
                <FaMoon onClick={onClickThemeBtn} />
              )}
              <GiHamburgerMenu
                className={HamburgerClass}
                onClick={onClickHam}
              />
            </ThemeAndHamburgerContainer>
          </MobileHeaderContainer>
          {openMenu ? (
            <MobileMenuContainer>
              <MenuContainer isDarkTheme={isDarkTheme}>
                <Menu isDarkTheme={isDarkTheme}>
                  {btnList.map(each => (
                    <MenuButtonItem
                      key={each.id}
                      item={each}
                      isActive={each.id === activeBtn}
                    />
                  ))}
                  <LogoutBtn type="button" onClick={onClickLogout}>
                    Logout
                  </LogoutBtn>
                  <AiFillCloseCircle
                    className={`${closeBtnClass} close-btn`}
                    onClick={onClickCloseBtn}
                  />
                </Menu>
              </MenuContainer>
            </MobileMenuContainer>
          ) : null}
          {showSearchBox ? (
            <SearchBarContainer isDarkTheme={isDarkTheme}>
              <SearchBar>
                <Input
                  type="search"
                  value={searchInput}
                  onChange={onChangeSearchValue}
                  placeholder="Search by Caption"
                />
                <FaSearch
                  className="search-icon"
                  onClick={onClickSearchBtnIcon}
                />
              </SearchBar>
            </SearchBarContainer>
          ) : null}
          <LargeScreenHeaderContainer isDarkTheme={isDarkTheme}>
            <NavLinkItem isDarkTheme={isDarkTheme} to="/" className="link-item">
              <LogoAndHeadContainer onClick={onClickHomeLogo}>
                <MobileLogo
                  src="https://res.cloudinary.com/dieyyopcy/image/upload/v1675164683/Standard_Collection_8_jklojp.png"
                  alt="website logo"
                />
                <Heading>Insta Share</Heading>
              </LogoAndHeadContainer>
            </NavLinkItem>
            <ThemeAndMenuContainer>
              <SearchBarContainer>
                <SearchBar>
                  <Input
                    type="search"
                    value={searchInput}
                    onChange={onChangeSearchValue}
                    placeholder="Search by Caption"
                  />
                  <FaSearch
                    className="search-icon"
                    onClick={onClickSearchBtnIcon}
                  />
                </SearchBar>
              </SearchBarContainer>
              {isDarkTheme ? (
                <BiSun className="sun" onClick={onClickThemeBtn} />
              ) : (
                <FaMoon onClick={onClickThemeBtn} />
              )}
              <MenuContainer isDarkTheme={isDarkTheme}>
                <Menu isDarkTheme={isDarkTheme}>
                  {btnList.map(each => (
                    <MenuButtonItem
                      key={each.id}
                      item={each}
                      isActive={each.id === activeBtn}
                    />
                  ))}
                  <LogoutBtn type="button" onClick={onClickLogout}>
                    Logout
                  </LogoutBtn>
                </Menu>
              </MenuContainer>
            </ThemeAndMenuContainer>
          </LargeScreenHeaderContainer>
        </>
      )
    }}
  </ThemeSearchContext.Consumer>
)

export default withRouter(Header)
