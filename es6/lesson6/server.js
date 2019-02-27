import axios from 'axios'

// метод create вернем новый объект с зафиксированными константами, настраиваем базовый конфиг
let server = axios.create({
	// Пишем базовый url и он запоминает в config
	// baseURL: 'https://api.myjson.com/bins/xh52u'
	baseURL: 'https://api.myjson.com'
	// Если у нас есть
})

/* Интерсепторы
Можно написать с разных мест программы и это приведе к тому что выведется три функции 
Здесь можно добавить заголовки к приложению
Пишем алгоритм который позволит пройти по шагам для запроса на сервер
*/


server.interceptors.request.use(function(request) {
	console.log(request)
	// if(localStorage.getItem('token'))
	// request.headers.Autorization = '50537266ded1d3eb1e6923f7f4b2f484';
	return request
})


server.interceptors.response.use(function(response) {
	/*if(typeof response.data !== "object"){
        throw new Error("server did not send json");
    }*/
	console.log(response)
	return response
})



export default server;