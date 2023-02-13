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

export const PostsList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`
