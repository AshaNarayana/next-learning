import React from 'react'

interface Users  {
  id: number,
  name: string
}
const UsersPage = async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: Users[] = await res.json()
   
  return (
      <div>
          {users.map((user) => <h1 key ={user.id}> {user.name}</h1>)}
    </div>
  )
}

export default UsersPage