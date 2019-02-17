export class Parody {
	constructor(props) {
		if (typeof props !== "object") {
			props = {}
		}
		this.props = props
		this.isMount =  false
		this.targetNode
	}
	initState(obj) {
		this.state = watchObj(obj, this.render.bind(this))
	}
// В реакте предыдущее состояние склеивает с новым
	setState(newState){
		Object.assign(this.state, newState)
		this.render()
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
	function addChildren(child){
		// Делаем проверку строка или HTML элемент
		if(child instanceof HTMLElement) {
			fragment.appendChild(child)
		}
		else if(typeof child === 'object'){
			for( let elem in child)
			addChildren(child[elem])
		}
		else {
			let textNode = document.createTextNode(child)
			fragment.appendChild(textNode)

		}
	}
	children.forEach(addChildren)

// Скрестить два объекта к узлу node записываем все ключи с пропса
// ключи второго объекта подставятся в объект первый 
	node.appendChild(fragment)
	Object.assign(node, props)
	return node
}
function watchObj(node, callback){
		let reactiveFunction = {
			push: true,
			pop: true,
			splice: true,
			slice: true,
			shift: true,
			unshift: true,
			sort: true
		}
    return new Proxy(node, {
        set(target, name, value){
            target[name] = value;
            callback(name, value);
            return true;
        },
        get(target, name){
            switch(typeof target[name]){
                case 'object':
                    return watchObj(target[name], callback);
                case 'function':
                // Если name в списке реактивных функций
                		if(name in reactiveFunction) {
                			return function(...args) {
                				let res = target[name].apply(target, args)
                					callback()
                					return res
                				}
                		} else {
                			return target[name].bind(target);
                		}
                    
                default:
                    return target[name];
            }
        }
    });
}