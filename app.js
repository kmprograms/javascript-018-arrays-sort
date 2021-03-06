// KM Programs
// https://km-programs.pl/

console.log('-------------------------------- 1 --------------------------------');
const numbers = [4n, 6, -12n, 10, 4, 0, 0n];
console.table(numbers);

console.log('-------------------------------- 2 --------------------------------');
numbers.sort();
console.table(numbers);

console.log('-------------------------------- 3 --------------------------------');
const numbers2 = [11, 4, 1, 23, 2];
numbers2.sort();
console.table(numbers2);

// Niezgodnosc typow - nie mozesz odejmowac BigInt oraz Number
// numbers.sort((a, b) => a - b)

console.log('-------------------------------- 4 --------------------------------');
numbers.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
    return 0;
});
console.table(numbers);

// wersja z wykorzystaniem operatora warunkowego
numbers.sort((a, b) => a > b ? 1 : ( a < b ? -1 : 0 ));
console.table(numbers);

// wersja z wykorzystaniem zewnetrznej funkcji porownujacej
const cmpFun = (a, b) => a > b ? 1 : ( a < b ? -1 : 0 );
numbers.sort(cmpFun);
console.table(numbers);
