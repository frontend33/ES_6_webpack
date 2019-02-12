import {Parody} from '../parody'
import InputNumber from './input-number'
export default class Cart extends Parody {
	constructor(props) {
		super(props)

		this.state = {
			products: [
					{price: 1000, rest: 10, current:1},
					{price: 2000, rest: 5, current:1}
			]
		}
	}
	onChange(index, val){
			this.state.products[index].current = val
			console.log(this.state)
	}
	render() {
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
			return div
	}
}