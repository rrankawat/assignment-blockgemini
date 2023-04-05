import { useEffect, useState } from 'react'
import axios from 'axios'

import User from './User'
import { sortUsers, pages } from '../utils/helpers'

const Users = () => {
  const [users, setUsers] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  const fetchData = async (page) => {
    const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`)
    setUsers(data?.data)
    setTotalPages(data?.total_pages)
  }

  useEffect(() => {
    fetchData(1)
  }, [])

  useEffect(() => {
    if (users) {
      sortUsers(users)
      setUsers(users)
    }
  }, [users])

  const showAll = () => {
    var items = []
    pages(totalPages).map(async (page) => {
      const { data } = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      )

      items = [...items, ...data?.data]
      setUsers(items)
    })
  }

  return (
    <>
      <h1>Users List</h1>

      <button style={{ marginBottom: '10px' }} onClick={showAll}>
        Show All
      </button>

      {users && users.map((item) => <User key={item.id} user={item} />)}

      <div style={{ marginTop: '20px' }}>
        {pages(totalPages).map((page) => (
          <span key={page} style={pageStyle} onClick={() => fetchData(page)}>
            {page}
          </span>
        ))}
      </div>
    </>
  )
}

const pageStyle = {
  marginRight: '10px',
  padding: '5px 10px',
  background: '#000',
  color: '#fff',
  cursor: 'pointer',
}

export default Users
