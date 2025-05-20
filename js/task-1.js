/*індексація*/

const product = "Rapair droid";

console.log(product.length);

console.log(product[6]);
/*--------------------------------
    ----------------------------------------



/*розголудження*/

console.log("before");

if(5 > 3) {
    console.log("x > y"); 
}

console.log("after"); /*значення перетворено до булевого (тобто true _в консоле//before //x > y //after), (якби було false_в консоле//before i //after, ми не потрапимо в тіло if) */
/*----------------------------*/

console.log("before");

if(10 > 30) {
    console.log("x > y"); 
} else {
    console.log("x < y");
}

console.log("after");  /*_в консоле//before //x < y //after*/
/*----------------*/
const sum = 100;

if (sum >= 100) {
    console.log("big chocolate");
} else {
    console.log("smal chocolate")
}  
/*---------------------------------*/
    
const points = 500;

if (points <= 500) {             /*перечипається об true*/
    console.log("level 1");
} else if (points > 500) {
    console.log("level 2");
} else if (points > 1500) {
    console.log("level 3");
} else {
    console.log("level 4")   
}
/*----------------------------------------*/
const points = 1500;

if (points <= 500) {
    console.log("level 1");
} else if (points > 500) {    /*перечипається об true*/
    console.log("level 2");
} else if (points > 1500) {
    console.log("level 3");
} else {
    console.log("level 4");
}
/*------------------------------------*/



/* тернарний оператор*/
const balance = -500;
let message;

if (balance >= 0) {
    message = "Positive";
} else {
    message = "Negative"; /*перечипається об true*/
}    
const message = balance >= 0 ? 'Positive' : "Negative";   
/*як працює- зінна меседж = якщо баланс >= 0 я ставлю знак питання (якщо ДО знаку питання тру, то повернеться те що після знаку питання, якщо фолс - то "Negative"те що піся двокрапки )*/
console.log(message);
/*----------------------------------*/


/*Блокова область видимості змінних*/
const a = 15;

if (true) {
    console.log(a); //a
}

if (true) {
    const b = 10;
    console.log(b); //b
}

if (true) {
    const c = 5;

    console.log(a); //a знайшли в батьківській області видимості, тобто в глобальній
}

if (true) {
    const c = 5;

    console.log(b);  //помилка
}
/*---------------------*/
const hours = 14;
const minutes = 26;
let time;

if (minutes > 0) {
    time = `${hours} г. ${minutes} хв.`;   //14:26
} else {
    time = `${hours} г`;  //14
}

console.log(time);

const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : ${hours} г.ж
/*тернарним методом - якщо змінна меседж більша за 0, то тоді присвой відповідний рядочок, в іншому випадку (:) присвой змінній меседж ${hours} г.*/
console.log(message); */
/*-----------------------*/
const deadline = 10;

if(deadline === 0) {
    console.log("Today");
} else if (deadline === 1) {
    console.log("Tomorrow");
} else if (deadline === 2) {
    console.log("Overmorrow");
} else {
    console.log("Date in the future");
}



/* Оператор switch case */

const user = "Alice";

switch (user) {
    case "Petya":
        console.log("case 1");
        break; (виключає все інше окрім суворого співпадіння)
    case "Alice":
        console.log("case 2"); // case 2
        break;
    case "Yura":
        console.log("case 3");
        break;
    default:
        console.log("default");      
}
/*-----------------------*/
const const deadline = 0;

switch (deadline) {
    case 0:
        console.log("Today");
        break;
    case 1:
        console.log("Tomorrow");
        break;
    case 2:
        console.log("Overmorrow");
        break;
    defaut:
        console.log("Date in the future");
    }
;

switch (deadline) {
    case 0:
        console.log("Today");
        break;
    case 1:
        console.log("Tomorrow");
        break;
    case 2:
        console.log("Overmorrow");
        break;
    default:
        console.log("Date in the future");
    }
/*---------------------------------*/
const option = 1;
let message = "";

