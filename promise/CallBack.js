// Множество действий в js асинхронные

function loadScript(src, callback) {
	let script = document.createElement('script');
	script.src = src;
	script.onload = () => callback(script);
	document.head.append(script);
}


// loadScript('/my/script.js');

// Код написанный после этой функции не будет дожидаться пока загрузится скрипт,
// Но иногда нам все же нужно дождаться пока асинхронные действия выполняться 

// Можно воспользоваться callback 

loadScript('/my/script.js', function () {
	myFunction() // теперь мы узнаем когда скрипт загрузиться
});


// В примерах выше мы не думали об ошибках. 
// А что если загрузить скрипт не удалось? Колбэк должен уметь реагировать на возможные проблемы.

function loadScript2(src, callback) {
	let script = document.createElement('script');
	script.src = src;

	script.onload = () => callback(null, script);
	script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

	document.head.append(script);
}

// Мы вызываем callback(null, script) в случае успешной загрузки 
// и callback(error), если загрузить скрипт не удалось.