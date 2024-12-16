// function getLastElementMeta(array) {
//   const lastElement = array.length - 1;
//   const lastIndex = array[lastElement];
//    return [lastElement, lastIndex];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"]));           // [2, "pear"]
// console.log(getLastElementMeta(["apple", "peach"]));                   // [1, "peach"]
// console.log(getLastElementMeta(["apple"]));                             // [0, "apple"]

//*****************TODO Метод масиву join(delimiter)*******************/

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'
// ***********************************************************/

// function transformString(string) {
// 	const words = string.split("_");
// 	return words.join("-");
// }

// transformString("user_age"); // "user-age"
// transformString("price_per_droid"); // "price-per-droid"

//************************OPTIMIZE TEST****************************/

// function getLength(array) {
//   const words = array.join("");
//   return words.length;
// }

// function getLength(array) {
//   return array.join("").length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // 22
// console.log(getLength(["M", "a", "n", "g", "o"])); // 5
// console.log(getLength(["top", "picks", "for", "you"])); // 14

//*******************TODO Метод рядків split(delimiter)*****************/

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]


//******************OPTIMIZE TEST*****************/

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   return words.length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); //  50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //  100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); //  160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); //  80



//***********************TODO Метод масиву slice(begin, end) *******************/

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

//Результат роботи методу slice() можна зберегти у змінну для подальшого використання:

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// const result = planets.slice(1, 3);
// console.log(result); // ["Mars", "Venus"]

//Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву:

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

//Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]


// Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів
// (тобто стільки елементів з кінця, скільки вказано в параметрі begin)

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

//***********************OPTIMIZE TEST************************/

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls); // ["apple", "plum"]
// console.log(nonExtremeEls); // ["plum", "pear", "orange"]
// console.log(lastThreeEls); // ["pear", "orange", "banana"]

//********** TODO concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів. */

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];


// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];


// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray));
// // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray));
// // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];


//***********************OPTIMIZE TEST************************/

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);


// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Peach", "Houston"]
// console.log(allClients); // ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]


//***************TODO Метод масиву indexOf(elem)****************/

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

//***********************OPTIMIZE TEST************************/
// function getSlice(array, value) {
//     const index = array.indexOf(value); // Находим индекс элемента
//     // if (index === -1) {
//     //     return []; // Если элемент не найден, возвращаем пустой массив
//     // }
//     return array.slice(0, index + 1);// Возвращаем подмассив от начала (0) до найденного элемента (index + 1) (включительно)
//     // и есле не найден элемент возвращаем пустой массив

    //***************** Варіант или так****************/

    // return index !== -1 ? array.slice(0, index + 1) : [];// Возвращаем подмассив или пустой массив

    //****************Варіант или так****************/
    

    //return index !== -1 && array.slice(0, index + 1) || []; // Возвращаем подмассив или пустой массив
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // []

//***************TODO Метод масиву push()****************/

// array.push(element1, element2, ..., elementN);
// де:

// array — це вихідний масив, до якого потрібно додати елементи;
// element1, element2, ..., elementN — елементи, які необхідно додати в кінець масиву.


// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]
// const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

//***********************OPTIMIZE TEST************************/

// function createArrayOfNumbers(min, max) {
//     const numbers = []; // Создаем пустой массив для хранения чисел

//     for (let i = min; i <= max; i++) { // Проходим от min до max включительно
//         numbers.push(i); // Добавляем текущее число в массив
//     }

//     return numbers; // Возвращаем массив чисел
// }

// // Примеры вызовов функции
// console.log(createArrayOfNumbers(1, 3));   // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

//***************TODO Ітерація по масиву for ****************/

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//     console.log(planets[i]);
    
//***********************OPTIMIZE TEST************************/

// function calculateTotalPrice(order) {
//     let total = 0; // Инициализируем переменную для хранения общей суммы

