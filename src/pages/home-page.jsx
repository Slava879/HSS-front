import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { api } from '../services'
import { Card } from '../components/post-card/post-card'

export const HomePage = () => {
  const [value, setValue] = useState(0)
  const [data, setdata] = useState(null)
  const [isFetched, setisFetched] = useState(false)

  useEffect(() => {
    api.getPosts().then(res => {
      setdata(res.data)
      setisFetched(true)
      console.log(res.data)
    })
  }, [])

  if(!isFetched) return "Loading..."
  return (
    <div className='backMain'>
        <div className="wrapper">
                {data.map(el => (
                  <Card post={el}/>
                ))}
        </div>
    </div>
  )
}
