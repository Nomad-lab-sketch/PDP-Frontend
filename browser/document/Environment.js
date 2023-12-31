
// ─── Dom ─────────────────────────────────────────────────────────────────────

// Document Object Model, сокращённо DOM – объектная модель документа,
// которая представляет все содержимое страницы в виде объектов, которые можно менять.

// Объект document – основная «входная точка». 
// С его помощью мы можем что-то создавать или менять на странице.

// заменим цвет фона на красный,
document.body.style.background = "red";

// а через секунду вернём как было
setTimeout(() => document.body.style.background = "", 1000);


// ─── Bom - browser Object Model ────────────────────────────────────────────────

// Объектная модель браузера (Browser Object Model, BOM) – это дополнительные объекты, 
// предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.

// Например:
// Объект navigator даёт информацию о самом браузере и операционной системе. 
// Среди множества его свойств самыми известными являются: 
// navigator.userAgent – информация о текущем браузере, и 
// navigator.platform – информация о платформе (может помочь в понимании того, 
// в какой ОС открыт браузер – Windows/Linux/Mac и так далее).
// Объект location позволяет получить текущий URL и перенаправить браузер по новому адресу.

console.log(location.href); // показывает текущий URL
if (confirm("Перейти на Wikipedia?")) {
	location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
}

