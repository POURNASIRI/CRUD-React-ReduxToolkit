import { useSelector } from "react-redux"
import UserCard from "./UserCard"


function UserList() {
    const {user} = useSelector(state=>state.user)

    const renderCard = () => user.map(user=>(
        <div key={user.id}>
            <UserCard 
            name={user.name}
            email={user.email}
            id={user.id}
             />
        </div>
    ) )
  return (
    <div className="grid gap-5 font-semibold md:grid-cols-2">
        {user.length ? renderCard(): 
        <p className="text-center 
        col-span-2
        font-bold
        text-gray-600">No User</p>}
    </div>
  )
}

export default UserList