//     for (let i = 0; i < order.length; i++) { // Проходим по каждому элементу массива
//         total += order[i]; // Добавляем текущий элемент к общей сумме
//     }

//     return total; // Возвращаем общую сумму
// }

// // Примеры вызовов функции
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291]));   // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

//***********************OPTIMIZE TEST************************/

// function getEvenNumbers(start, end) {
//     const numbers = []; // Создаем пустой массив для хранения четных чисел
      
//     for (let i = start; i <= end; i++) { // Проходим от start до end включительно
//         if (i % 2 === 0) { // Проверяем, является ли текущее число четным
//             numbers.push(i); // Добавляем текущее число в массив
//         }
//     }

//     return numbers; // Возвращаем массив четных чисел
// }

//****************ugly переполнение стека(ОЗУ)***/
// function foo (i) {
//     console.log(i);
//     foo(i + 1);
// }
// foo(0);

//***************TODO Метод includes() ****************/
//Метод масиву includes() використовується для перевірки наявності певного елемента в масиві.

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

// const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }

//***********************OPTIMIZE TEST************************/

// function checkStorage(storage, item) {
//    const lowerCaseItem = item.toLowerCase();
   

//     for (let i = 0; i < storage.length; i++) {
        
//         if (storage[i].toLowerCase() === lowerCaseItem) {
//             return `${lowerCaseItem} is available to order!`;
//         }
//     }
//         return "Sorry! We are out of stock!";
    
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum")); // "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); // "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear")); // "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); // "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange")); // "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot")); // "Sorry! We are out of stock!"

//***********************OPTIMIZE TEST************************/

// function getCommonElements(array1, array2) {
//     const commonElements = []; // Створюємо порожній масив для зберігання спільних елементів
//     // Перебираємо всі елементи першого масиву
//     for (let i = 0; i < array1.length; i++) {
//         const element = array1[i]; // Отримуємо поточний елемент
//         // Перебираємо всі елементи другого масиву
//         for (let j = 0; j < array2.length; j++) {
//             const otherElement = array2[j]; // Отримуємо поточний елемент другого масиву
//             // Перевіряємо, чи елементи співпадають
//             if (element === otherElement) {
//                 commonElements.push(element); // Додаємо спільний елемент до масиву
//             }
//         }
//     }
//     return commonElements; // Повертаємо масив спільних елементів
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 1, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []
        

//***********************OPTIMIZE TEST (второй вариант)************************/

// function getCommonElements(array1, array2) {
//     const commonElements = []; // Создаем пустой массив для хранения общих элементов
//     const set = new Set(array2); // Создаем Set из второго массива для быстрой проверки наличия

//     // Перебираем все элементы первого массива
//     for (const element of array1) {
//         // Проверяем, есть ли элемент в Set
//         if (set.has(element)) {
//             commonElements.push(element); // Если есть, добавляем его в результат
//         }
//     }

//     return commonElements; // Возвращаем массив общих элементов
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 1, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

//***************TODO Цикл for...of ****************/
// Цикл for...of — це зручний спосіб перебору масиву.Тіло циклу буде виконуватися на кожному елементі масиву.
// Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.
// Де:

// element — це змінна, в яку на кожній ітерації буде записуватися поточний елемент масиву.
// array — це вихідний масив, який ми хочемо перебрати.

// for (const element of array) {
//   // тіло циклу
// }

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

//***********************OPTIMIZE TEST************************/

// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.
// Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const totalOrder of order) {
//   total += totalOrder;
// }
//   return total;
// }

//***************TODO Псевдомасив arguments ****************/

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// Якщо під час роботи з arguments потрібно використовувати методи масиву,
// тоді псевдомасив необхідно перетворити на масив,
// використовуючи метод Array.from(), який створить масив із псевдомасиву.

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
// 	return args.join("-");
// }

// foo(1, 2, 3); // Поверне "1-2-3"

//***********************OPTIMIZE TEST************************/


