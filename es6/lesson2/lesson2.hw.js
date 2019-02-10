class EmailParser {
    constructor(email) {
        // this.$el = document.querySelector(settings.el)
        this.email = email
    }
    get name() {
        return this.isCorrect ? this.email.split('@')[0] : null;
    }
    get isCorrect() {
        const EMAIL_REGEXP= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яА_Я\-0-9]+\.)+[a-zA-Zа-яА_Я]{2,}))$/;
            return EMAIL_REGEXP.test(this.email)
    }
    get domain() {
       return this.isCorrect ? this.email.split('@')[1] : null;
    }

}

// function watchObj(element) {
//     return new Proxy(element, {
//         get: (target,name) => {
//             return watchObj(target[name]);
   
//         },
//         set: (target, name, value) => {
//             target[name] = value
//             return true
//         },

//     })
// }

function watchObj(node, callback){
    return new Proxy(node, {
        set(target, name, value){
            target[name] = value;
            callback(name, value);
            return true;
        },
        get(target, name){
            switch(typeof target[name]){
                case 'object':
                    return watchObj(target[name], callback);
                case 'function':
                    return target[name].bind(target);
                default:
                    return target[name];
            }
        }
    });
}

export {watchObj, EmailParser};