import React from 'react'
import UserList from '../components/UserList'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <Link to={'/addUser'}>
        <Button>
          Add User
        </Button>
      </Link>
        <UserList/>
    </div>
  )
}

export default Home