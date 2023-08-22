// Методы call() и apply() в JavaScript позволяют вызвать функцию с указанным контекстом и аргументами.
// Метод call() принимает первым параметром объект, который будет использоваться в качестве контекста выполнения функции, 
// а затем последовательность аргументов, которые будут переданы в функцию.
// Пример:


const person = {
	name: 'John',
	greet: function (greeting) {
		console.log(`${greeting}, ${this.name}!`);
	}
}

person.greet('Hello'); // выведет "Hello, John!"

const anotherPerson = {
	name: 'Jane'
}

person.greet.call(anotherPerson, 'Hi'); // выведет "Hi, Jane!"


// В этом примере мы создали объект person с методом greet, который выводит приветствие с именем объекта. 
// Затем мы создали другой объект anotherPerson и вызвали метод greet из объекта person, используя метод call() и передавая anotherPerson в качестве контекста выполнения функции.
// Метод apply() работает аналогично методу call(), но принимает аргументы в виде массива.
// Пример:


const numbers = [1, 2, 3, 4, 5];

const sum = function () {
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

console.log(sum.apply(null, numbers)); // выведет 15


// В этом примере мы создали массив numbers и функцию sum, которая суммирует переданные ей аргументы. 
// Затем мы вызвали функцию sum с помощью метода apply(), передавая null в качестве контекста выполнения функции и массив numbers в качестве аргументов.


// Декоратор – это обёртка вокруг функции, которая изменяет поведение последней. Основная работа по-прежнему выполняется функцией.

// В основном переадресация вызова выполняется с помощью apply:

let wrapper = function (original, arguments) {
	return original.apply(this, arguments);
};