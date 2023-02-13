import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 88vh;
  overflow-y: auto;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9f9')};
`
export const InstaPostsContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
`
