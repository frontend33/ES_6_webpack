import 'babel-polyfill'
import Timer from './timer'
// Пробую require (старину) подключение файлов
let counter1 = require('./some.js')
import * as counter2 from './other'
import {gen, getDischarges} from './generator'
window.addEventListener('load', function() {
    let timer1 = new Timer(document.querySelector('.timer1'), 10)
    console.log(timer1)
    this.console.log(counter1.cnt)
    counter1.inc()
    counter1.inc()
    counter1.inc()
    this.console.log(counter1.cnt)

    this.console.log(counter2.get())
    counter2.inc()
    counter2.inc()
    counter2.inc()
    this.console.log(counter2.get())

    let arr = [100, 200, 300]

    for(let num of arr) {
        this.console.log(num)
    }
    for(let num in arr) {
        this.console.log(num)
    }

// Symbol уникальный индификатор
    let forPassport = Symbol()

    // Хотим добавить в объект информацию, но не хотим что бы выводилась на экран 
    let user = {
        firstName: 'Name',
        lastName: 'Last',
        [forPassport]: 12344343

    };
    for(let key in user) {
        this.console.log(`${key} : ${user[key]} `)
    }

    // В цикле User мы не видем forPassport в цикле так как присвоили Symbol, но можем легко обратиться там где будет нужно
    this.console.log(user[forPassport])

/* Нет symbol.iterator, а именно он говорит, что объект итерируемый Разработчики внедрили его что бы не порушить множество готовых сайтов
 Придуман Symbol никогда не будет ни чему равен, Вернем объект с ключом next которая является функцией
 Мы можем определить собственный метод перебора
 Вся логика for of иттеруруем пока истина , разработчики js не могли просто создать метод next у объекта , так как сломало бы 
 множество сайтов, была введена конструкция с невидимым в итерации ключом  [Symbol.iterator]
*/

    let someObj = { 
        to: 10,
        [Symbol.iterator]: function() {
            let current = 0;
            let stop = this.to;
            return {
                next() {
                    if(current<=stop) {
                        return {
                            done: false,
                            value: current ++
                        }
                    }
                    else {
                        // Если перебор завершен done: true
                        return {
                            done: true
                        }
                    }
                    // return {
                    //     done: true
                    // }
                }
            }
        }
    }
    for(let some of someObj) {
        this.console.log(some)
    }

    let someGen = gen(1,5);

    for(let  some of someGen) {
        this.console.log(some)
    }
    
    let someNumber = 13123213213213
    for (let num of getDischarges(someNumber)){
        this.console.log(num)
    }
}) 