// function createReversedArray() {
//     // Преобразуем псевдомассив arguments в массив
//     const argsArray = Array.from(arguments); // Или можно использовать: const argsArray = [...arguments];
    
//     // return argsArray.reverse(); // Возвращаем массив аргументов в обратном порядке
//     // (reverse и toReversed работают одинаково)
//     return argsArray.toReversed(); // Возвращаем массив аргументов в обратном порядке
// }

// Примеры вызовов функции
// console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291));   // [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94,


// function createReversedArray(...args) {
//     return args.reverse(); // Возвращаем массив аргументов в обратном порядке
// Использование оператора расширения (...args):
// Оператор ... позволяет функции принимать произвольное количество аргументов и сохранять их в массиве args.
// }

// // Примеры вызовов функции
// console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291));   // [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
// console.log(createReversedArray()); // []

//***************TODO Параметри за замовчуванням ****************/

// Функції можуть мати параметри зі значеннями за замовчуванням, тобто необов'язкові параметри.
// Ці значення використовуються в тому випадку, якщо функція викликається без передавання
// відповідного аргументу для цього параметра.
// Значенням за замовчуванням може бути будь - який тип даних.

// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!"
// greet();        // "Hello, Guest!"


// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//   // ...
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"

//***********************OPTIMIZE TEST************************/

// function calculateTax(amount, taxRate = 0.2) {

//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1)); // 10
// console.log(calculateTax(200, 0.1)); // 20
// console.log(calculateTax(100, 0.2)); // 20
// console.log(calculateTax(200, 0.2)); // 40
// console.log(calculateTax(100, 0.3)); // 30
// console.log(calculateTax(200, 0.3)); // 60
// console.log(calculateTax(100));      // 20
// console.log(calculateTax(200));      // 40

//***************TODO Метод filter() ****************/

// является встроенным методом массивов в JavaScript
//  и позволяет более лаконично и эффективно фильтровать элементы:
// function filterArray(numbers, value) {
//     return numbers.filter(number => number > value); // Используем filter для фильтрации массива
// }

// // Примеры вызовов функции
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



//***************TODO Функціональний вираз ****************/

// Функціональний вираз(function expression) — звичайне оголошення змінної,
//     значенням якої буде функція.Це альтернативний спосіб оголошення функції.

// Синтаксис оголошення функції, який ти вже знаєш (function declaration):


// function multiply(x, y, z) {
//   console.log(x * y * z);
// }

// Синтаксис функціонального виразу (function expression):


// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };


// Різниця в тому, що функціональний вираз (function expression) не можна викликати до місця його створення, тільки після, тому що це буквально оголошення const змінної.


// // ❌ Помилка! Не працює виклик до оголошення
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);


// A оголошення функції (function declaration) можна викликати до місця її створення в коді.


// // ✅ Працює виклик перед оголошенням
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);



// Не важливо, який синтаксис використовувати, головне,
//     щоб код у проєкті був однорідним.Тобто необхідно намагатися не змішувати
//      оголошення функції(function declaration) з функціональними виразами(function expression),
//     щоб писати більш стандартизований зрозумілий код.

//***************TODO Область видимості ****************/
// Область видимості (scope) — механізм, який визначає доступність змінних у коді, що виконується.

// Ланцюжок областей видимості(scope chain) — області видимості утворюють ієрархію,
//     так що дочірні області мають доступ до змінних із батьківських областей, але не навпаки.

// Змінні, оголошені на найвищому рівні, тобто поза будь - якими конструкціями наприклад:
// if, for і функцій — перебувають у глобальній області видимості
//  і доступні скрізь після їхнього оголошення.

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i+=1) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// Змінні, оголошені всередині інструкційif, for, функцій та інших блоків коду,
//     що огорнуті фігурними дужками { }, перебувають у блоковій області видимості
//      та доступні тільки всередині цього блоку коду або вкладених у нього.

