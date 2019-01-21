// Get使用方法：
// 1.参数要求：url:String(必填),params:Object(可选),headers:Object(可选)
// 2.示例：
//    Get('http://www.hdzb.com.cn/api',params,headers)
//     .then(json =>{
//           请求成功后的处理
//     },json =>{
//          请求失败后的回调
//     })

// Post使用方法:
// 1.参数要求：url:String(必填),params:Object(必填),headers:Object(可选)
// 2.示例：
//    Post('http://www.hdzb.com.cn/api',params,headers)
//    .then(json =>{
//           请求成功后的处理
//     },json =>{
//          请求失败后的回调
//     })

import { DeviceEventEmitter } from 'react-native';

/**
 * 网络请求fetch的get方法封装
 * @param {*} url   String:请求的url
 * @param {*} parmas   Object:请求的参数,可选
 * @param {*} headers  Object:请求头，可选
 */
export function Get(url,parmas,headers){
    //拼接参数
    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
          url += '?' + paramsArray.join('&')
        } else {
          url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
        DeviceEventEmitter.emit('loading', true);
        fetch(url, {
           method: 'GET',
           headers: headers || '',
          })
        .then((response) => {
        DeviceEventEmitter.emit('loading', false);
        if (response.ok) {
            return response.json();
        } else {
            reject({status:response.status})
        }})
        .then((response) => {
        DeviceEventEmitter.emit('loading', false);
            resolve(response);
        })
        .catch((err)=> {
            DeviceEventEmitter.emit('loading', false);
            reject({status:-1});
        })
    })
}

/**
 * 网络请求fetch的post方法封装
 * @param {*} url   String:请求的url
 * @param {*} parmas   Object:请求的参数
 * @param {*} headers  Object:请求头，可选
 */
export function Post(url,params,headers){
    return new Promise(function (resolve, reject) {
        DeviceEventEmitter.emit('loading', true);
        fetch(url, {
           method: 'POST',
           headers: headers || '',
           body:JSON.stringify(params)
          })
        .then((response) => {
            DeviceEventEmitter.emit('loading', false);
        if (response.ok) {
            return response.json();
        } else {
            reject({status:response.status})
        }})
        .then((response) => {
            DeviceEventEmitter.emit('loading', false);
        resolve(response);
        })
        .catch((err)=> {
            DeviceEventEmitter.emit('loading', false);
        reject({status:-1});
        })
    })
}




