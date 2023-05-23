
import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from '../users/usersType';



export const AdminUsersFetchSuccess=(users)=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const AdminUsersFetchFailure=(error)=>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}