// function foo() {
//   const a = 20;
//   console.log(a); // 20

//   for (let i = 0; i < 5; i+=1) {
//     console.log(a); // 20

//     if (i === 2) {
//       console.log(a); // 20
//     }
//   }
// }

// // ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(a);

// for (let i = 0; i < 3; i+=1) {
//   // ❌ Помилка! Змінна a не доступна в цій області видимості
//   console.log(a);
// }

//************************TODO Стек викликів ************************/

// Під час виклику функції всередині її тіла можуть викликатися інші функції, а в них інші тощо.

//     JavaScript — однопотокова мова, тобто в одну одиницю часу може виконуватися
// тільки одна інструкція.Це означає, що вже викликані функції, які не закінчили своє виконання,
//     повинні чекати виконання функцій, викликаних усередині себе, для того щоб продовжити свою роботу.

// function fnA() {
//   console.log("Log inside fnA function before calling fnB");
//   fnB();
//   console.log("Log inside fnA function after fnB call");
// }

// function fnB() {
//   console.log("Log inside fnB function");
// }

// console.log("Log before calling fnA");
// fnA();
// console.log("Log after calling fnA");

// // "Log before calling fnA"
// // "Log inside fnA function before calling fnB"
// // "Log inside fnB function"
// // "Log inside fnA function after fnB call"
// // "Log after calling fnA"

// JavaScript — однопотоковый язык, в чем + и - и какие языки многопотоковые?

// JavaScript является однопоточной языком программирования, что означает, что в любой момент времени он может выполнять только одну задачу или строку кода. Это связано с тем, что JavaScript использует цикл событий (event loop), который позволяет ему обрабатывать асинхронные операции, не блокируя выполнение других задач. Давайте рассмотрим плюсы и минусы этой модели, а также примеры языков, которые поддерживают многопоточность.
// Плюсы и минусы однопоточности JavaScript

// Плюсы:

// Простота разработки: Однопоточная модель упрощает разработку, так как разработчики не должны заботиться о синхронизации между потоками.
// Эффективность при I/O операциях: JavaScript хорошо подходит для обработки операций ввода-вывода (I/O), таких как сетевые запросы, благодаря своей асинхронной модели. Это позволяет обрабатывать множество запросов одновременно без блокировки выполнения.
// Меньше ошибок: Отсутствие многопоточности снижает вероятность возникновения ошибок, связанных с конкурентным доступом к данным.

// Минусы:

// Проблемы с производительностью: Если выполняется задача, требующая интенсивного использования процессора (CPU), это может заблокировать цикл событий и замедлить обработку других запросов.
// Асинхронное программирование: Хотя асинхронность является преимуществом, она также может усложнять код, особенно при работе с множеством вложенных обратных вызовов (callback).
// Ограниченная возможность использования ресурсов: JavaScript может использовать только одно ядро процессора в однопоточной модели, что может стать узким местом для вычислительно интенсивных задач.
// Языки с поддержкой многопоточности

// Некоторые языки программирования предлагают встроенную поддержку многопоточности:

// Java: Поддерживает многопоточность через классы Thread и Runnable, позволяя разработчикам создавать и управлять потоками.
// C#: Использует Task и async/await для управления асинхронными операциями и многопоточностью.
// C++: Предоставляет возможности управления потоками через стандартную библиотеку thread.
// Python: Имеет модули threading и multiprocessing, позволяющие работать с потоками и процессами.
// Go: Использует горутины для легкого создания параллельных задач.

// Заключение
// JavaScript — это однопоточный язык с асинхронной моделью выполнения, что делает его идеальным для работы с I/O операциями, но может создавать проблемы с производительностью при выполнении вычислительно интенсивных задач. Многопоточные языки, такие как Java и C#, предлагают более сложные механизмы управления потоками, что позволяет более эффективно использовать ресурсы процессора в определенных сценариях.