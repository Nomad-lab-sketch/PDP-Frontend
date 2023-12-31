// В JavaScript каждый объект имеет встроенный прототип, 
// который является ссылкой на другой объект. 
// Этот прототип используется для наследования свойств и методов. 

// Например, у всех объектов есть прототип Object.prototype, 
// который содержит базовые методы, такие как toString() и hasOwnProperty(). 

// Также существуют встроенные прототипы для различных типов данных, 
// таких как Array.prototype, String.prototype, Number.prototype и т.д. 

// Можно использовать эти прототипы для добавления новых методов 
// и свойств к объектам этих типов данных. 
// Например, можно добавить новый метод для массива, 
// который будет суммировать все элементы массива:


Array.prototype.sum = function () {
	return this.reduce((acc, val) => acc + val);
}

const arr = [1, 2, 3];
console.log(arr.sum()); // 6


// Однако, следует быть осторожным при изменении встроенных прототипов, 
// так как это может повлиять на другие части кода и привести к непредсказуемому поведению.