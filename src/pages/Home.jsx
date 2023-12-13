import React from 'react'
import UserList from '../components/UserList'
import Button from '../components/Button'

function Home() {
  return (
    <div>
      <Button>
        Add User
      </Button>
      <UserList/>
    </div>
  )
}

export default Home