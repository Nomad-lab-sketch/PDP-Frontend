// - Promise.resolve() - создает промис, который успешно завершается с переданным значением.

// - Promise.reject() - создает промис, который завершается с ошибкой, 
// переданной в качестве аргумента.

// - Promise.all() - принимает массив промисов и возвращает новый промис, 
// который завершается успешно, когда все промисы из массива завершаются успешно. 
// Если хотя бы один промис завершается ошибкой, то новый промис завершается с этой ошибкой.

Promise.all([
	new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
	new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
	new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(console.log()); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива

// - Promise.race() - принимает массив промисов и 
// возвращает новый промис, который завершается так же, 
// как первый из промисов из массива (успешно или с ошибкой).

Promise.race([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log()); // 1

// Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся 
// и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
// status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
// value – результат, если успешно или reason – ошибка, если нет.

let urls = [
	'https://api.github.com/users/iliakan',
	'https://api.github.com/users/remy',
	'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
	.then(results => { // (*)
		results.forEach((result, num) => {
			if (result.status == "fulfilled") {
				console.log(`${urls[num]}: ${result.value.status}`);
			}
			if (result.status == "rejected") {
				console.log(`${urls[num]}: ${result.reason}`);
			}
		});
	});

// Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. 
// Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.

Promise.any([
	new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log()); // 1