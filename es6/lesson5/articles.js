export async function all() {
	// fetch('http://localhost/js-frontend-api/articles.php')
	let data = await getRequest('https://api.myjson.com/bins/xh52u')
	return data
}

export async function one(id) {
	let data = await getRequest('https://api.myjson.com/bins/xh52u')
	return data


}
// Отправляем для php к примеру в формате formData
export async function add(article){
    let formData = new FormData();

    for(let name in article){
        formData.append(name, article[name]);
    }

    let data = await makeRequest('/js-frontend-api/articles.php', {
        method: 'POST',
        body: formData
    });

    return data;
}

// Отправляем данные на сервер в формате json, редактируем файл уже созданный PUT
export async function edit(id, article){
    let forServer = {
        ...article,
        id
    };

    let data = await makeRequest('/js-frontend-api/articles.php', {
        method: 'PUT',
        body: JSON.stringify(forServer)
    });

    return data;
}


export async function remove(id) {

}

// Возвращаем сразу данные а fetch возвращает промис
// function getRequest(url, options = {}) {
// 	return fetch(url, options).then((response) => {
// 		return response.json()
// 	}).then((data) => {
// 		console.log(data)
// 		return data
// 	})
// }

function getRequest(url, options = {}) {
	return fetch(url, options).then((response) => {
		if(response.status !== 200){
			return response.text().then((text) => {
				throw(new Error(text))
			})
		}
		return response.json()
	})
}



