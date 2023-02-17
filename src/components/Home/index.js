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
        searchInput,
        onClickSearchBtn,
        isSearchBtnClicked,
      } = value

      return (
        <>
          <Header />
          <HomeContainer isDarkTheme={isDarkTheme}>
            <InstaStories isDarkTheme={isDarkTheme} />
            <InstaPostsContentContainer>
              <InstaPosts
                searchInput={searchInput}
                isDarkTheme={isDarkTheme}
                onClickSearchBtn={onClickSearchBtn}
                isSearchBtnClicked={isSearchBtnClicked}
              />
            </InstaPostsContentContainer>
          </HomeContainer>
        </>
      )
    }}
  </ThemeSearchContext.Consumer>
)

export default Home
