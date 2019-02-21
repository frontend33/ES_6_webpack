import axios from 'axios'

// метод create вернем новый объект с зафиксированными константами, настраиваем базовый конфиг
let server = axios.create({
})

export default server;