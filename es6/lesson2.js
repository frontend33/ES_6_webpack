import 'babel-polyfill'
import Timer from './lesson2/timer.js'
let some = {
	i: 2
}
 function double (n,m) {
		return this.i *this.i * n *m
	}
// console.log(some.double(3))
// В call передаем до бесконечности после контекста
console.log(double.call(some, 3,2))
// а в apply передаем массив
console.log(double.apply(some, [3,2]))

let timer = new Timer(document.querySelector('.timer1'), 100)
/* bind строго привязывает контекст навсегда вызывая новую функцию 
Для bind и стрелочных функций не работает метож call и apply
*/
let double2 = double.bind(some)
console.log(double2(2,3))

// Карринг когда помимо сторогой привязки контекста мы строго привязываем аргументы
// Первый аргумент строго забит и нельзя изменить
let double3 = double.bind(some, 3)
console.log(double3(1,2))