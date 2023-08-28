// Событие – это сигнал от браузера о том, что что-то произошло.
// Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).

// События мыши:

// click – происходит, когда кликнули на элемент левой кнопкой мыши 
// (на устройствах с сенсорными экранами оно происходит при касании).

// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.

// mouseover / mouseout – когда мышь наводится на / покидает элемент.

// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.

// mousemove – при движении мыши.


// События на элементах управления:

// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>.
// Клавиатурные события:

// keydown и keyup – когда пользователь нажимает / отпускает клавишу.
// События документа:

// DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
// CSS events:

// transitionend – когда CSS-анимация завершена.


// ─── Обработчики Событий ─────────────────────────────────────────────────────

// Всему эту многообразию можно назначить обработчик событий 

<input value="Нажми меня" onclick="console.log('Клик!')" type="button"></input>

// Обработчик всегда хранится в свойстве DOM-объекта, а атрибут – лишь один из способов его инициализации.

// Так как у элемента DOM может быть только одно свойство с именем onclick, 
// то назначить более одного обработчика так нельзя.

// ─── Доступ К Элементу Через This ────────────────────────────────────────────

// Внутри обработчика события this ссылается на текущий элемент, то есть на тот, 
// на котором, как говорят, «висит» (т.е. назначен) обработчик.

// <button onclick="console.log(this.innerHTML)">Нажми меня</button>

// ─── Addeventlistener ────────────────────────────────────────────────────────

// Фундаментальный недостаток описанных выше способов назначения обработчика – 
// невозможность повесить несколько обработчиков на одно событие.

element.addEventListener(event, handler, [options]);

// event
// Имя события, например "click".
// handler
// Ссылка на функцию-обработчик.
// options

// Для удаления обработчика следует использовать removeEventListener:
element.removeEventListener(event, handler, [options]);

// ─── Объект События ──────────────────────────────────────────────────────────

// Когда происходит событие, браузер создаёт объект события, 
// записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

elem.onclick = function (event) {
	// вывести тип события, элемент и координаты клика
	alert(event.type + " на " + event.currentTarget);
	alert("Координаты: " + event.clientX + ":" + event.clientY);
};

// Некоторые свойства объекта event:

// event.type
// Тип события, в данном случае "click".
// event.currentTarget

// Элемент, на котором сработал обработчик. Значение – обычно такое же, как и у 
// this, но если обработчик является функцией-стрелкой или при помощи bind привязан другой объект 
// в качестве this, то мы можем получить элемент из event.currentTarget.
// event.clientX / event.clientY

// Координаты курсора в момент клика относительно окна, для событий мыши.

// ─── Объект-обработчик: Handleevent ──────────────────────────────────────────

// Мы можем назначить обработчиком не только функцию, но и объект при помощи addEventListener.
//  В этом случае, когда происходит событие, вызывается метод объекта handleEvent.

elem.addEventListener('click', {
	handleEvent(event) {
		alert(event.type + " на " + event.currentTarget);
	}
});

// Мы также можем использовать класс для этого

class Menu {
	handleEvent(event) {
		// mousedown -> onMousedown
		let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
		this[method]();
	}

	onMousedown() {
		elem.innerHTML = "Кнопка мыши нажата";
	}

	onMouseup() {
		elem.innerHTML += "...и отжата.";
	}
}

let menu = new Menu();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);