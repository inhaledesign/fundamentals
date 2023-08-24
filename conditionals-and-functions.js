let equals = 1 === 1;
console.log(equals)
let greaterThan = 5 > 1;
let lessThan = 2 < 10;
let greaterThanEq = 5 >= 5;
let lessThanEq = 4 <= 9;
let notEquals = 5 !== 2;

let storeA = 3.10;
let storeB = 4.40;


function compareStorePrices(storeA, storeB) {
    let storeAIsLower  = storeA < storeB;

    if (storeAIsLower) {
        console.log("Store A has a lower price.");
    } else if (storeA > storeB) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum(number) {
    return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

let x = 10;

function addNumber(n, m, x) {
    console.log(x);

    let b;
    if(1 === 1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

console.log(x);
addNumber(2, 3, 8)

//                      0, 1, 2, 3, 4...
let ourArray =  [1, 2, 3, 4, ['a', 'b', 'c' ], 6, 7];
let newArray = ourArray[4];
console.log(newArray[0]);

let arrLen = ourArray.length;
for(let i = 0; i < arrLen; i++) {
    console.log("i is equal to: ", ourArray[i]);
    for(let j = 0; j < 10; j++) {
        console.log("j is equal to: ", j);
    }
}

x = 0;
while(x < 10) {
    console.log("Ran");
    x = x + 1;
}