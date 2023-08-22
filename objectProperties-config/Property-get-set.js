// Свойства-геттеры и свойства-сеттеры - это 
// способы определения свойств объекта с помощью методов get и set.

// Свойство-геттер позволяет получить значение свойства, 
// а свойство-сеттер позволяет установить значение свойства. 
// Они могут быть определены с помощью метода Object.defineProperty() 
// или с помощью синтаксиса классов.

// Пример:

const obj = {
	_prop: 'value',
	get prop() {
		return this._prop;
	},
	set prop(value) {
		this._prop = value;
	}
};

console.log(obj.prop); // выведет "value"

obj.prop = 'new value'; // установит новое значение свойства

console.log(obj.prop); // выведет "new value"


Object.defineProperty(obj), 'prop', {
	get() {
		return this._prop
	},

	set(value) {
		this._prop = value
	}
}


// В этом примере мы создали объект obj с приватным свойством _prop, 
// которое мы будем использовать для хранения значения свойства prop. 
// Затем мы определили свойство-геттер и свойство-сеттер для prop, 
// которые будут получать и устанавливать значение _prop.

// Свойства-геттеры и свойства-сеттеры могут быть полезны для создания вычисляемых свойств 
// или для обеспечения контроля над доступом к свойствам объекта.

