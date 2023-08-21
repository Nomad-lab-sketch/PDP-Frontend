const hello = 'Hello';

const executionContext = function () { // контекст выполнения функции
	const name = 'John Smith';

	const getName = function () { // контекст выполнения функции
		return name;
	}

	const sayHello = function () { // контекст выполнения функции
		console.log(hello + ', ' + getName());
	}

	sayHello();
}

// Когда интерпретатор JavaScript выполняет код, по умолчанию контекстом выполнения является глобальный контекст. 
// Каждый вызов функции приводит к созданию нового контекста выполнения.

// По сути контекст выполнения представляет собой некую обертку для выполняемого кода, содержащую определенные вспомогательные компоненты для отслеживания состояния программы.