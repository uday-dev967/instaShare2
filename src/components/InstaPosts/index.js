import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {
  MainContainer,
  PostsList,
  SearchResultsContainer,
  SearchResults,
  FailureViewContainer,
  FailureImage,
  WarningMessage,
  RetryButton,
} from './styledComponents'
import PostItem from '../PostItem'
import PostContext from '../../context/PostContext'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class InstaPosts extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    postsData: [],
    Likebutton: false,
  }

  componentDidMount() {
    this.getPostList()
  }

  getPostList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {isSearchBtnClicked, searchInput} = this.props
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/insta-share/posts'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.posts.map(each => ({
        postId: each.post_id,
        userId: each.user_id,
        likeStatus: false,
        userName: each.user_name,
        profilePic: each.profile_pic,
        postDetails: {
          imageUrl: each.post_details.image_url,
          caption: each.post_details.caption,
        },
        likesCount: each.likes_count,
        comments: each.comments.map(eachItem => ({
          userName: eachItem.user_name,
          userId: eachItem.user_id,
          comment: eachItem.comment,
        })),
        createdAt: each.created_at,
      }))

      this.setState({
        postsData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeLikeIcon = async postId => {
    this.setState(prev => ({
      button: !prev.button,
    }))
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const post = {like_status: true}
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(post),
      method: 'POST',
    }
    await fetch(apiUrl, options)

    this.setState(prev => ({
      postsData: prev.postsData.map(each => {
        if (each.postId === postId) {
          return {
            ...each,
            likesCount: each.likesCount + 1,
            likeStatus: !each.likeStatus,
          }
        }
        return each
      }),
    }))
  }

  onChangeUnLikeIcon = async postId => {
    this.setState(prev => ({button: !prev.button}))
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const post = {like_status: false}
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(post),
      method: 'POST',
    }
    await fetch(apiUrl, options)
    this.setState(prev => ({
      postsData: prev.postsData.map(each => {
        if (each.postId === postId) {
          return {
            ...each,
            likesCount: each.likesCount - 1,
            likeStatus: !each.likeStatus,
          }
        }
        return each
      }),
    }))
  }

  onRetry = () => {
    this.setState({apiStatus: apiStatusConstants.inProgress}, this.getPostList)
  }

  renderFailureView = () => (
    <FailureViewContainer className="failure-view">
      <FailureImage
        src="https://res.cloudinary.com/dieyyopcy/image/upload/v1676631535/Iconwarning2_n0jup1.png"
        alt="failure view"
        className="failure-img"
      />
      <WarningMessage className="failure-head">
        Something went wrong. Please try again
      </WarningMessage>
      <RetryButton
        className="failure-button"
        type="button"
        onClick={this.onRetry}
      >
        Try again
      </RetryButton>
    </FailureViewContainer>
  )

  renderLoadingView = () => (
    <>
      <div className="posts-loader">
        <Loader type="TailSpin" height={50} width={50} color="#0799fa" />
      </div>
    </>
  )

  renderSuccessView = () => {
    let {postsData} = this.state
    const {isDarkTheme, isSearchBtnClicked, searchInput} = this.props
    if (isSearchBtnClicked) {
      postsData = postsData.filter(each =>
        each.postDetails.caption
          .toLowerCase()
          .includes(searchInput.toLowerCase()),
      )
    }
    return (
      <PostContext.Provider
        value={{
          onChangeLikeIcon: this.onChangeLikeIcon,
          onChangeUnLikeIcon: this.onChangeUnLikeIcon,
        }}
      >
        <>
          <PostsList className="bye" isDarkTheme={isDarkTheme}>
            {postsData.map(each => (
              <PostItem key={each.postId} postItemDetails={each} />
            ))}
          </PostsList>
        </>
      </PostContext.Provider>
    )
  }

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isDarkTheme, isSearchBtnClicked} = this.props
    return (
      <SearchResultsContainer>
        {isSearchBtnClicked ? (
          <SearchResults isDarkTheme={isDarkTheme}>
            Search Results
          </SearchResults>
        ) : null}
        <MainContainer isDarkTheme={isDarkTheme}>
          {this.renderViews()}
        </MainContainer>
      </SearchResultsContainer>
    )
  }
}

export default InstaPosts
