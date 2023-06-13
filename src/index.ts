console.clear();

//** Tiesiog skaičius */
const a: number = 5;

const b: string = 'ABC';
const c: boolean = true;

//** Dvieju skaiciu sumavimas.
// @param a Pirmas skaicius.
// @param a Pirmas skaicius.
// @return Suma.*/

function sum(a: number, b: number) {
    return a + b;
}
 const mark = [10, 2, 8, 4, 6];
 mark.push(5);
 mark.push(7, 5, 6);

 console.log(mark);


const words: string[] = []; 
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


type HouseDetails = {
    city: string;
    street: string;
    footage?: number;
    floors?: number;
    rooms?: number;
};

type Food = {
    name: string;
    size: 'small' | 'medium' | 'large';
};

type User = {
    name: string;
    age: number;
    isMarried: boolean;
    houseInfo: HouseDetails;
    favoriteFood: Food[];
};

const allUsers: User[] = [
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

const inactiveUser: User[] = [
    allUsers[0],
];

const activeUser: User[] = [
    allUsers[1],
];


  const planet: string = 'World';

  function hi(): string {
      return `Hello, ${planet}!`;
  }
  console.log(hi());