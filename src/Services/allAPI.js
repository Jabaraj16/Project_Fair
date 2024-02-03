import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${serverURL}/register`,user,"")
}
//login
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${serverURL}/login`,user,"")
}

//addProject
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/add-project`,reqBody,reqHeader)
}