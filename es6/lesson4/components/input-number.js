import {Parody, createParody} from '../parody'
export default class InputNumber extends Parody {
	constructor(props) {
		super(props)
		// Следим за изменениями инпута во Vue мы бы диспатчили storage с Vuex 
		this.onChange = ('change' in props) ? props.change : function (){}
	}

	_normalizeValue(val) {
		// Оптимизируем значения, что бы они не превышали значения из Cart.state.products
		let newVal1 = parseInt(val)
		if(isNaN(newVal1) || newVal1 < this.props.min) {
			newVal1	= this.props.min
		}
		else if(newVal1 > this.props.max) {
			newVal1	= this.props.max
		}
		// Если в props  такой код this.onChange не спустили вызовится
		this.onChange(newVal1)
	}

 // tag при помощи jsx умно парсит данные 
	render(){
        return super.render(
            <div className="inputNumber">
                <input type="button" value="-" className="inputNumber__min"
                       onclick={() => this._normalizeValue(this.props.value - 1)} 
                />
                <input type="text" value={this.props.value} className="inputNumber__value"
                       onchange={(e) => this._normalizeValue(e.target.value)} />
                 <input type="button" value="+" className="inputNumber__plus"
                        onclick={() => this._normalizeValue(this.props.value + 1)} 
                 />
            </div>
        );
    }
}