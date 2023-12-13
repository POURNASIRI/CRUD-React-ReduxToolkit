import React from 'react'
import UserList from '../components/UserList'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Link to={'/addUser'}>
      <Button>
        Add User
      </Button>
      <UserList/>
    </Link>
  )
}

export default Home