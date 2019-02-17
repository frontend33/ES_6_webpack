import {Parody, createParody} from '../parody'
import InputNumber from './input-number'
export default class Cart extends Parody {
	constructor(props) {
		super(props)

		this.initState({
			products: [
					{price: 1000, rest: 10, current: 1},
					{price: 2000, rest: 5, current: 2}
			]
		})
	}
	onChange(index, val) {
		/*Реактивность круче чем во Vue 2 так как благодаря геттерам и сеттерам 
		из прокси за счет особенностей языка не позволяют отслеживать две операции
		удаление поле объекта и добавление нового
		*/ 
		// this.state запроксированный объект
			this.state.products[index].current = val
			this.render()
	}
	onAdd = () => {
		// Реализация Vue js
		  this.state.products.push({
            price: 500, 
            rest: 20, 
            current: 1
        });
		/* Реализация реакта
		let products = [...this.state.products, {
			price: 5000,
			rest: 20,
			current: 3
		}]
		// Склеиваем предыдущее состояние с новым в один массив
		this.setState({
			products
		})
		*/
	}

	onRemove(index) {
		this.state.products.splice(index,1)
		/* Мы копируем массив заного все элементы , но не нагружая оперативку , так как все
		элементы объекты, а они копируются по ссылке на прежние объекты 
		Чтобы удалить просим весь массив products 
		*/

		/*
		let products = [...this.state.products]
		products.splice(index, 1)
		// И просим положить новый массив с продуктами
		this.setState({
			products
		})

		*/
	}

	render() {
		let sum = this.state.products.reduce((total, item) => total + item.price * item.current, 0)
		console.log(sum + 'Сумма')
		let prod = this.state.products

		// при выводе списка мы map им в разметку 
		let inputs = this.state.products.map((item, i) => {
		    return <div> {item.price} <InputNumber min={1} max={item.rest} value={item.current}
		                        change={this.onChange.bind(this, i)}/>
		                         <input type="button" value = "X" onclick={this.onRemove.bind(this, i)}/>
		                        <hr/>
                </div>
		});

		return super.render(
		  <div>
		      {inputs}
		      <hr/>
		      <div>{sum}</div>
		      <input type="button" value = "+" onclick={this.onAdd}/>
		     
		  </div>
		);

		// return super.render(
		// 	// Теперь сюда подставляем любой дочерний класс (компонентный подход)
		// 	<div>
		// 		<InputNumber min ="1" max={prod[0].rest} value={prod[0].current} change = {this.onChange.bind(this,0)} />
		// 		<InputNumber min ="prod[1]" max={prod[1].rest} value= {prod[1].current} change = {this.onChange.bind(this,1)} />
		// 		<hr/>
		// 		<div>{sum}</div>
		// 	</div>	
		// )
		/*
			let div = document.createElement('div')
 
			this.state.products.forEach((item, index) => {
					let inp = (new InputNumber({
						min: 1,
						max: item.rest,
						value: item.current,
						change: this.onChange.bind(this, index)
					})).render()
					div.appendChild(inp)
			})
			let summary = document.createElement('div')
			summary.innerHTML = this.state.products.reduce((total, item) => total + item.price * item.current, 0)
			div.appendChild(summary)
			// Любой компонент из рендер функции должен вернуть, такой вызов
			return super.render(div)
			*/
	}
}