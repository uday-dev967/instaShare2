import {BsHeart} from 'react-icons/bs'
import {BiShareAlt} from 'react-icons/bi'
import {FaRegComment} from 'react-icons/fa'
import {FcLike} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import PostContext from '../../context/PostContext'
import {
  PostItemContainer,
  ImageUserContainer,
  ImageContainer,
  ImageBackgrond,
  ProfilePic,
  UserName,
  Image,
  ButtonsContainer,
  CommentsContainer,
  CommentContainer,
  CommentUserName,
  Comment,
  LikesCount,
  Caption,
  Button,
  CreatedAt,
} from './styledComponents'
import './index.css'
import ThemeSearchContext from '../../context/ThemeSearchContext'

const PostItem = props => {
  const post = isDarkTheme => (
    <PostContext.Consumer>
      {myValues => {
        const {onChangeLikeIcon, onChangeUnLikeIcon} = myValues
        const {postItemDetails} = props
        const {
          postId,
          userId,
          likeStatus,
          userName,
          profilePic,
          postDetails,
          likesCount,
          comments,
          createdAt,
        } = postItemDetails
        const {imageUrl, caption} = postDetails
        const onLike = () => {
          onChangeLikeIcon(postId)
        }
        const onUnLike = () => {
          onChangeUnLikeIcon(postId)
        }
        console.log(isDarkTheme)

        return (
          <>
            <PostItemContainer isDarkTheme={isDarkTheme}>
              <Link to={`/users/${userId}`} className="post-link-item">
                <ImageUserContainer>
                  <ImageContainer>
                    <ImageBackgrond>
                      <ProfilePic src={profilePic} alt="profile pic" />
                    </ImageBackgrond>
                  </ImageContainer>
                  <UserName>{userName}</UserName>
                </ImageUserContainer>
              </Link>
              <Image src={imageUrl} alt="post" />
              <ButtonsContainer>
                {likeStatus ? (
                  <Button type="button" onClick={onUnLike}>
                    <FcLike className="post-like-icon" />
                  </Button>
                ) : (
                  <Button type="button" onClick={onLike}>
                    <BsHeart className="post-icon" />
                  </Button>
                )}
                <Button type="button">
                  <FaRegComment className="post-icon" />
                </Button>
                <Button type="button">
                  <BiShareAlt className="post-icon" />
                </Button>
              </ButtonsContainer>
              <LikesCount>{likesCount} likes</LikesCount>
              <Caption>{caption}</Caption>
              <CommentsContainer>
                {comments.map(each => (
                  <CommentContainer>
                    <CommentUserName>{each.userName}</CommentUserName>
                    <Comment>{each.comment}</Comment>
                  </CommentContainer>
                ))}
              </CommentsContainer>
              <CreatedAt>{createdAt}</CreatedAt>
            </PostItemContainer>
          </>
        )
      }}
    </PostContext.Consumer>
  )
  return (
    <ThemeSearchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return <>{post(isDarkTheme)}</>
      }}
    </ThemeSearchContext.Consumer>
  )
}

export default PostItem
