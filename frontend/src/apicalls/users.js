import {axiosInstance} from "./axiosInstance"

export const RegisterUser=async(payload)=>{
    try{
        const response= await axiosInstance.post('api/users/signup',payload)
        return response.data
        // console.log(axiosInstance,"hiiiii");
    }catch(err){
        return err.message;
    }
}

export const LoginUser=async(payload)=>{
    try{
        console.log(payload);
        const response = await axiosInstance.post('/api/users/login', payload);
        console.log("response");
        console.log(response);
        return response.data;
    }catch(err){
        return err.message;
    }
}