
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../feature/user/userslice";


function UserCard({name,email,id}) {

    const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-between bg-gray-300 p-5 rounded-md">
       <div>
            <h3 className="font-bold text-lg text-gray-700">{name}</h3>
            <span className="font-normal text-gray-600">{email}</span>
       </div>
       <div className="flex gap-3 items-center">
        <button onClick={()=>dispatch(dispatch(deleteUser(id)))}>
            <MdDeleteSweep size={30}/>
        </button>
        <button>
          <Link to={`/editUser/${id}`}>
            <FaEdit size={25}/>
          </Link>
        </button>
       </div>
    </div>
  )
}

export default UserCard