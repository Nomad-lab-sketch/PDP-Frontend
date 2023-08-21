// ─── Object.keys, Values, Entries ──────────────────────────────────────────────

// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].


let user = {
	name: "John",
	age: 30
};

Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [["name", "John"], ["age", 30]]


// перебор значений
for (let value of Object.values(user)) {
	// console.log(value); // John, затем 30
}

// ─── Трансформации Объекта ───────────────────────────────────────────────────

let prices = {
	banana: 1,
	orange: 2,
	meat: 4,
};

let doublePrices = Object.fromEntries(
	// преобразовать в массив, затем map, затем fromEntries обратно объект
	Object.entries(prices).map(([key, value]) => [key, value * 2])
);