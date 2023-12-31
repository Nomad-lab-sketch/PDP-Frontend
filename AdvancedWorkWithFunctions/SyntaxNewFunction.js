// ─── Синтаксис ───────────────────────────────────────────────────────────────

// let func = new Function([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');

// Главное отличие от других способов объявления функции, заключается в том, что 
// функция создаётся полностью «на лету» из строки, переданной во время выполнения.


// new Function позволяет превратить любую строку в функцию. 
// Например, можно получить новую функцию с сервера и затем выполнить её:


// ─── Замыкание ───────────────────────────────────────────────────────────────

// Обычно функция запоминает, где родилась, в специальном свойстве [[Environment]]. 
// Это ссылка на лексическое окружение (Lexical Environment), в котором она создана

// Но когда функция создаётся с использованием new Function, 
// в её [[Environment]] записывается ссылка не на внешнее лексическое окружение, 
// в котором она была создана, а на глобальное. 
// Поэтому такая функция имеет доступ только к глобальным переменным.

function getFuncConstructor() {
	let value = "test";

	let func = new Function('alert(value)');

	return func;
}

getFuncConstructor()(); // ошибка: value не определено

function getFunc() {
	let value = "test";

	let func = function () { alert(value); };

	return func;
}

getFunc()(); // "test", из лексического окружения функции getFunc


// Проблема в том, что перед отправкой JavaScript-кода на реальные работающие проекты код сжимается с помощью 
// минификатора – специальной программы, которая уменьшает размер кода, удаляя комментарии, 
// лишние пробелы, и, что самое главное, локальным переменным даются укороченные имена.

