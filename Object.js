// ─── Ссылки ──────────────────────────────────────────────────────────────────

// Ссылка - это адрес по которому компьютер находит участок памяти в которой хранится объект
let a = {};
let b = a;
// копирование объектной переменной создаёт ещё одну ссылку на тот же объект
// a == b > true т.к a и b ссылаются на один и тот же объект

let c = {};
let d = {};
// c == d > false т.к это 2 независимых объекта


// ─── Клонирование Объектов ───────────────────────────────────────────────────

let user = {
	name: "John",
	age: 30
};

/*----------  for in  ----------*/

let clone = {};

for (let key in user) {
	clone[key] = user[key]
}


/*----------  assign  ----------*/

const permissions = { canView: true };

// копируем все свойства из permissions в user
Object.assign(user, permissions)

// теперь user = { name: "John", canView: true, canEdit: true }
// Если скопированное имя свойства уже существует, оно будет перезаписано
// Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:

let clone2 = Object.assign({}, user);

/*----------  spread  ----------*/

const cloneSpread = { ...user };


// ─── Вложенное Клонирование ──────────────────────────────────────────────────

let userDeep = {
	name: "John",
	sizes: {
		height: 182,
		width: 50
	}
};

/*----------  structuredClone  ----------*/

// structuredClone поддерживается только современными браузерами 

// const cloneStructuredClone = structuredClone(userDeep);

/*----------  JSON  ----------*/

// При таком подходе теряются все методы у объектов
const cloneJSON = JSON.parse(JSON.stringify(userDeep));

/*----------  Рекурсия  ----------*/

function deepCopy(obj) {
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}

	let copy = Array.isArray(obj) ? [] : {};

	for (let key in obj) {
		copy[key] = deepCopy(obj[key]);
	}

	return copy;
}

let cloneRecursion = deepCopy(userDeep);

/*----------  lodash  ----------*/

// const cloneLodash = cloneDeep(userDeep); 