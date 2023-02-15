import styled from 'styled-components'

export const PostItemContainer = styled.li`
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin: 10px;
  margin-top: 20px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const ImageUserContainer = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin-left: 10px;
  }
`

export const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #e20337, #c60188, #7700c3);
  border-radius: 35px;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 25px;
  }
`

export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 24px;
  @media screen and (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`
export const ImageBackgrond = styled.div`
  width: 58px;
  height: 58px;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`

export const UserName = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 650px;
  @media screen and (max-width: 576px) {
    height: 375px;
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  margin-left: 13px;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  @media screen and (max-width: 576px) {
    margin: 0px;
    margin-top: 10px;
    margin-left: 5px;
    width: 100px;
  }
`

export const CommentsContainer = styled.ul`
  margin: 0px;
  margin-left: 20px;
  padding: 0px;
  list-style-type: none;
  @media screen and (max-width: 576px) {
    margin-left: 10px;
  }
`

export const LikesCount = styled.h3`
  margin: 0px;
  margin-top: 20px;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
    margin-left: 10px;
    margin-top: 10px;
  }
`

export const Caption = styled.p`
  margin: 0px;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    margin-left: 10px;
  }
`

export const CommentContainer = styled.li`
  display: flex;
  padding: 0px;
  align-items: center;
  margin: 0px;
`

export const CommentUserName = styled.h3`
  margin: 0px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const Comment = styled.p`
  margin: 0px;
  margin-left: 5px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
`

export const CreatedAt = styled.p`
  color: #989898;
  margin: 0px;
  margin-left: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    margin-left: 10px;
  }
`
