import {adminAxiosInstance} from "./axiosInstance"

export const LoginAdmin=async(payload)=>{
    try{
        console.log(payload,"jjjjjjjjjjjjjjjjjjjj");
        const response = await adminAxiosInstance.post('/api/admin/login', payload);
        console.log("responseloginadmin",response);
        return response.data;
    }catch(err){
        console.log("nnnnnnnnnnnnnnnnnn");
        return err.message;
    }
}