switch (option) {
    case 1:
        message = 'Ви можете забрати товр завтра з 12Ж00 у нашому офісі'
        break;
    case 2:
        message = 'Курьєр доставіть замовлення завтра з 9:00 до 18:00';
        break;
    case 3:
        message = 'Посилка буде відправлена сьогодні';
        break;
    default:
        message = 'Вам передзвонить менеджер';
}
console.log(message);



/*Перетворення типів до логічного типу данних, тобто до булєвого*/

console.log(Boolean(false)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(0)); //false
console.log(Boolean("")); //false

console.log(Boolean(true)); //true
console.log(Boolean(3)); //true
console.log(Boolean(3.14)); //true
console.log(Boolean(-3.14)); //true
onsole.log(Boolean("hello")); //true
onsole.log(Boolean("false")); //true

/* Оператор І*/

/*перевіряє, чи значення з ліва і права дорівнюють тру*/

console.log(5 && 4); //4 /*повертає значення останнього операнта, тобто справа*/

/* оператор І перечипаючись через фолс-повертає його значення, або зліва або справа*/
console.log(null && 3); // null

console.log(true && "checked");//"checked"


/* Оператор АБО*/

/* хоча б один опервнд в бульовому виражені повертав тру, оператор перечипається через нього і повертає його значення*/

console.log(false || 5);
    
console.log(false || null); //null /*якщо обидва, повертає значення останнього*/


/* Оператор заперечення*/

console.log(!false)//true /*перетворює операнд на протилежний*/
/*---------------------------------*/

const sub = "free";
let canConnect;

if (sub === "pro" || sub === "vip") {
    canConnect = true;
} else {
    canConnect = false;
}
console.log(canConnect);

console.log("free" === "pro");
/*-------------------------------------*/
/*трисвой змінній якщо...-тру булеве, якщо ...-то фолс */
const canConnect = sub === "pro" || sub === "vip" ? true : false;

console.log(canConnect);
/*--------------------------------------*/
   
const inOnline = true;
const isFriend = true;
const isDnD = true;

const canOpenCaht = !isDnD && isFriend && isOnline;
console.log("Can open", canOpenCaht);


    
/*Методи рядків*/

 /* метод slice*//* вирізає з вказаного індиксу до вказаного аргументу, або до кінця*/
const user = "Alice Franko";

const str = user.slice(0, 3); //Ali
const str = user.slice(1, 8); //lice Fr
const str = user.slice(); //Alice Franko
const str = user.slice(1); //lice Franko
console.log(str);

/* метод toLowerCase/toUpperCase*/

console.log(user.toLowerCase()); /*приводить рядок до нижнього регістру*/ //alice franko
console.log(user.toUpperCase()); /*приводить рядок до верхнього регістру*/  //ALICE FRANKO

/*метод includes*/

console.log(user.includes(li)); // true (тому що в рядочку є такий слог, тобто повертає булєве значення, якщо в рядочку є вказана послвдовність символів з суворим порівнянням)

/*метод startsWith*/

console.log(user.startsWith("Ali"));  //true  /*перевіряє, чи починається рядок на вказані символи*/

/* метод endsWith*/

console.log(user.endsWith("ko"));//true /*перевіряє кінцеві значення*/

/*метод indexOf*/

console.log(user.indexOf("c"));//3 /*шукає вказаний символ і повертає його індекс*/

/*метод trim*/

console.log(user.trim()); /*прибере пробіли з початку і з кінця*/


/*форматування посилання*/

let link = "https://my-site.com/about";

if (!link.endsWith(/)) {
} else {    
    console.log("ok");
}
/*якщо лінк не закінчується на слеш я потрапляю в конструкцію іф*/
if (!link.endsWith("/")) {
    // link += "/";
    link = link + "/"
}
console.log(link);  // https://my-site.com/about/
/*----------------------------*/

//якщо лінк не закінчується на слеш, хочу потрапити ОК, щоб і права і ліва умова повернула тру, за допомогою метду інклюдс. Якщо спочатку вже є слеш, то не повертає ок- зліва фолс, оператор "І" перечипається через неї //false
if (!link.endsWith("/") && link.includes("my-site")) {
    console.log("ok");
}
    
