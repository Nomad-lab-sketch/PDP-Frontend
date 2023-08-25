let animal = {
	eat: null,
	jump() {
		console.log("Jump")
	},
}


let wolf = {
	walking: true,
	__proto__: animal
}

console.log(wolf.jump());

// Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]

// Свойство __proto__ немного устарело, оно существует по историческим причинам. 
// Современный JavaScript предполагает, что мы должны использовать функции 
// Object.getPrototypeOf/Object.setPrototypeOf

// Прототип используется только для чтения свойств.
// Операции записи/удаления работают напрямую с объектом.

// Операции записи/удаления работают непосредственно с объектом, 
// они не используют прототип (если это обычное свойство, а не сеттер).
// Если мы вызываем obj.method(), а метод при этом взят из прототипа, 
// то this всё равно ссылается на obj. Таким образом, 
// методы всегда работают с текущим объектом, даже если они наследуются.