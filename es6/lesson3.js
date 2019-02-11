import 'babel-polyfill'
import * as BadApi from './lesson3/api-callback'
import {mathOp} from './lesson3/math'
import * as PromiseApi from './lesson3/api-promise'
import {asyncSequence} from './lesson3/async-generator'
import * as GoodApi from './lesson3/api-promise'
// callback hell

/*Не сработает try catch*/

/*

try {
	BadApi.userReg((res) => {
		console.log(res)
		BadApi.userAuth(res.id, (resAuth) => {
			console.log(resAuth)
			BadApi.userData(resAuth.token, (resData) => { 
				console.log(resData)
			}, (e) => {
				console.log(e.msg)
			})
		}, (e) => {
			console.log(e.msg)
		})
	}), (e) => {
		console.log(e.msg)
	}
} catch(e) {
	console.log("Hell")
}



function mathRun() {
	try {
		let a = mathOp(1,2,'+') + mathOp(1,1,'/')
		console.log(a)
		return a
	}
	catch (e) {
		console.log(e.message)
		console.log(e.stack)
	}
	finally {
		 console.log('math finally')
	}
	 console.log('math done')
}

mathRun();

 //Функция new Promise хранит два состояния. И когда хотим подписаться на результат промиса. Обещаем, что код когда-нибудь завершится
//через (new Promise), а затем как завершится описываем ЗАТЕМ then 
let some = new Promise(function(resolve, reject) {
	setTimeout(() => {
		let num = Math.random()
		num > 0.5 ? resolve(num) : reject(`${num} less than 0.5`);
	}, 200);
})
console.log(some)

some.then((result) => {
	console.log('good' + result)
}, (err) => {
	console.log(err)
})

*/



// Цепочка промисов

// PromiseApi.userReg()
// 		.then((regRes) => {
// 				console.log(regRes)
// 				return PromiseApi.userAuth(regRes.id) 
// 		})
// 		.then((authRes) => {
// 			// regRes результат PromiseApi.userAuth
// 			console.log(authRes)
// 			return PromiseApi.userData(authRes.token)
// 		})
// 		.then ((dataRes) => {
// 			// res результат PromiseApi.userData
// 			console.log(dataRes)
// 		})
// 		.catch((e) => {
// 				console.log(e.msg)
// 		})

		// Можно замутить так

		// Метод который присутствует в цепочки из промисов и срабатывает не зависимо в каком поле был rejected

// function* userProccess() {
// 			let a = yield GoodApi.userReg()
// 			console.log(a)
// 			let b = yield GoodApi.userAuth(a.id)
// 			console.log(b)
// 			let c = yield GoodApi.userData(b.token)
// 			console.log(c)
// }

// asyncSequence(userProccess())

import * as AsyncApi from './lesson3/api-async'

async function UserProccess() {
	// Остановит выполение кода дождется выполнение кода AsyncApi.userReg()  
	let regRes = await AsyncApi.userReg()
	console.log(regRes)

	let authRes = await AsyncApi.userAuth(regRes.id)
	console.log(authRes)

	let dataRes = await AsyncApi.userData(authRes.token)
	console.log(dataRes)
	return dataRes.data
}


// UserProccess() если хотим data как то использовать
UserProccess().then((data) => {
	console.log(data)
}).catch((err) => {
		console.log(err.message)
})
