// Браузер позволяет отслеживать загрузку сторонних ресурсов: скриптов, ифреймов, изображений и др.

// Для этого существуют два события:

// load – успешная загрузка,
// error – во время загрузки произошла ошибка.


// ─── Загрузка Скриптов ───────────────────────────────────────────────────────

// Мы можем загрузить этот скрипт динамически:

let script = document.createElement('script');
script.src = "my.js";

document.head.append(script);

// …Но как нам вызвать функцию, которая объявлена внутри того скрипта? 
// Нам нужно подождать, пока скрипт загрузится, и только потом мы можем её вызвать.


// Главный помощник – это событие load. Оно срабатывает после того, как скрипт был загружен и выполнен.
let script = document.createElement('script');

// мы можем загрузить любой скрипт с любого домена
script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"
document.head.append(script);

script.onload = function () {
	// в скрипте создаётся вспомогательная переменная с именем "_"
	console.log(_.VERSION); // отображает версию библиотеки
};


// Ошибки, которые возникают во время загрузки скрипта, могут быть отслежены с помощью события error.

script.onerror = function () {
	console.log("Ошибка загрузки " + this.src); // Ошибка загрузки https://example.com/404.js
};

// Мы не можем получить описание HTTP-ошибки. Мы не знаем, была ли это ошибка 404 или 500, или какая-то другая. 
// Знаем только, что во время загрузки произошла ошибка.

// ─── Другие Ресурсы ──────────────────────────────────────────────────────────

// События load и error также срабатывают и для других ресурсов, а вообще, для любых ресурсов, 
// у которых есть внешний src.

let img = document.createElement('img');
img.src = "https://js.cx/clipart/train.gif"; // (*)

img.onload = function () {
	alert(`Изображение загружено, размеры ${img.width}x${img.height}`);
};

img.onerror = function () {
	alert("Ошибка во время загрузки изображения");
};


// ─── Ошибка В Скрипте С Другого Источника ────────────────────────────────────

// Чтобы разрешить кросс-доменный доступ, нам нужно поставить тегу <script> атрибут crossorigin, и, 
// кроме того, удалённый сервер должен поставить специальные заголовки.

// Атрибут crossorigin отсутствует – доступ запрещён.
// crossorigin="anonymous" – доступ разрешён, если сервер отвечает с заголовком 
// Access-Control-Allow-Origin со значениями * или наш домен. Браузер не отправляет 
// авторизационную информацию и куки на удалённый сервер.

// crossorigin="use-credentials" – доступ разрешён, если сервер отвечает с заголовками 
// Access-Control-Allow-Origin со значением наш домен и Access-Control-Allow-Credentials: true. 
// Браузер отправляет авторизационную информацию и куки на удалённый сервер.