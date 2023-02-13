import styled from 'styled-components'

export const PostItemContainer = styled.li`
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin: 10px;
  margin-top: 20px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`

export const ImageUserContainer = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    314.35deg,
    #e20337 6.03%,
    #c60188 40.88%,
    #7700c3 73.23%
  );
  border: 1.03px solid;

  border-image-source: linear-gradient(
    314.35deg,
    #e20337 6.03%,
    #c60188 40.88%,
    #7700c3 73.23%
  );
  border-radius: 55px;
  margin-right: 20px;
`

export const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`
export const ImageBackgrond = styled.div`
  width: 58px;
  height: 58px;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 29px;
`

export const UserName = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`

export const Image = styled.img`
  width: 100%;
  height: 650px;
`

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  margin-left: 13px;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`

export const CommentsContainer = styled.ul`
  margin-top: 2px;
  margin-left: 20px;
  padding: 0px;
  list-style-type: none;
`

export const LikesCount = styled.h3`
  margin-top: 20px;
  margin-left: 20px;
`

export const Caption = styled.p`
  margin-left: 20px;
`

export const CommentContainer = styled.li`
  display: flex;
  padding: 0px;
  align-items: center;
`

export const CommentUserName = styled.h3``

export const Comment = styled.p``

export const Button = styled.button`
  border: none;
  background-color: #ffffff;
`

export const CreatedAt = styled.p`
  color: #989898;
  margin-left: 20px;
`
