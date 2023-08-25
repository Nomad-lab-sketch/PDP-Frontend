// async await просто сокращенный синтаксис для промисов


async function foo() { // async промисифицирует функцию, то есть теперь функция foo вернет промис 
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("готово!"), 1000)
	});

	let result = await promise; // будет ждать, пока промис не выполнится (*)
	// Пока не выполниться промис дальнейшее выполнение кода будет заблокировано
}

// Обработка ошибок происходит следующим образом 


async function fooErr() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("готово!"), 1000)
	});

	try {
		let result = await promise;
	} catch (err) {
		console.log(err)
	}
}