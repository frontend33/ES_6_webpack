import 'babel-polyfill'
import Cart from './components/cart'

let cart = new Cart()
console.log(cart)
document.querySelector('.sample').appendChild(cart.render())