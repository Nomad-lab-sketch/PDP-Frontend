// События загрузки страницы:

// ─── Domcontentloaded ───────────────────────────────────────────────────────

// DOMContentLoaded генерируется на document, когда DOM готов. 
// Мы можем применить JavaScript к элементам на данном этапе.
// Скрипты, вроде <script>...</script> или <script src="..."></script> блокируют DOMContentLoaded, 
// браузер ждёт, пока они выполнятся.
// Изображения и другие ресурсы тоже всё ещё могут продолжать загружаться.

function ready() {
	console.log('DOM готов');

	// изображение ещё не загружено (если не было закешировано), так что размер будет 0x0
	console.log(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
}

document.addEventListener("DOMContentLoaded", ready);

// DOMContentLoaded определённо случится после скриптов

// Внешние таблицы стилей не затрагивают DOM, поэтому DOMContentLoaded их не ждёт.


// ─── Window.onload ───────────────────────────────────────────────────────────

// Событие load на window генерируется, когда страница и все ресурсы загружены. 
// Мы редко его используем, потому что обычно нет нужды ждать так долго.

window.onload = function () { // можно также использовать window.addEventListener('load', (event) => {
	console.log('Страница загружена');

	// к этому моменту картинка загружена
	console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
};

// Событие beforeunload на window генерируется, когда пользователь покидает страницу. 
// Если мы отменим событие, браузер спросит, на самом ли деле пользователь хочет уйти 
// (например, у нас есть несохранённые изменения).

window.onbeforeunload = function () {
	return false;
};

// Событие unload на window генерируется, когда пользователь окончательно уходит, 
// в обработчике мы можем делать только простые вещи, которые ни о чём не спрашивают пользователя и 
// не заставляют его ждать. Из-за этих ограничений оно редко используется. 
// Мы можем послать сетевой запрос с помощью navigator.sendBeacon.

let analyticsData = { /* объект с собранными данными */ };

window.addEventListener("unload", function () {
	navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
});

// document.readyState – текущее состояние документа, изменения можно отследить с помощью события 
// readystatechange:
// loading – документ грузится.
// interactive – документ прочитан, происходит примерно в то же время, что и DOMContentLoaded, но до него.
// complete – документ и ресурсы загружены, происходит примерно в то же время, что и window.onload, но до него.

function work() { /*...*/ }

if (document.readyState == 'loading') {
	// ещё загружается, ждём события
	document.addEventListener('DOMContentLoaded', work);
} else {
	// DOM готов!
	work();
}

document.addEventListener('readystatechange', () => console.log(document.readyState));