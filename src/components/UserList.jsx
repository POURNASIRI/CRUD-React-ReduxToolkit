import UserCard from "./UserCard"


function UserList() {
    const users=[
        {id: '1', name:'erfan',email:"erfanpournasiri71@gmail.com"},
        {id: '2', name:'arman',email:"arman.pm71@gmail.com"},
    ]

    const renderCard = () => users.map(user=>(
        <div key={user.id}>
            <UserCard 
            name={user.name}
            email={user.email}
             />
        </div>
    ) )
  return (
    <div className="grid gap-5 font-semibold md:grid-cols-2">
        {users.length ? renderCard(): 
        <p className="text-center 
        col-span-2
        font-bold
        text-gray-600">No User</p>}
    </div>
  )
}

export default UserList