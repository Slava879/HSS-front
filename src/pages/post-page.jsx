import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../services'
import { PostCard } from '../components/post-card/post-card'

export const PostPage = () => {
  const {postId} = useParams()
  const [post, setPost] = useState(null)
  const [comment, setComment] = useState(null)
  const [isFetched1, setisFetched1] = useState(true)
  const [isFetched2, setisFetched2] = useState(true)

  useEffect(() => {
    if (postId) {
        api.getPostById(postId).then(res => {
            setPost(res.data)
            setisFetched1(false)
        })

        api.getCommentsId(postId).then(res => {
            setComment(res.data)
            setisFetched2(false)
        })
    }
  }, [postId])

  if(isFetched1 || isFetched2) return "Loading..."
  return (
    <div className='backPost'>
        <div className='Postheader'>
          <div className='titleHeader'>Пост №{postId} {post.title}</div>
          <div className='MainHeader'>{post.body}</div>
          <NavLink to={'/'} className='backPostText'>назад</NavLink>
        </div>
        <div className="wrapper2">
          {comment.map(el => (
            <PostCard comm={el}/>
          ))}
        </div>
    </div>
  )
}
