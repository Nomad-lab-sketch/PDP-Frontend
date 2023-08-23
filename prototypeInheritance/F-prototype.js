let animal = {
	eats: true
};

function Rabbit(name) {
	this.name = name;
}

Rabbit.prototype = animal;

// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: 
// "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".

// F.prototype используется только в момент вызова new F

// ─── F.prototype По Умолчанию Свойство Constructor ───────────────────────────

/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/

// По умолчанию "prototype" – объект с единственным свойством constructor, 
// которое ссылается на функцию-конструктор.


let rabbit2 = new rabbit.constructor("Black Rabbit");

//   Мы можем использовать свойство constructor существующего объекта для создания нового.
