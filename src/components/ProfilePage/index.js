import {BsGrid3X3} from 'react-icons/bs'
import UserStories from '../UserStories'
import UserPosts from '../UserPosts'
import ThemeSearchContext from '../../context/ThemeSearchContext'
import './index.css'

const ProfilePage = props => (
  <ThemeSearchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textClass = isDarkTheme ? 'is-dark-container' : ''
      const {data, my} = props

      const {profile} = data
      const {
        userId,
        userName,
        profilePic,
        followersCount,
        followingCount,
        userBio,
        posts,
        stories,
        postsCount,
      } = profile

      return (
        <>
          <div className={`profile-main-card-container ${textClass}`}>
            <div className="mobile-profile-card">
              <div>
                <h1 className="mobile-profile-head">{userName}</h1>
                <div className="mobile-image-user-details">
                  <img
                    src={profilePic}
                    alt={`${my} profile`}
                    className="mobile-profile-pic"
                  />
                  <div className="count">
                    <p className="count-follower">
                      <span className="highlight">{postsCount}</span>Posts
                    </p>
                    <p className="count-follower">
                      <span className="highlight">{followersCount} </span>{' '}
                      Followers
                    </p>
                    <p className="count-follower">
                      <span className="highlight">{followingCount} </span>{' '}
                      Following
                    </p>
                  </div>
                </div>
                <div className="mobile-user-detail-container">
                  <div className="mobile-bio-container">
                    <p className="bio-name">{userId}</p>
                    <p className="bio">{userBio}</p>
                  </div>
                </div>
              </div>
              <ul className="user-stories">
                {stories.map(each => (
                  <UserStories key={each.id} item={each} my={my} />
                ))}
              </ul>
              <hr className="line" />
              <div className="posts-container-user">
                <div className="head-container">
                  <BsGrid3X3 className="post-logo" />
                  <h1 className="post-head">Posts</h1>
                </div>
                <UserPosts posts={posts} my={my} />
              </div>
            </div>

            <div className="Profile-card">
              <div className="image-user-details">
                <img
                  src={profilePic}
                  alt={`${my} profile`}
                  className="Profile-pic"
                />
                <div className="user-detail-container">
                  <h1 className="profile-head">{userName}</h1>
                  <div className="count">
                    <p className="count-follower">
                      <span className="highlight">{postsCount}</span>Posts
                    </p>
                    <p className="count-follower">
                      <span className="highlight">{followersCount} </span>{' '}
                      Followers
                    </p>
                    <p className="count-follower">
                      <span className="highlight">{followingCount} </span>{' '}
                      Following
                    </p>
                  </div>
                  <div className="bio-container">
                    <p className="bio-name">{userId}</p>
                    <p className="bio">{userBio}</p>
                  </div>
                </div>
              </div>
              <ul className="user-stories">
                {stories.map(each => (
                  <UserStories key={each.id} item={each} my={my} />
                ))}
              </ul>
              <hr className="line" />
              <div className="posts-container-user">
                <div className="head-container">
                  <BsGrid3X3 className="post-logo" />
                  <h1 className="post-head">Posts</h1>
                </div>
                <UserPosts posts={posts} my={my} />
              </div>
            </div>
          </div>
        </>
      )
    }}
  </ThemeSearchContext.Consumer>
)

export default ProfilePage
