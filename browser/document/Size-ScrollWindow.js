// Как узнать ширину и высоту окна браузера?
// Как получить полную ширину и высоту документа, включая прокрученную часть? 
// Как прокрутить страницу с помощью JavaScript?

// Для большинства таких запросов мы можем использовать корневой элемент документа 
// document.documentElement, который соответствует тегу <html>. 
// Однако есть дополнительные методы и особенности, которые необходимо учитывать.

// Ширина/высота видимой части документа 
// (ширина/высота области содержимого): document.documentElement.clientWidth/Height

// Ширина/высота всего документа со всей прокручиваемой областью страницы:
// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );

// Прокрутка:
// Прокрутку окна можно получить так: window.pageYOffset/pageXOffset.

// Изменить текущую прокрутку:
// window.scrollTo(pageX,pageY) – абсолютные координаты,
// window.scrollBy(x,y) – прокрутка относительно текущего места,
// elem.scrollIntoView(top) – прокрутить страницу так, чтобы сделать elem видимым (выровнять относительно верхней/нижней части окна).

