import styled from 'styled-components'

export const Stories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9f9')};
  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`

export const StoriesContainer = styled.ul`
  width: 80%;
  padding: 20px;
  max-width: 1100px;
  margin-top: 10px;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const SlickItem = styled.li`
  width: 120px;
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const StoryImage = styled.img`
  margin: 0px 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 3px solid #ed587b;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
    border-radius: 55px;
    border: 4px solid #ed587b;
    display: flex;
  }
`

export const StoryName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 24px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`
export const FailureViewContainer = styled.div`
  width: 100%;
  height: 28vh;
  padding-bottom: 20px;
  @media screen and (min-width: 756px) {
    min-width: 580px;
    display: flex;
  }
`
export const ImageTextContainer = styled.div`
  text-align: center;
  @media screen and (max-width: 756px) {
    font-size: 15px;
  }
`
export const FailureImage = styled.img``
export const WarningMessage = styled.p``

export const RetryButton = styled.button``
