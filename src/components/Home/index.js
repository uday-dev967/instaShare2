import Header from '../Header'
import InstaStories from '../InstaStories'
import InstaPosts from '../InstaPosts'
import ThemeSearchContext from '../../context/ThemeSearchContext'
import {HomeContainer, InstaPostsContentContainer} from './styledComponents'

const Home = () => (
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
        changeSearchValue,
      } = value

      return (
        <>
          <Header />
          <HomeContainer isDarkTheme={isDarkTheme}>
            <InstaStories isDarkTheme={isDarkTheme} />
            <InstaPostsContentContainer>
              <InstaPosts />
            </InstaPostsContentContainer>
          </HomeContainer>
        </>
      )
    }}
  </ThemeSearchContext.Consumer>
)

export default Home
