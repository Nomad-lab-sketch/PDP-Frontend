// Глобальный объект предоставляет переменные и функции, доступные в любом месте программы.
// По умолчанию это те, что встроены в язык или среду исполнения.

// В браузере он называется window, в Node.js — global


// В браузере глобальные функции и переменные, объявленные с помощью var (не let/const!), становятся свойствами глобального объекта:

var gVar = 5;
console.log(window.gVar); // 5 (становится свойством глобального объекта)