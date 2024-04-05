import HYRequest from './index'

export const getHomeMutidata=()=>{
    return HYRequest.get('/homeinfo',{})
}