import * as serverApi from './db';

async function all(){
    let response = await serverApi.all();
    return responseJson(response);
}

async function one(id){
    let response = await serverApi.get(id)
    return responseJson(response);
}


async function remove(id) {
    let response = await serverApi.remove(id)
    return responseJson(response);
}


function responseJson(text) {
    try {
        let response = JSON.parse(text);
        if(response.code !== 200) {
            throw new Error('Код ответа не 200')
        }
        return response.data
    } catch(e) {
        throw new Error('Некоректный ответ от сервера')
    }
}


export {all, one, remove};