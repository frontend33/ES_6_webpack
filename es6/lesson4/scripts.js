import 'babel-polyfill'
import Cart from './components/cart'

(new Cart()).bindMount('.sample').render()
// document.querySelector('.sample').appendChild(cart.render())