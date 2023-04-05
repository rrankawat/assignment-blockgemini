import { useEffect, useState } from 'react'
import axios from 'axios'

import User from './User'

const Users = () => {
  const [data, setData] = useState({})

  const fetchData = async (page) => {
    const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`)
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Users List</h1>

      {data && data?.data?.map((item) => <User key={item.id} user={item} />)}
    </>
  )
}

export default Users
