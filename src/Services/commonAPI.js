import axios from 'axios'

export const commonAPI = async (httpReq,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpReq,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}