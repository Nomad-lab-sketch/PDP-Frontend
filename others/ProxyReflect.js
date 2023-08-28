// Proxy и Reflect - это новые возможности в JavaScript, которые позволяют создавать 
// объекты-прокси и манипулировать поведением объектов.

// Объект-прокси - это объект, который оборачивает другой объект и может
//  перехватывать операции с ним. При этом происходит прозрачное для пользователя 
// изменение поведения объекта. Например, можно создать прокси для объекта, который 
// будет логировать все операции с ним, или для объекта, который будет проверять 
// типы данных при присваивании свойств.

// Reflect - это встроенный объект, который предоставляет методы для работы 
// с объектами-прокси. Он позволяет вызывать методы и получать свойства объекта, 
// а также управлять поведением прокси.

// Пример использования Proxy:


let target = {
	name: 'John',
	age: 30
};

let handler = {
	get: function (target, property) {
		console.log(`Getting ${property} value`);
		return target[property];
	},
	set: function (target, property, value) {
		console.log(`Setting ${property} value to ${value}`);
		target[property] = value;
	}
};

let proxy = new Proxy(target, handler);

proxy.name; // "Getting name value", "John"
proxy.age = 35; // "Setting age value to 35"

console.log(target.age); // 35


// Пример использования Reflect:


let target2 = {
	name: 'John',
	age: 30
};

let proxy = new Proxy(target2, {});

Reflect.get(proxy, 'name'); // "John"
Reflect.set(proxy, 'age', 35);

console.log(target2.age); // 35