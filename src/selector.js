// YOUR CODE HERE

class $ {
	constructor(str) {
		if(str.startsWith('.')) {
			this.elements = [...document.getElementsByClassName(str.slice(1))]
		} else if (str.startsWith('#')) {
			this.elements = [document.getElementById(str.slice(1))]
		} else {
			this.elements = [...document.getElementsByTagName(str)]
		}
	}

	hide() {
		this.elements.map(ele => ele.style.display = 'none')
		return this
	}

	show() {
		this.elements.map(ele => ele.style.display = 'inherit') 
		return this
	}

	addClassName(arg) {
		this.elements.map(ele => ele.classList.add(arg))
		return this
	}

	removeClassName(arg) { this.elements.map(ele => ele.classList.remove(arg))
		return this
	}

	text(txt) { this.elements.map(ele => ele.innerHTML = txt)
		return this
	}

	addChild(tag) { this.elements.map(ele => { 
		const x = document.createElement(tag) 
		ele.appendChild(x)
		})
	}
}
