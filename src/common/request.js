import { DeviceEventEmitter, Alert } from 'react-native';

export default {
	post(url, params, headers){
		console.log("params");
		console.log(params);
		return new Promise(function (resolve, reject) {
			DeviceEventEmitter.emit('loading', true);
			console.log('header--application/json');
			fetch(url,{
				method: 'POST',
				headers: headers || {
					accept: 'application/json',
					'content-type': "application/json",
				},
				body: JSON.stringify(params)
			})
			.then((response) => {
				console.log(".then--request");
				console.log(response);
				// DeviceEventEmitter.emit('loading', false);
				if (response.ok) {
					console.log("response.ok");
					resolve( response.json() );
				} else {
					console.log("response.nontok");
					Alert.alert("网络请求失败，错误码："+response.status+"，内容："+JSON.parse(response._bodyInit).error);
					reject({status:response.status});
				}
			})
			.catch((err)=> {
				console.log("err--request");
				console.log(err);
				DeviceEventEmitter.emit('loading', false);
				Alert.alert("发送请求出错:"+JSON.parse(err));
				reject(err);
			})
		});
	},
	get(url){
		return new Promise(function (resolve, reject) {
			DeviceEventEmitter.emit('loading', true);
			fetch(url,{
				method: 'GET',
			}).then((res) => {
				DeviceEventEmitter.emit('loading', false);
				if (res.ok) {
					return resolve(res.json());
				} else {
					reject({status:res.status})
				}
			})
			.catch((err)=> {
				DeviceEventEmitter.emit('loading', false);
				reject(err);
			})
		});

	},
	postbase64(url){
		return new Promise(function (resolve, reject) {
			DeviceEventEmitter.emit('loading', true);
			fetch(url,{
				method: 'POST',
			}).then((res) => {
				DeviceEventEmitter.emit('loading', false);
				if (res.ok) {
					resolve(res.json());
				} else {
					reject({status:res.status})
				}
			})
			.catch((err)=> {
				DeviceEventEmitter.emit('loading', false);
				reject(err);
			})
		});
	},
	getbase64(url){
		return new Promise(function (resolve, reject) {
			DeviceEventEmitter.emit('loading', true);
			fetch(url,{
				method: 'GET',
			}).then((res) => {
				DeviceEventEmitter.emit('loading', false);
				if (res.ok) {
					resolve(res.json());
				} else {
					reject({status:res.status})
				}
			})
			.catch((err)=> {
				DeviceEventEmitter.emit('loading', false);
				reject(err);
			})
		});
	},
	postbinarystr(url){
		return new Promise(function (resolve, reject) {
			DeviceEventEmitter.emit('loading', true);
			fetch(url,{
				method: 'POST',
			}).then((res) => {
				DeviceEventEmitter.emit('loading', false);
				if (res.ok) {
					resolve(res.json());
				} else {
					reject({status:res.status})
				}
			})
			.catch((err)=> {
				DeviceEventEmitter.emit('loading', false);
				reject(err);
			})
		});
	},
	getbinarystr(url){
		return new Promise(function (resolve, reject) {
			DeviceEventEmitter.emit('loading', true);
			fetch(url,{
				method: 'GET',
			}).then((res) => {
				DeviceEventEmitter.emit('loading', false);
				if (res.ok) {
					resolve(res.json());
				} else {
					reject({status:res.status})
				}
			})
			.catch((err)=> {
				DeviceEventEmitter.emit('loading', false);
				reject(err);
			})
		});
	},
}
