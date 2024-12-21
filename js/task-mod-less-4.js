//*******************TODO Об’єкти***************************/

// Об'єкти дозволяють описати та згрупувати характеристики об'єктів реального світу, наприклад,
//     користувач, книга, продукт магазину — чого завгодно.Об'єкти ще називають словниками,
//      тобто вони містять терміни(властивості) та їх визначення(значення).

//*******************OPTIMIZE TEST***************************/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Выводим информацию об апартаментах
// console.log(apartment.imgUrl); // "https://via.placeholder.com/640x480"
// console.log(apartment.descr);   // "Spacious apartment in the city center"
// console.log(apartment.rating);   // 4
// console.log(apartment.price);    // 2153
// console.log(apartment.tags);      // ["premium", "promoted", "top"]

//*******************TODO Об’єкти*Вкладені властивості**************************/

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

//*******************OPTIMIZE TEST***************************/

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],

//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com"
//     },
// };

// // Выводим информацию об апартаментах
// console.log(apartment.imgUrl); // "https://via.placeholder.com/640x480"
// console.log(apartment.descr);   // "Spacious apartment in the city center"
// console.log(apartment.rating);   // 4
// console.log(apartment.price);    // 2153
// console.log(apartment.tags);      // ["premium", "promoted", "top"]

// // Выводим информацию об владельце
// console.log(apartment.owner.name); // "Henry"
// console.log(apartment.owner.phone); // "982-126-1588"
// console.log(apartment.owner.email); // "henry.carter@aptmail.com"

//*******************TODO Доступ до властивостей через крапку**************************/

// Здебільшого синтаксис «через крапку» використовується тоді,
//     коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

//*******************OPTIMIZE TEST***************************/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(AptRating); // 4
// console.log(AptDescr);  // "Spacious apartment in the city center"
// console.log(AptPrice);  // 2153
// console.log(AptTags);   // ["premium", "promoted", "top"]

//*******************TODO Доступ до вкладених властивостей**************************/

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// Значення властивості — це масив.

// Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: ****user.hobbies

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]

// Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"

// Також можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length: user.hobbies.length;

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

//*******************OPTIMIZE TEST***************************/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName); // "Henry"
// console.log(ownerPhone); // "982-126-1588"
// console.log(ownerEmail); // "henry.carter@aptmail.com"
// console.log(numberOfTags);//3
// console.log(firstTag);//premium
// console.log(lastTag);//top

//*******************TODO Доступ до властивостей через квадратні дужки**************************/

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"


//*******************OPTIMIZE TEST***************************/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating); // 4
// console.log(aptDescr);  // "Spacious apartment in the city center"
// console.log(aptPrice);   // 2153
// console.log(aptTags);   // ["premium", "promoted", "top"]

//*******************TODO Зміна значення властивостей**************************/

// Після того як об'єкт створений, значення його властивостей можна змінити.

// Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

//*******************OPTIMIZE TEST***************************/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price); // 5000
// console.log(apartment.rating); // 4.7
// console.log(apartment.owner.name); // "Henry Sibola"
// console.log(apartment.tags); // "trusted"

//*******************TODO Додавання властивостей**************************/

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]


//*******************OPTIMIZE TEST***************************/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// console.log(apartment.area); // 60
// console.log(apartment.rooms); // 3
// console.log(apartment.location); // {country: "Jamaica", city: "Kingston"}

//*******************TODO Короткі властивості**************************/

// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.



// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25



// Замість name: name, використали name.



// А замість age: age, — age.

//*******************OPTIMIZE TEST***************************/

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// console.log(product); // { name: 'Repair Droid', price: 2500, image: 'https://via.placeholder.com/640x480', tags: [ 'on sale', 'trending', 'best buy' ] }

//*******************TODO Обчислювальні властивості**************************/

// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям,
//     яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної
//      або як результат виконання функції.

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Henry Sibola";
// console.log(user.name); // "Henry Sibola"

// Синтаксис обчислювальних властивостей(computed properties) допомагає уникнути зайвого коду
//  і в деяких випадках спростити його.

// Значенням обчислювальної властивості може бути будь-який валідний вираз.

// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"

//*******************OPTIMIZE TEST***************************/

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials); // {email: 'henry.carter@aptmail.com', password: 'jqueryismyjam'}

//*******************TODO Перебір об'єкта Цикл for...in**************************/

// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність,
//  тобто його не можна перебрати циклами for або for...of.

// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// Змінна key доступна тільки в тілі циклу.

// На кожній ітерації в неї буде записано значення ключа (ім'я) властивості.

// Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }


//*******************OPTIMIZE TEST***************************/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);   // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

//*******************TODO Метод Object.keys()**************************/

// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.

// Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей.
//  Якщо в об'єкті немає властивостей, метод поверне порожній масив.



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']



// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.



// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості


// }

//*************************OPTIMIZE TEST**************************/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = [];

// for (const key of keys) {
//         values.push(apartment[key]);
// }

// console.log(keys);   // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

//*************************OPTIMIZE TEST**************************/

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// Виконай рефакторинг функції countProps(object), замінивши перебір ключів
//  за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей.
//  Функція має повернути кількість властивостей в об'єкті object.


// function countProps(object) {
// return Object.keys(object).length;
// }




// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 }));// 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));// 3

//*******************TODO Метод Object.values()**************************/

// Якщо метод Object.keys(object) повертає масив імен властивостей об'єкта (тобто ключі),
//  то метод Object.values(object) повертає масив значень його властивостей.

// Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

// Масив значень властивостей також можна перебрати циклом for...of,
//     наприклад для отримання загальної суми числових значень.

//*************************OPTIMIZE TEST**************************/


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// console.log(keys);   // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

//*************************OPTIMIZE TEST**************************/

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for (const salary of Object.values(salaries)) { // вернет массив свойств напр.[100, 150, 80] и переберет каждое значение
//     totalSalary += salary; //В каждой итерации текущая зарплата добавляется к переменной
//   }

//   return totalSalary;//После завершения цикла  возвращает сумму всех зарплат.
// }

// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

//*******************TODO Масив об’єктів**************************/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   }
// ];

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

//*************************OPTIMIZE TEST**************************/


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];



// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

//*******************TODO Масив об’єктів**************************/

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }

//*************************OPTIMIZE TEST**************************/


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

// }

// console.log(getProductPrice("Radar")); // 1300
// console.log(getProductPrice("Grip")); // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid")); //400
// console.log(getProductPrice("Engine")); // null

//*******************TODO Колекція значень властивості**************************/

// Типова задача під час роботи з колекцією об'єктів — це
// отримання масиву всіх значень певної властивості об'єктів.
// Наприклад, взяти з масиву об'єктів, які описують книги,
// усі назви або рейтинг.



// Для цього необхідно:



// Створити новий порожній масив для зберігання значень властивостей.
// Перебрати масив об'єктів у циклі.
// На кожній ітерації додати в новий масив значення необхідної властивості.


// Наприклад, отримаємо список назв усіх книг у колекції books.



// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// У результаті вийде масив значень певної властивості з усіх об'єктів.

// Дізнаємося середній рейтинг усієї нашої колекції. Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.


// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

//*************************OPTIMIZE TEST**************************/

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const propValues = [];

//   for (const product of products) {
//     if (product[propName] !== undefined) {  //(product.hasOwnProperty(propName))
//       propValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }



// console.log(getAllPropValues("name")) // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")) // повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price")) // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")) //  повертає []


//*******************TODO Колекція значень властивості**************************/

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }


// console.log (calculateTotalPrice("Blaster")) // "Product Blaster not found!"
// console.log (calculateTotalPrice("Radar")) // 5200
// console.log (calculateTotalPrice("Droid")) // 2800
// console.log (calculateTotalPrice("Grip")) // 10800
// console.log (calculateTotalPrice("Scanner")) // 8100

//*******************TODO Методи об'єкта**************************/

// Якщо значення властивості — це функція, така властивість називається методом об'єкта.

// // ❌ Слабкопов'язані, незалежні сутності
// const books = ["The Last Kingdom", "Dream Guardian"];
// function getBooks() {}
// function addBook() {}


// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// bookShelf.getBooks(); // поверне "Returning all books"
// bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
// bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"


//*************************OPTIMIZE TEST**************************/

// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all available potions"
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`;
//     },
// }
    
// console.log(atTheOldToad.getPotions()); // "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion")); // "Adding Power potion"

//*******************TODO Доступ до властивостей об'єкта**************************/

// Ключове слово this — це контекст виконання функції

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]


//*************************OPTIMIZE TEST**************************/

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//     },
  
// };

// console.log(atTheOldToad.getPotions());

//*******************TODO Зміна за посиланням**************************/

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

//*************************OPTIMIZE TEST**************************/

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]
// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]

//*******************TODO Масив об’єктів**************************/

// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });

// При переборі масиву у властивості books треба пам'ятати, що це масив об'єктів.
// Наприклад, додамо метод getAverageRating(), який повертатиме середній рейтинг
//  книг.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7

//*************************OPTIMIZE TEST**************************/

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//     getTotalPrice() {
//     let totalPrice = 0;

//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }

//     return totalPrice;
//   },
// };

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.getTotalPrice()); // 1870

//*******************TODO Зміна об'єкта в масиві**************************/

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 	}
// };

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				// Знайшли необхідний об’єкт за назвою книги
// 			}
// 		}
// 	}
// };

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				book.rating = newRating;
// 			}
// 		}
// 	}
// };

// changeRating("The Mist", 9);
// changeRating("The Last Kingdom", 4);

//*************************OPTIMIZE TEST**************************/


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//     updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   }
// };

// console.log(atTheOldToad.getPotions()); // [{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions()); // [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }]

// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.getPotions()); // [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }]

//*******************TODO Синтаксис spread і rest**************************/

// Починаючи зі стандарту ES6, з'явилася концепція залишкових параметрів (...rest).
//  Це спеціальний синтаксис, який дозволяє зібрати групу незалежних елементів у масив.

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]


//*************************OPTIMIZE TEST**************************/

// function add(...args) {
//   let total = 0;
//   for (const num of args) {
//     total += num;
//   }
//   return total;
// }


// console.log(add(15, 27)); //  42
// console.log(add(12, 4, 11, 48)); //  75
// console.log(add(32, 6, 13, 19, 8)); //  78

// //*******************TODO Збір частини аргументів**************************/


// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]

// Це викличе помилку:

// function multiply(first, ...args, second) {
// }

// function multiply(...args, first, second) {
// }

//*************************OPTIMIZE TEST**************************/

//   function addOverNum(value, ...args) {
//     let totalSum = 0;
    
//     for (let num of args) {
//         if (num > value) {
//             totalSum += num;
//         }
//     }
    
//     return totalSum;
// }

// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //  218

 //*******************TODO Входження параметрів**************************/

//  const temps = [14, -4, 25, 8, 11];

// console.log(temps); // [14, -4, 25, 8, 11]

// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// Тут доцільно використати оператор розпилення ...spread.
// Він схожий на залишкові параметри — теж використовує ...,
// але робить абсолютно протилежне.Коли функціонал ...spread
// використовується при виклику функції, він перетворює масив
// на список аргументів.

// const temps = [14, -4, 25, 8, 11];

// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел

// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

//*************************OPTIMIZE TEST**************************/


// function getExtremeScores(scores) {
//     return {
//         best: Math.max(...scores),
//         worst: Math.min(...scores)
//     };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])) // { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])) // { best: 81, worst: 4 }


//*******************TODO Створення масиву**************************/
 
// Операція ...spread дозволяє створити копію масиву або «склеїти»
// довільну кількість масивів в один новий.Досі для цього використовувалися
//  методи slice() і concat(), але операція розпилення дозволяє зробити те саме
//   в коротшій формі.

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]


// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]


//*************************OPTIMIZE TEST**************************/


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// // Об'єднання всіх результатів в один масив
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];

// // Знаходження найвищого та найнижчого балів
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log(bestScore); // 97
// console.log(worstScore); // 14

//*******************TODO Створення об'єкта**************************/

// Операція spread дозволяє розпилити властивості довільної кількості об'єктів
//  в один новий.



// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Порядок розподілу має значення.Імена властивостей об'єкта —
// унікальні, тому властивості об'єкта, що розпиляються, можуть
// перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// Під час розпилення можна додавати властивості в довільне місце.
// Головне пам'ятати про унікальність імені властивості і про те,
// що її значення може бути перезаписане.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

//*************************OPTIMIZE TEST**************************/


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };

// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   minNumberOfQuestions: 30,
// };

// // Об'єднуємо налаштування за замовчуванням з перевизначеними налаштуваннями
// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings,
// };

// // Виводимо результати для перевірки
// console.log(finalSettings);
// // {
// //   theme: "light",
// //   public: false,
// //   withPassword: true,
// //   minNumberOfQuestions: 30,
// //   timePerQuestion: 60
// // }
