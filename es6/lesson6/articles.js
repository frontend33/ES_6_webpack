import server from './server'


export async function all() {
    // let response = await server.get('https://api.myjson.com/bins/xh52u')
    let response = await server.get('/bins/xh52u')
    // В функции server.interceptors.request.use указали headers теперь он не нужен
    // headers: {
    //     Autorization: '50537266ded1d3eb1e6923f7f4b2f484';
    // }
    console.log(response)
    return response.data
}

export async function one(id){
    let response = await server.get(`https://api.myjson.com/bins/xh52u`, {
        params: {id}
    });
    return response.data;
}

export async function remove(id) {
    let response = await server.delete('articles.php', {
        params: {id}
    });

    return response.data;
}

export async function add(article){
    let formData = new FormData();

    for(let name in article){
        formData.append(name, article[name]);
    }
    // Вторым параметром указываем объект который хотим заслать на сервер
    let response = await server.post('articles.php', formData);
    return response.data;
}

export async function edit(id, article) {
    // let forServer = {
    //     ...article,
    //     id
    // };
    let response = await server.put('articles.php', {...articl, id});
    return response.data;
}

// Это делают интерцеторы проверку на ошибки и т д в server js - interceptors
// function makeRequest(url, options = {}){
//     if(!('headers' in options)){
//         options.headers = {};
//     }

//     // options.headers.Autorization = '50537266ded1d3eb1e6923f7f4b2f484';
//     options.headers.Autorization = '50537266ded1d3eb1e6923f7f4b2f484';

//     return fetch(url, options).then((response) => {
//         if(response.status !== 200){
//             return response.text().then((text) => {
//                 throw new Error(text);
//             })
//         }

//         return response.json();
//     });
// }

