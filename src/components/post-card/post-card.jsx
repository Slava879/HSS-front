import { NavLink } from 'react-router-dom'
import s from './post-card.module.scss'

export const Card = ({post}) => {
  return (
    <NavLink className={s.card} to={`/post/${post?.id}`}>
      <p className={s.title}>{post?.title}</p>
      <p className={s.body}>{post?.body}</p>
    </NavLink>
  )
}

export const PostCard = ({comm}) => {
  return (
    <NavLink className={s.postcard}>
      <p className={s.posttitle}>{comm?.name}</p>
      <p className={s.postbody}>{comm?.body}</p>
      <div className={s.postemail}>{comm?.email}</div>
    </NavLink>
  )
}