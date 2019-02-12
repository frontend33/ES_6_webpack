import {Parody} from '../parody'
export default class InputNumber extends Parody {
	constructor(props) {
		super(props)
		// Следим за изменениями инпута во Vue мы бы диспатчили storage с Vuex 
		this.onChange = ('change' in props) ? props.change : function (){}
	}

	_normulizeValue(val) {
		// Оптимизируем значения, что бы они не превышали значения из Cart.state.products
		let newVal1 = parseInt(val)
		if(isNaN(newVal1) || newVal1 < this.props.min){
			newVal1	= this.props.min
		}
		else if(newVal1 > this.props.max) {
			newVal1	= this.props.max
		}
		// Если в props  такой код this.onChange не спустили вызовится
		this.onChange(newVal1)
	}

	onChange = val => {
		console.log(val + 'in parent')
	}
	render() {
		let min = document.createElement('input')
		min.setAttribute('type', 'button')
		min.value = '-'
		min.addEventListener('click', e => {
			console.log('min')
		})

		let plus = document.createElement('input')
		plus.setAttribute('type', 'button')
		plus.value = '+'
		plus.addEventListener('click', e => {
			console.log('plus')
		})

		let num = document.createElement('input')
		num.className = 'inputNumber_value'
		num.setAttribute('type', 'text')
		num.value = this.props.value
		num.addEventListener('change', (e) => {
			this._normulizeValue(e.target.value)
		})

		let root = document.createElement('div')
		root.appendChild(min)
		root.appendChild(num)
		root.appendChild(plus)
		return root

	}
}