/* Пошук у рядку методом includes */

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const strring1 =
    "Hello, I'm Prinse Abdul, this is not spam, I'm offering yoy a mil"
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaing";

console.log(string1.includes(blacklistedWord1)); //false
console.log(string1.includes(blacklistedWord2)); //false

console.log(string3.includes(blacklistedWord1)); //false
console.log(string3.includes(blacklistedWord2)); //false

console.log(string2.includes(blacklistedWord1)); //false
console.log(string2.includes(blacklistedWord2)); //false /*тому що заборонене слово у верхньому регістрі, тому приводимо до нижнього регістру рядок користувача

const normString = string2.toLowerCase();
console.log(string2.includes(blacklistedWord2)) //true

/*------------------------------------------------*/
/*Цикли*/
/*цикл for*/
console.log("Before");

0 < 5
/*створюємо змінну; створюємо умову виходу з циклу; збільшуемо знечення на 1*/
for (let i = 0; i < 5; i += 1) {
    console.log("i");
}
/*Отримуємо спочатку Before, 0, 1, 2, 3, 4, перечипаємось через хибу, виходимо з функції і потрапляємо в after*/

console.log("after")

/*цикл від більшого до меньшого*/
for (let i = 10; i >= 0; i -= 1) {
    console.log(i);
}
/*-------------------------------------------*/
const str = "Alice";

for (let i = 0; i < str.length; i += 1) {
    console.log(str[i]) /*oтримуємо символ рядка знаючи його індекс, який зберігається в змінній і*/
}
 
for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'i') {
        break;   
    }
    console.log(str[i])
}  
console.log(a);  
   
/* інкремент або декремент змінює значення змінної збільшити або змнншити на 1 постфіксний а++(cпочатку присвоюється значення змінної, після збільшується на 1) або префіксний ++а(спочатку збільшує значення а на 1, а після цього в б присвоює значення а*/

let a = 10;
const b = a++; //b = a (10); a+=1

console.log("a", a); //11
console.log("b", b);  //10
/*-----------------*/
let a = 10;
const b = ++a; // a + =1; b = a (11)

console.log("a", a); //11
console.log("b", b);  //11

/* Декремент зменшує на 1*/

let a = 10;
const b = a--; //b = a (10); a -= 1

console.log("a", a); //9
console.log("b", b);  //10
/*-----------------*/
let a = 10;
const b = --a; // a - =1; b = a (9)

console.log("a", a); //9
console.log("b", b);  //9

/*--------------------------------*/
const str = "Alice";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]) /*oтримуємо символ рядка знаючи його індекс, який зберігається в змінній і*/
}
 
/*for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'i') {
        break;   
    }
    console.log(str[i])
}  
console.log(a);*/

/*Цикл while()*/

console.log("before");

let counter = 0;

while(counter < 5) {
    console.log(counter); 
    counter++;
}

console.log("after");

/* Цикл do {while}*/

do {
    console.log(counter)/*вивели в консоль*/
    counter++; /*збільшили на одиницю*/
} while (a < 6) /*порівняли*/
/*----------------------*/

const a = 20;
const b = 100;

for (let i = a; i >= b; i++) {
    if(!(i % 5 === 0)) {
        console.log(i);    
    } 
}
console.log(30 % 5);

/*від більшого до меншого*/
for (let i = b; i >= a; i--) {
    if (!(i % 5)) {
        console.log(i);
    }
}
/*----------------------------*/
const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i++) { /*інкрементуємо*/
    if (i % 2 === 0) {/*якщо і при діленні на 2 приймає значення 0*/
        total += 1;     
    }
}
console.log(total);

/*тепер відбераємо ті числа, які мене не влаштовують -не парні, і одразу збільшуємо їх на 1*/

for (let i = min; i <= max; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        continue; /* припиняє поточну ітерацію мого циклу, з конкретним значенням змінної і*/
    }
    console.log(i);

}