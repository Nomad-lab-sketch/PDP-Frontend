// Бинарные побитовые операторы: & | ^ << >> >>>.
// Унарный побитовый оператор один: ~.
// Как правило, битовое представление числа используется для:

// Округления числа: (12.34^0) = 12.
// Проверки на равенство -1: if (~n) { n не -1 }.
// Упаковки нескольких битовых значений («флагов») в одно значение. 
// Это экономит память и позволяет проверять наличие комбинации флагов одним оператором &.
// Других ситуаций, когда нужны битовые маски.


// 1. Побитовый И (&): возвращает 1, если оба бита равны 1, иначе 0.
// 2. Побитовый ИЛИ (|): возвращает 1, если хотя бы один бит равен 1, иначе 0.
// 3. Побитовый исключающее ИЛИ (^): возвращает 1, если только один бит равен 1, иначе 0.
// 4. Побитовый НЕ (~): инвертирует все биты числа (меняет 0 на 1 и наоборот).
// 5. Сдвиг влево (<<): сдвигает все биты числа влево на указанное количество позиций. Недостающие биты заполняются нулями.
// 6. Сдвиг вправо с заполнением нулями (>>): сдвигает все биты числа вправо на указанное количество позиций. Недостающие биты заполняются нулями.
// 7. Сдвиг вправо с заполнением знаком (>>>): сдвигает все биты числа вправо на указанное количество позиций. Недостающие биты заполняются нулями, 
// а старший бит (знаковый бит) всегда заполняется нулем.

// Примеры использования побитовых операторов:

let a = 5; // 101 в двоичном виде
let b = 3; // 011 в двоичном виде

let c = a & b; // 001 (результат побитового И)
let d = a | b; // 111 (результат побитового ИЛИ)
let e = a ^ b; // 110 (результат побитового исключающего ИЛИ)
let f = ~a; // -6 (результат побитового НЕ)
let g = a << 1; // 1010 (результат сдвига влево на 1 позицию)
let h = a >> 1; // 10 (результат сдвига вправо на 1 позицию с заполнением нулями)
let i = a >>> 1; // 10 (результат сдвига вправо на 1 позицию с заполнением нулями)