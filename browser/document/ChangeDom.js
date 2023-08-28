
// Создаёт новый элемент с заданным тегом:
let div = document.createElement('div');

// Создаёт новый текстовый узел с заданным текстом:
let textNode = document.createTextNode('А вот и я');

// Вставка элемента
document.body.append(div);

// Вот методы для различных вариантов вставки:

// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.


// ─── Insertadjacenthtml Text Element ─────────────────────────────────────────

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.

div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
div.insertAdjacentHTML('afterend', '<p>Пока</p>');


// ─── Удаление Узлов ───────────────────────────────────────────────────────────

// Для удаления узла есть методы node.remove().
div.remove()

// ─── Клонирование Узлов: Clonenode ───────────────────────────────────────────

// Вызов elem.cloneNode(true) создаёт «глубокий» клон элемента – 
// со всеми атрибутами и дочерними элементами. 
// Если мы вызовем elem.cloneNode(false), тогда клон будет без дочерних элементов.
let div2 = div.cloneNode(true);

// ─── Documentfragment ────────────────────────────────────────────────────────

// DocumentFragment является специальным DOM-узлом, который 
// служит обёрткой для передачи списков узлов.

// Мы можем добавить к нему другие узлы, но когда мы вставляем его куда-то, 
// он «исчезает», вместо него вставляется его содержимое.

// Работает с коллекциями ноды, служит временной оберткой до того как узлы будут установлены в DOM 

function getListContent() {
	let fragment = new DocumentFragment();

	for (let i = 1; i <= 3; i++) {
		let li = document.createElement('li');
		li.append(i);
		fragment.append(li);
	}

	return fragment;
}

ul.append(getListContent()); // (*)
