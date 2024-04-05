import Taro from "@tarojs/taro";

const TIME_OUT=6000;
const BASE_URL='http://codercba.com:9060/juanpi/api';
class HYRequest{
    request(url,method,data){
        return new Promise((resolve,reject)=>{
            Taro.request({
                url:BASE_URL+url,
                method:method||'GET',
                timeout:TIME_OUT,
                data:data,
                success(res){
                    resolve(res.data)
                },
                fail(err){
                    reject(err)
                }
            })
        })
    }
    get(url,params){
        return this.request(url,'GET',params)
    }
    post(url,data){
        return this.request(url,'POST',data)
    }
}
export default new HYRequest();