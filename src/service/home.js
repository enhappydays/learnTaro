import HYRequest from './index'

export const getHomeMutidata=()=>{
    return HYRequest.get('/home/multidata',{})
}