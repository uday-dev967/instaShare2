import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2),
    0px 6px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  @media screen and (max-width: 576px) {
    width: 100%;
    border-radius: none;
    box-shadow: none;
    padding: 0px;
  }
`
export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchResults = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const PostsList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`

export const FailureViewContainer = styled.div`
  width: 100%;
  height: 50vh;
  text-align: center;
  @media screen and (min-width: 756px) {
    min-width: 580px;
  }
`

export const FailureImage = styled.img``
export const WarningMessage = styled.p``

export const RetryButton = styled.button``
