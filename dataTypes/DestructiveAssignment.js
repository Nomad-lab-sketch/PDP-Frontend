
/*=============================================
=            Деструктуризация массива         =
=============================================*/

let arr = ["Ilya", "Kantor"];

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstNameArr, surnameArr] = arr;


// ─── Присваивайте Чему Угодно С Левой Стороны ────────────────────────────────

let userSplit = {};
[userSplit.name, userSplit.surname] = "Ilya Kantor".split(' ');

// console.log(user.name); // Ilya
// console.log(user.surname); // Kantor


// ─── Цикл С .entries ─────────────────────────────────────────────────────────

let userEntries = {
	name: "John",
	age: 30
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(userEntries)) {
	alert(`${key}:${value}`); // name:John, затем age:30
}


// ─── Трюк Обмена Переменных ──────────────────────────────────────────────────

let guest = "Jane";
let admin = "Pete";

// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];


/*----------  Остаточные параметры «…»  ----------*/

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];


/*----------  Значения по умолчанию ----------*/

let [firstNameDefault, surnameDefault] = [];

// console.log(firstNameDefault); // undefined
// console.log(surnameDefault); // undefined


// Если мы хотим, чтобы значение «по умолчанию» заменило отсутствующее, мы можем указать его с помощью =:

let [name = "Guest", surname = "Anonymous"] = ["Julius"];


/*=====  End of Деструктуризация массива ======*/



/*=============================================
=            Деструктуризация объекта            =
=============================================*/

// Синтаксис:

let { var1, var2 } = { var1: 1, var2: 2 };

// ─── Остаток Объекта ─────────────────────────────────────────────────────────

let options = {
	title: "Menu",
	height: 200,
	width: 100
};

// title = свойство с именем title
// rest = объект с остальными свойствами
// let { title, ...rest } = options;

// ─── Вложенная Деструктуризация ──────────────────────────────────────────────

let opts = {
	size: {
		width: 100,
		height: 200
	},
	items: ["Cake", "Donut"],
	extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
	size: { // положим size сюда
		width,
		height
	},
	items: [item1, item2], // добавим элементы к items
	title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = opts;

/*=====  End of Деструктуризация объекта  ======*/


