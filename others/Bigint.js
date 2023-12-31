// BigInt – это специальный числовой тип, который предоставляет
// возможность работать с целыми числами произвольной длины.

// Для того что бы создать значение типа bigint необходимо в конце добавить n 

const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

// В математических операциях мы не можем смешивать bigint и обычные числа:

console.log(1n + 2); // Error: Cannot mix BigInt and other types

// Операции сравнения, такие как <, >, работают с bigint и обычными числами как обычно:

console.log(2n > 1n); // true

console.log(2n > 1); // true

// В if или любом другом логическом операторе bigint число ведёт себя как обычное число.

// К примеру, в if bigint 0n преобразуется в false, другие значения преобразуются в true:
if (0n) {
	// никогда не выполнится
}