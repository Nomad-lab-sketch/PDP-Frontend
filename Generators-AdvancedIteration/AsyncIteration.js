// Асинхронные итераторы и генераторы - это расширение концепции генераторов, 
// которое позволяет работать с асинхронными операциями. 
// Они используются для управления асинхронным кодом, когда необходимо получить значения 
// из асинхронных источников данных.

// Асинхронный генератор объявляется с помощью ключевого слова async перед знаком *, 
// а ключевое слово yield заменяется на await:

async function* myAsyncGenerator() {
	yield await Promise.resolve(1);
	yield await Promise.resolve(2);
	yield await Promise.resolve(3);
}

// Асинхронный итератор может быть получен из асинхронного генератора с помощью метода 
// Symbol.asyncIterator():

const asyncGenerator = myAsyncGenerator();
(async function () {
	console.log(await asyncGenerator.next()); // { value: 1, done: false }
	console.log(await asyncGenerator.next()); // { value: 2, done: false }
	console.log(await asyncGenerator.next()); // { value: 3, done: false }
	console.log(await asyncGenerator.next()); // { value: undefined, done: true }
})();

(async function () {
	for await (let elem of asyncGenerator) {
		console.log(elem)
	}
})

// Асинхронные итераторы и генераторы могут быть использованы для работы с асинхронными операциями, 
// такими как чтение файлов, запросы к базе данных или API. 
// Они позволяют получать данные асинхронно и последовательно, 
// что может быть полезно при обработке больших объемов данных.