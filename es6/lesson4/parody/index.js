export class Parody {
	constructor(props) {
		if (typeof props !== "object") {
			props = {}
		}
		this.props = props
	}
	render() {
		let div = document.createElement('div')
		div.innerHTML = '1'
		return div
	}
}