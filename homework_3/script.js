/* task 1
Создайте функцию которая возводит переданное число в куб, 
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */

const getCube = num => Math.pow(num,3); 
console.log(getCube(2) + getCube(3)); 

/* task 2
Пользователь вводит с клавиатуры число, если ввёл текст, 
необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа
и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" */

function salaryAfterTax(salary) {
    console.log(`Размер заработной платы за вычетом налогов = ${salary * 0.87}`);
}
const salary = +prompt('Введите размер своей зарплаты');
if (Number.isFinite(salary) === false) {
    alert('Введите число!');
}
salaryAfterTax(salary);

/* task 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
которая определяет максимальное значение среди этих чисел */

const getMax = (a, b, c) => Math.max(a, b, c);
const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');
console.log(getMax(a, b, c));

/* task 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа 
и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
должно вывести число 8 в консоль (sum - функция сложения в данном примере, 
ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b; 
const div = (a, b) => a / b;
const diff = (a, b) => Math.max(a, b) - Math.min(a, b);
function diff2 (a, b) {
    if (a > b) {
        return a - b;
    } else if (b > a) {
        return b - a;
    } else {
        return 0;
    }
}


console.log(sum(2, 6)); 
console.log(multiply(2, 6));
console.log(div(2, 6));
console.log(diff(2, 6));
console.log(diff2(2, 2));