// В CommonJS экспорт осуществляется с помощью объекта module.exports. Например:


// module.js
function add(a, b) {
	return a + b;
}
module.exports = { add };


// Импорт осуществляется с помощью функции require. Например:


// main.js
const { add } = require('./module');
console.log(add(2, 3)); // 5


// В ES модулях экспорт осуществляется с помощью ключевого слова export. Например:


// module.js
export function add(a, b) {
	return a + b;
}


// Импорт осуществляется с помощью ключевого слова import. Например:


// main.js
import { add } from './module';
console.log(add(2, 3)); // 5


// Мы также можем использовать as, чтобы импортировать под другими именами.
// Например, для краткости импортируем sayHi в локальную переменную hi, а sayBye импортируем как bye:

import { sayHi as hi, sayBye as bye } from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!

// Аналогично экспорт


// Так же можно экспортировать модули по умолчанию либо импортировать -default-

export default class User { // просто добавьте "default"
	constructor(name) {
		this.name = name;
	}
}


import { default as User, sayHi } from './user.js';

new User('John');

// Дефолтными экспортами лучше не пользоваться т.к при импорте можно указать 
// любое имя модуля что может запутать
// других разработчиков