
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


function UserCard({name,email}) {
  return (
    <div className="flex items-center justify-between bg-gray-300 p-5 rounded-md">
       <div>
            <h3 className="font-bold text-lg text-gray-700">{name}</h3>
            <span className="font-normal text-gray-600">{email}</span>
       </div>
       <div className="flex gap-3 items-center">
        <button>
            <MdDeleteSweep size={30}/>
        </button>
        <button>
            <FaEdit size={25}/>
        </button>
       </div>
    </div>
  )
}

export default UserCard