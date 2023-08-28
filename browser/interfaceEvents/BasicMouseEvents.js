// Типы событий мыши

// mousedown/mouseup
// Кнопка мыши нажата/отпущена над элементом.

// mouseover/mouseout
// Курсор мыши появляется над элементом и уходит с него.

// mousemove
// Каждое движение мыши над элементом генерирует это событие.

// click
// Вызывается при mousedown , а затем mouseup над одним и тем же элементом, 
// если использовалась левая кнопка мыши.

// dblclick
// Вызывается двойным кликом на элементе.

// contextmenu
// Вызывается при попытке открытия контекстного меню, как правило, 
// нажатием правой кнопки мыши. Но, заметим, это не совсем событие мыши, 
// оно может вызываться и специальной клавишей клавиатуры.



// Состояние кнопки
// Левая кнопка (основная)	0
// Средняя кнопка (вспомогательная)	1
// Правая кнопка (вторичная)	2
// Кнопка X1 (назад)	3
// Кнопка X2 (вперёд)	4


// ─── Модификаторы: Shift Alt Ctrl И Meta ─────────────────────────────────────

// Свойства события:

// shiftKey: Shift
// altKey: Alt (или Opt для Mac)
// ctrlKey: Ctrl
// metaKey: Cmd для Mac

// Они равны true, если во время события была нажата соответствующая клавиша.

button.onclick = function (event) {
	if (event.altKey && event.shiftKey) {
		console.log('Ура!');
	}
};

// ─── Координаты: Clientx/y Pagex/y ─────────────────────────────────────────────

// Все события мыши имеют координаты двух видов:

// Относительно окна: clientX и clientY.
// Относительно документа: pageX и pageY.

// ─── Отключаем Выделение ─────────────────────────────────────────────────────

// Двойной клик мыши имеет побочный эффект, который может быть неудобен в некоторых интерфейсах: он выделяет текст.

<b ondblclick="alert('Клик!')" onmousedown="return false">
	Сделайте двойной клик на мне
</b>

// для того что бы предотвратить копирование нужно использовать свойство oncopy