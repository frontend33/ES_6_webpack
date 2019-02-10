import 'babel-polyfill'
import some from './lesson2/getters'
import proxyJs from './lesson2/proxy'
import VueGetters from './lesson2/vue-getters'
import VueProxy from './lesson2/vue-proxy'

console.log(some.cnt)
some.cnt = 5
// console.log(some.cnt)
// some.cnt = -10
// console.log(some.cnt)
// some.cnt =100
// console.log(some.cnt)

console.log(proxyJs.a)
proxyJs.a = 33
console.log(proxyJs.b)
proxyJs.b = 100
console.log(proxyJs.a)
proxyJs.a = 21
console.log(proxyJs.b)
proxyJs.b = 333

let vg = new VueGetters ({
    el: '.elem1',
    data: {
        clicks: 1,
        name: 'some'
    },
    template: `<div><h2>{{clicks}}</h2>{{name}}</div>`
})

document.querySelector('.elem1').addEventListener('click', function() {
    vg.data.clicks++
})

// proxy
let vp = new VueProxy ({
    el: '.elem2',
    data: {
        clicks: 1,
        name: 'some'
    },
    template: `<div><h2>{{clicks}}</h2>{{name}}</div>`
})
document.querySelector('.elem2').addEventListener('click', function() {
    vp.data.clicks++
})