/* Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

for (let i = 0; i <= 11; i++) {
    if (i === 0) {
        console.log(`${i} - 'это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - это четное число`);
    } else {
        console.log(`${i} - это нечетное число`);
    }
}

/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */


function fillArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
}
const arr2 = new Array(5);
fillArray(arr2);
console.log(arr2);
let sumArr = arr2.reduce((sum, el) => { return sum + el }); // 1
console.log(sumArr);
let minArr = arr2.sort().shift(); // 2
console.log(minArr);
console.log(arr2.includes(3)); // 3

/* 
*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx */


let hill = ""
for (let i = 0; i < 20; i++) {
    console.log(hill += "x")
}
