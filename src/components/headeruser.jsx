import fakeUsers from "../store/api";
import {useDispatch} from 'react-redux'
import { AddUser } from "../store/slice/UserSlice";

const HeaderUser = () => {

    const dispatch = useDispatch();
    const handleAddUser = (payload) =>{
       console.log(payload);
       dispatch(AddUser(payload))
    }
    return (

       
        <div className='userlist-header'>
            <h2 className="section-title">List of User Details</h2>
            <button className='btn btn-primary' onClick ={()=> handleAddUser(fakeUsers() )}>Add new users</button>
        </div>
    )
}
export default HeaderUser;