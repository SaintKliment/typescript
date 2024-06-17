type str = string;
const constructor__: str = "123";

console.log(constructor__);

let test: number = 123;

let arr: string[] = ["123", "456", "789"];

let arr_: Array<str> = ["987", "654", "321"];

let slag1: number = 1;
let slag2: str = "123";
console.log(slag1 + slag2);

let user = { name: "john", age: 30 };

for (let i: number = 0; i <= 10; i++) {
  console.log(i);
}

let numbers: number[] = [1, 2, 3, 4, 5];

for (let el of numbers) {
  console.log(el);
}

let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key);
}

function func(a: number, b: number) {
  return a * b;
}

function func2(a: number, b: number): number {
  return a * b;
}

function func3(test: str): void {
  alert(test);
}

let any_: any;
any_ = 123;
any_ = "123";

let arr2: any[] = ["abs", true, 3];

type str_num = string | number;

let str_num_value: str_num = 123;
str_num_value = "123";

type message = "success" | "error";

let str10: message;
str10 = "success";
str10 = "error";
// str10 = "123"; // error

let user123: [str, str_num];

let user123_proto: user123 = ["123", 123];
console.log(user123_proto);

user123_proto[0] = "321";
console.log(user123_proto);

let read_user: readonly [string, number, number] = ["123", 123, 321]; // readonly = кортеж можно только читать
console.log(read_user);

let example_kortej: [str, str_num, boolean?] = ["123", 123, true]; //   true может и не быть

let human: [str, number] = ["zhenya", 16];
let [h_name, h_age] = human;
console.log(h_name, h_age);

let tpl: [str, ...number[]];
tpl = ["str", 1, 2, 3, 4, 5];

enum Season {
  Winter,
  Spring,
  Summer,
  Autumn,
}
enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
let current: str = Season[0];
console.log(current); // Winter

let current_number: number = Season.Winter;
console.log(current_number) // 0

let cur_1:Season = 3
console.log(cur_1)

let cur_test: Season = 100; // there will be no mistake

enum Season_v2 {Winter = 1, Spring, Summer, Autumn}
let cur_v2:Season_v2 = Season_v2.Winter
let cur3_v2;:Season_v2 = Season[4]
console.log(cur_v2, cur3_v2);


enum Season_v3 {
    Winter = 'Зима',
    Spring = 'Весна',
    Summer = 'Лето',
    Autumn = 'Осень',
}

let cur1_v3: Season_v3 = Season_v3.Summer;
console.log(cur1_v3, 'cur1_v3')

let date: Date = new Date(2030, 11, 31);
console.log(date)

let reg: RegExp = /.+?/;
let reg2: RegExp = new RegExp('.+?')


// для дива
let div_1: HTMLDivElement = document.querySelectorAll('div');
console.log(div_1)

// <div> </div>
// <div> </div>
// <div> </div>

let lst: NodeList = document.querySelectorAll('div')

let new_user:{name: str, age:number} = {name: 'john', age: 30}
console.log(typeof new_user.name)

let new2_user: {name: str, age?: number} = {name: 'john'}
console.log(new2_user.name)

interface User_v100 {
    name: string,
    age: number
} 
let user_testik: User = {name: 'petya', age: 150}
console.log(user_testik)

let prod: {
    name: str,
    colors: str[]
}

prod = {
    name: 'notebook',
    colors: ['red', 'green', 'blue']
}

interface Product {
    name: str,
    colors: str[]
}
let prod_2: Product = {
    name: 'notebook',
    colors: ['red', 'green', 'blue', 'orange']
}

interface Child {
    name: str,
    age: number,
    parents: {
        mother: str,
        father: str,
    }
}
let children: Child = {
    name: 'vasya',
    age: 30,
    parents: {
        mother: 'jane',
        father: 'bob',
    }
}

interface City {name: str}
interface Info_user {
    name: str,
    age: number,
    city: City,
}

let city: City = {name: 'Moscow'}
let info_user: Info_user = {
    name: 'qwerty',
    age: 125,
    city: city
}

// arr objects

interface User_12345 {
    name: str,
    age: number,
}
let arr_user_12345: User_12345[] = [];
arr_user_12345.push({name: 'eric', age: 30})
arr_user_12345.push({name: 'bob', age: 43})

let  arr_dates: Date[] = [];
arr_dates.push(new Date(2030, 11, 31))
arr_dates.push(new Date(2043, 1, 11))

// let arr_HTML: HTMLElement[] = [];

let lst_HTML: NodeList = document.querySelectorAll('div');
let arr_HTML: HTMLElement[] = Array.from(lst_HTML)

function dunc1(first:str, last: str) {
    return first + ' ==> ' + last
}
dunc1('123', '321')

function dunc2(first:str, last?:str) {
    if (last) {
        return first + ' ==> ' + last
    }
    else {
        return false
    }
}

function dunc3(first:str, last:str = 'last') {
    return first + ' ===> ' + last
}

function dunc4(...rest:number[]): number {
    console.log(rest)
}
dunc4(1, 2, 3, 4, 5)

let func_func: (x: number, y:number) => number = function(a:number, b:number): number {
    return a + b
};

type Func = (x: number, y: number) => number;
let func1000: Func = function(a: number, b: number): number {
    return a + b
}

function make(num: number, func: (num: number) => number): number {
    return func(num)
}

make(3, function(num: number): number { 
    return num ** 2
})
make(10, function(num:number): number {
    return num ** 3
})

// let func_last = function(num: number): number {
//     return num ** 2
// }

const func_last = (num: number): number => num ** 5;