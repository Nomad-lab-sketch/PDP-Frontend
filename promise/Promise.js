// Promise – это специальный объект, который содержит своё состояние.
// Вначале pending («ожидание»), 
// затем – одно из: fulfilled («выполнено успешно») или 
// rejected («выполнено с ошибкой»).

const promise = new Promise(function (resolve, reject) {
	// Эта функция будет вызвана автоматически

	// В ней можно делать любые асинхронные операции,
	// А когда они завершатся — нужно вызвать одно из:
	// resolve(результат) при успешном выполнении
	// reject(ошибка) при ошибке
})


// Promise после reject/resolve – неизменны 


// ─── Параллельное Выполнение ─────────────────────────────────────────────────

Promise.all([
	httpGet('/article/promise/user.json'),
	httpGet('/article/promise/guest.json')
]).then(results => {
	console.log(results);
});


Promise.race([
	httpGet('/article/promise/user.json'),
	httpGet('/article/promise/guest.json')
]).then(firstResult => {
	firstResult = JSON.parse(firstResult);
	console.log(firstResult.name); // iliakan или guest, смотря что загрузится раньше
});

// В отличие от Promise.all, результатом будет только первый успешно выполнившийся промис из списка. Остальные игнорируются.

