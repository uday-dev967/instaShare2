import React from 'react'

const PostContext = React.createContext({
  onChangeLikeIcon: () => {},
  onChangeUnLikeIcon: () => {},
})

export default PostContext
