import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import ThemeSearchContext from './context/ThemeSearchContext'

import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    isDarkTheme: false,
    searchInput: '',
    openMenu: false,
    searchPostView: false,
    showSearchBox: false,
    activeBtn: 'HOME',
    isSearchBtnClicked: false,
  }

  closeMenuButton = () => {
    this.setState({openMenu: false})
  }

  onChangeSearchInput = input => {
    this.setState({searchInput: input})
  }

  setSearchInput = () => {
    this.setState(prev => ({searchPostView: !prev.searchPostView}))
  }

  onClickSearchBtn = () => {
    const {searchInput} = this.state
    if (searchInput !== '') {
      this.setState({isSearchBtnClicked: true})
    } else {
      this.setState({isSearchBtnClicked: false})
    }
  }

  onClickHamburgerButton = () => {
    this.setState(prev => ({openMenu: !prev.openMenu}))
  }

  searchBox = () => {
    this.setState(prev => ({
      showSearchBox: !prev.showSearchBox,
      openMenu: false,
    }))
  }

  onChangeActiveBtn = id => {
    this.setState({
      activeBtn: id,
      openMenu: false,
    })
  }

  onClickHomeLogo = () => {
    this.setState({
      isDarkTheme: false,
      searchInput: '',
      openMenu: false,
      searchPostView: false,
      showSearchBox: false,
      activeBtn: 'HOME',
      isSearchBtnClicked: false,
    })
  }

  toggleTheme = () => {
    this.setState(preState => ({isDarkTheme: !preState.isDarkTheme}))
  }

  render() {
    const {
      isDarkTheme,
      openMenu,
      activeBtn,
      searchInput,
      showSearchBox,
      isSearchBtnClicked,
    } = this.state
    return (
      <>
        <ThemeSearchContext.Provider
          value={{
            isDarkTheme,
            toggleTheme: this.toggleTheme,
            onClickHamburgerButton: this.onClickHamburgerButton,
            closeMenuButton: this.closeMenuButton,
            openMenu,
            activeBtn,
            onChangeActiveBtn: this.onChangeActiveBtn,
            searchBox: this.searchBox,
            showSearchBox,
            searchInput,
            onClickSearchBtn: this.onClickSearchBtn,
            isSearchBtnClicked,
            onChangeSearchInput: this.onChangeSearchInput,
            onClickHomeLogo: this.onClickHomeLogo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute
              exact
              path="/users/:userId"
              component={UserProfile}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeSearchContext.Provider>
      </>
    )
  }
}

export default App
