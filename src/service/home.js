import HYRequest from './index'

export const getHomeMutidata=()=>{
    return HYRequest.get('/homeinfo',{})
}
export const getgoods=(type,page)=>{
    return HYRequest.post('/goods',{
        type,
        page
    })
}