import { useDispatch, useSelector } from "react-redux";
import { ClearAllUsers, RemoveUser } from "../store/slice/UserSlice";
import { clearAllUsers } from "../store/actions";



const AddedUserList = () => {

    const dispatch=useDispatch();

    const handleRemoveUser=(id)=>{
   dispatch(RemoveUser(id))
    }
    const userData= useSelector((state)=>{
        return state.user;
    })

    const handleClearAllUsers=()=>{
        dispatch(clearAllUsers())
    }
    return (
        <div className='userlist'>
             { userData.map((user,id)=>{
                return(
                <div key={id} className='userlist-item'>
                    <span className='userlist-text'>{user}</span>
                    <button className='btn btn-icon' aria-label='delete' onClick={()=> handleRemoveUser(id)}>✖</button>
                </div>
                )
              })}
            <div className=''>
                <button className='btn btn-danger' onClick={()=>{handleClearAllUsers()}}>Clear All Users</button>
            </div>
        </div>
    )
}
export default AddedUserList;