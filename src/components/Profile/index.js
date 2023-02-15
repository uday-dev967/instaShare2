/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ProfilePage from '../ProfilePage'
import ThemeSearchContext from '../../context/ThemeSearchContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Profile extends Component {
  state = {apiStatus: apiStatusConstants.initial, profileData: []}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/insta-share/my-profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        profile: {
          id: data.profile.id,
          userId: data.profile.user_id,
          userName: data.profile.user_name,
          profilePic: data.profile.profile_pic,
          followersCount: data.profile.followers_count,
          followingCount: data.profile.following_count,
          userBio: data.profile.user_bio,
          postsCount: data.profile.posts_count,
          posts: data.profile.posts.map(each => ({
            id: each.id,
            image: each.image,
          })),
          stories: data.profile.stories.map(each => ({
            id: each.id,
            image: each.image,
          })),
        },
      }
      this.setState({
        profileData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {profileData} = this.state

    return (
      <div className="my-profile-container">
        <ProfilePage data={profileData} my="my" />
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  onRetry = () => {
    this.setState(
      {apiStatus: apiStatusConstants.inProgress},
      this.getMyProfileDetail,
    )
  }

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://res.cloudinary.com/dq7imhrvo/image/upload/v1643651534/insta%20Shere%20clone/alert-triangle_hczx0o.png"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-head">Something went wrong. Please try again</p>
      <button className="failure-button" type="button" onClick={this.onRetry}>
        Try again
      </button>
    </div>
  )

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
    return (
      <ThemeSearchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const BackgroundClass = isDarkTheme
            ? 'is-dark-theme'
            : 'is-light-theme'
          return (
            <>
              <div className="absolute">
                <Header />
              </div>
              <div className={`${BackgroundClass}`}>{this.renderViews()}</div>
            </>
          )
        }}
      </ThemeSearchContext.Consumer>
    )
  }
}

export default Profile
