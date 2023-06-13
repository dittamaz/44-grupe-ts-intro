"use strict";
console.clear();
//** Tiesiog skaičius */
const a = 5;
const b = 'ABC';
const c = true;
//** Dvieju skaiciu sumavimas.
// @param a Pirmas skaicius.
// @param a Pirmas skaicius.
// @return Suma.*/
function sum(a, b) {
    return a + b;
}
const mark = [10, 2, 8, 4, 6];
mark.push(5);
mark.push(7, 5, 6);
console.log(mark);
const words = [];
//yra gerai, kai i6anksto =inom duomenu tipa;
//const words = [] as string [];
// gerai, kai padarom uzklausa ir gave duomenys, galim nuspresti koks duomenu tipas
//words.push(1);
words.push('1');
//words.push(true);
//words.push([]);
//words.push({});
console.log(words);
const jonas = {
    name: 'Jonas',
    age: 102,
    isMarried: true,
    favoriteColor: '',
};
console.log(jonas);
jonas.favoriteColor = 'black';
console.log(jonas);
const allUsers = [
    {
        name: 'Jonas',
        age: 99,
        isMarried: true,
        houseInfo: {
            city: 'Baisiogala',
            street: 'Gedimino str.',
            footage: 100,
        },
        favoriteFood: [
            { name: 'Food-1', size: 'small' },
            { name: 'Food-2', size: 'medium' },
            { name: 'Food-3', size: 'large' },
            { name: 'Food-4', size: 'large' },
        ],
    },
    {
        name: 'Maryte',
        age: 88,
        isMarried: true,
        houseInfo: {
            city: 'Baisogala',
            street: 'Gedemino str.',
            footage: 500,
            floors: 3,
            rooms: 7,
        },
        favoriteFood: [
            { name: 'Food-1', size: 'small' },
            { name: 'Food-2', size: 'medium' },
            { name: 'Food-3', size: 'large' },
        ],
    },
];
const inactiveUser = [
    allUsers[0],
];
const activeUser = [
    allUsers[1],
];
const planet = 'World';
function hi() {
    return `Hello, ${planet}!`;
}
console.log(hi());
