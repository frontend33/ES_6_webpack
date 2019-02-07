/*Метод gen генерирует объект итерируемые, при каждом вызове next будет вызываться метод yield
Генератор возможность сделать итератор удобным способом
*/
export function *gen(from,to) {
	for(let i= from; i <= to; i++){ 
		console.log('next yield')
		yield i
	}
}

// локальная функция модуля
function getNumeral(number, discharge) {
	return parseInt((number % discharge) / (discharge / 10))
}
// Генератор
export function* getDischarges(number) {
	let divider = 10
	while(number % divider !== number){
		yield getNumeral(number, divider)
		divider *= 10
	}
	yield getNumeral(number, divider)
}