export class Parody {
	constructor(props) {
		if (typeof props !== "object") {
			props = {}
		}
		this.props = props
		this.isMount =  false
		this.targetNode
	}

	bindMount(selector) {
		this.isMount = true
		this.targetNode = document.querySelector(selector)
		return this
	}
	// Все компоненты будут перередериваться в super render ниже (Топорно но укрепить компонентный подход)
	render(node) {
		if(this.isMount) {
			this.targetNode.innerHTML = ''
			this.targetNode.appendChild(node)
		}
		return node
	}
}

export function createNode(tagName, props) {
	let node = document.createElement(tagName)
	for(let name in props) { 
		node[name] = props[name]
	}
	return node
}

export function createParody(tag, props, ...children) {
	// Если передаем как функцию компонент в другие файлы тогда 
	if(typeof tag === 'function') {
		return (new tag(props)).render()
	}
	let node = document.createElement(tag)
	// пустой node list template записываем все в пустой темплате все дочерние вложенные теги , даллее апендим все в node
	let fragment =  document.createDocumentFragment()

	children.forEach(child => {
		// Делаем проверку строка или HTML элемент
		if(child instanceof HTMLElement) {
			fragment.appendChild(child)
		}
		else {
			let textNode = document.createTextNode(child)
			fragment.appendChild(textNode)

		}
		
	})

// Скрестить два объекта к узлу node записываем все ключи с пропса
// ключи второго объекта подставятся в объект первый 
	node.appendChild(fragment)
	Object.assign(node, props)
	return node
}