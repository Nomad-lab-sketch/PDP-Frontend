// Главные свойства DOM-узла:

// nodeType
// Свойство nodeType позволяет узнать тип DOM-узла.
//  Его значение – числовое: 1 для элементов,3 для текстовых узлов, и т.д. Только для чтения.

// nodeName/tagName
// Для элементов это свойство возвращает название тега (записывается в верхнем регистре, 
// за исключением XML-режима). Для узлов-неэлементов nodeName описывает, что это за узел.
// Только для чтения.

// innerHTML
// Внутреннее HTML-содержимое узла-элемента. Можно изменять.

// outerHTML
// Полный HTML узла-элемента. Запись в elem.outerHTML не меняет elem. 
// Вместо этого она заменяет его во внешнем контексте.

// nodeValue/data
// Содержимое узла-неэлемента (текст, комментарий). Эти свойства практически одинаковые, 
// обычно мы используем data. Можно изменять.

// textContent
// Текст внутри элемента: HTML за вычетом всех <тегов>. 
// Запись в него помещает текст в элемент, при этом все специальные 
// символы и теги интерпретируются как текст. 
// Можно использовать для защиты от вставки произвольного HTML кода.

// hidden
// Когда значение установлено в true, делает то же самое, что и CSS display:none.