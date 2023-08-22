// При передаче методов объекта в качестве колбэков, например для setTimeout, возникает известная проблема – потеря this.

let user = {
	firstName: "Вася",
	sayHi() {
		console.log(`Привет, ${this.firstName}!`);
	}
};

setTimeout(user.sayHi, 1000); // Привет, undefined!

// Это произошло потому, что setTimeout получил функцию sayHi отдельно от объекта user (именно здесь функция и потеряла контекст).

// ─── Привязать Контекст С Помощью Bind ───────────────────────────────────────



let user2 = {
	firstName: "Вася",
	sayHi() {
		console.log(`Привет, ${this.firstName}!`);
	}
};

let sayHi = user2.sayHi.bind(user); // (*)

sayHi(); // Привет, Вася!

setTimeout(sayHi, 1000); // Привет, Вася!


// ─── Частичное Применение ────────────────────────────────────────────────────

// let bound = func.bind(context, [arg1], [arg2], ...);
// Мы можем привязать не только this, но и аргументы. Это делается редко, но иногда может быть полезно.

function mul(a, b) {
	return a * b;
}

let double = mul.bind(null, 2);

console.log(double(3)); // = mul(2, 3) = 6

// Вызов mul.bind(null, 2) создаёт новую функцию double, которая передаёт вызов mul, 
// фиксируя null как контекст, и 2 – как первый аргумент. Следующие аргументы передаются как есть.
