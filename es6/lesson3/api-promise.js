import{mathOp} from './math'

function TimeoutPromise(time) {
    return new Promise(function(resolve) {
        window.setTimeout(resolve, time)
    })
}


function userReg() {
    return new Promise(function(resolve, reject) {
        TimeoutPromise(500).then(() => {
            // Можем обернуть в try catch ошибки и в случае ошибки вся цепочка промисов остановится
            // try{
            //     mathOp(1, parseInt(Math.random() *2), '/')
            // }
            // catch(e) {
            //     reject({msg: e.message})
            // }
           
            if(Math.random() > 0.2) {
                resolve({
                    msg: "+ registration",
                    id: 1
                });
            }
            else{
                reject({msg: "error in registration"});
            }
        })
    })
   
}

function userAuth(id, onSuccess, onError) {
    return new Promise(function(resolve, reject) {
        window.setTimeout(function(){
            if(Math.random() > 0.2){
                resolve({
                    msg: "+ auth " + id,
                    token: "ghegkjhjewhrklwejo"
                });
            }
            else{
                reject({msg: "error in auth"});
            }
        }, 500);
    })
}

function userData(token, onSuccess, onError) {
    return new Promise(function(resolve, reject) {
        window.setTimeout(function() {
            if(Math.random() > 0.2) {
                resolve({
                    msg: "+ data by token " + token,
                    data: {
                        id: 1,
                        name: 'Some'
                    }
                });
            }
            else{
                reject({msg: "error in data"});
            }
        }, 500);
    })
}

export {userReg, userAuth, userData};