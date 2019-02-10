let data = {
    a:1,
    b:2
}
export default new Proxy(data, {
    // глобальные геттеры и сеттеры не пишем для каждого ключа свой гет сет
    get(target, name) {
        return target[name]
    },
    set(target, name, value) {
        target[name] = value
        // Подтверждаем проксирующий сервер что изменения прошли
        return true
    }

}) 