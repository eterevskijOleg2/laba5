// const name = 'пеньковм';
// const key =  'максимка';

// const name = 'шифровка';
// const key = 'горизонт';

const name = prompt('Введите имя (8 букв)');
const key = prompt('Введите ключ (8 букв)');


const windows1251 = {
    а: '1100 0000',
    б: '1100 0001',
    в: '1100 0010',
    г: '1100 0011',
    д: '1100 0100',
    е: '1100 0101',
    ж: '1100 0110',
    з: '1100 0111',
    и: '1100 1000',
    й: '1100 1001',
    к: '1100 1010',
    л: '1100 1011',
    м: '1100 1100',
    н: '1100 1101',
    о: '1100 1110',
    п: '1100 1111',
    р: '1101 0000',
    с: '1101 0001',
    т: '1101 0010',
    у: '1101 0011',
    ф: '1101 0100',
    х: '1101 0101',
    ц: '1101 0110',
    ч: '1101 0111',
    ш: '1101 1000',
    щ: '1101 1001',
    ъ: '1101 1010',
    ы: '1101 1011',
    ь: '1101 1100',
    э: '1101 1101',
    ю: '1101 1110',
    я: '1101 1111',
}

const sort1 = [
    58, 50, 42, 34, 26, 18, 10, 2,
    60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6,
    64, 56, 48, 40, 32, 24, 16, 8,
    57, 49, 41, 33, 25, 17, 9, 1,
    59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5,
    63, 55, 47, 39, 31, 23, 15, 7
];

const sort2 = [
    57, 49, 41, 33, 25, 17, 9,
    1, 58, 50, 42, 34, 26, 18,
    10, 2, 59, 51, 43, 35, 27,
    19, 11, 3, 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15,
    7, 62, 54, 46, 38, 30, 22,
    14, 6, 61, 53, 45, 37, 29,
    21, 13, 5, 28, 20, 12, 4
];

const sort3 = [
    14, 17, 11, 24, 1, 5,
    3, 28, 15, 6, 21, 10,
    23, 19, 12, 4, 26, 8,
    16, 7, 27, 20, 13, 2,
    41, 52, 31, 37, 47, 55,
    30, 40, 51, 45, 33, 48,
    44, 49, 39, 56, 34, 53,
    46, 42, 50, 36, 29, 32
]

const sort4 = [
    32, 1, 2, 3, 4, 5,
    4, 5, 6, 7, 8, 9,
    8, 9, 10, 11, 12, 13,
    12, 13, 14, 15, 16, 17,
    16, 17, 18, 19, 20, 21,
    20, 21, 22, 23, 24, 25,
    24, 25, 26, 27, 28, 29,
    28, 29, 30, 31, 32, 1
]

const sort5 = [
    16, 7, 20, 21, 29, 12, 28, 17,
    1, 15, 23, 26, 5, 18, 31, 10,
    2, 8, 24, 14, 32, 27, 3, 9,
    19, 13, 30, 6, 22, 11, 4, 25
]

const sort6 = [
    40, 8, 48, 16, 56, 24, 64, 32,
    39, 7, 47, 15, 55, 23, 63, 31,
    38, 6, 46, 14, 54, 22, 62, 30,
    37, 5, 45, 13, 53, 21, 61, 29,
    36, 4, 44, 12, 52, 20, 60, 28,
    35, 3, 43, 11, 51, 19, 59, 27,
    34, 2, 42, 10, 50, 18, 58, 26,
    33, 1, 41, 9, 49, 17, 57, 25
]

const bigTable = [
    [
        [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
        [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
        [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
        [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
    ],
    [
        [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
        [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
        [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
        [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
    ],
    [
        [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
        [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
        [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
        [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12],
    ],
    [
        [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
        [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
        [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
        [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14],
    ],
    [
        [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
        [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
        [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
        [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
    ],
    [
        [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
        [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
        [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
        [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13],
    ],
    [
        [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
        [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
        [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
        [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12],
    ],
    [
        [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
        [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
        [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
        [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11],
    ]
]

const getBinFromString = (string) => {
    return string.split('').map(letter => {
        return windows1251[letter].replace(' ', '')
    }).join(' ')
}

const sortString = (string, sortArray) => {
    const strWithoutSpaces = string.replace(/ /g, '');

    return sortArray.map(item => {
        return strWithoutSpaces[item - 1]
    })
}

const additionModulo2 = (num1, num2) => {
    return +(num1 !== num2);
}

const addModulo2Numbers = (num1, num2) => {
    let total = '';
    for (let i = 0; i < num1.length; i++) {
        total += additionModulo2(+num1[i], +num2[i]);
    }
    return total;
}

const transform2to10 = (num) => {
    return parseInt(num, 2);
}

const transform10to2 = (num) => {
    return num.toString(2)
}

const addMissingZeros = (num) => {
    let newNum = num;
    debugger
    while(newNum.length < 4) {
        newNum = '0' + newNum;
    }
    return newNum;
}

const binName = getBinFromString(name);
const sortedNameKey = sortString(binName, sort1).join('');
const sortedNameKeyFormated = sortedNameKey.match(/.{1,8}/g);

console.log('Этап 1' );


console.log('Имя в двоичном коде: ' ,binName);
console.log('Имя после перестановки: ' ,sortedNameKeyFormated);


let L1 = sortedNameKey.slice(0, 32);
let R1 = sortedNameKey.slice(32, 64);

console.log('Этап 2' );

console.log('L1: ' ,L1);
console.log('L1: ' ,L1);


console.log('Этап 3' );

const binKey = getBinFromString(key);
const sortedBinKey = sortString(binKey, sort2).join('');
const sortedBinKeyFormated = sortedBinKey.match(/.{1,8}/g);

console.log('Ключ в двоичном коде: ' ,binKey);
console.log('Ключ после перестановки: ' ,sortedBinKeyFormated);

console.log('Этап 4' );

const C0 = sortedBinKey.slice(0, 28);
const D0 = sortedBinKey.slice(28, 56);

console.log('C0: ' ,C0);
console.log('D0: ' ,D0);

console.log('Этап 5' );

const C1 = C0.slice(1, 28) + C0[0];
const D1 = D0.slice(1, 28) + D0[0];

const C2 = C1.slice(1, 28) + C1[0];
const D2 = D1.slice(1, 28) + D1[0];

console.log('C1: ' ,C1);
console.log('C2: ' ,C2);

console.log('Этап 6' );

console.log('D1: ' ,D1);
console.log('D2: ' ,D2);


const K1 = C1 + D1;
const K2 = C2 + D2;

const K1sorted = sortString(K1, sort3).join('');
const K2sorted = sortString(K2, sort3).join('');

console.log('K1: ' ,K1);
console.log('K1 перестановка: ' ,K1sorted);


console.log('K2: ' ,K2);
console.log('K2 перестановка: ' ,K2sorted);


console.log('Этап 8' );

// Пункт 8

console.log('R1: ' ,R1);

const R1tetr = R1.match(/.{1,4}/g);

const ER1 = R1tetr.map((tetr, i) => {
    if (i === 0) {
        return ([R1[31], tetr, R1[4]].join(''))
    }

    if (i === 7) {
        return ([R1[27], tetr, R1[0]].join(''))
    }

    return [R1[i * 4 - 1], tetr, R1[i * 4 + 4]].join('')
})

console.log('ER1: ' ,ER1);
console.log('K1: ' ,K1);

const H = addModulo2Numbers(ER1.join(''), K1sorted);

console.log('H1: ' ,H);

const Hstring = String(H).match(/.{1,6}/g).map((item, i) => {
    let tableValue_2;
    const row = item[0] + item[5];
    const row_10 = transform2to10(row);

    const column = item.slice(1, 5);
    const column_10 = transform2to10(column);
    const tableValue = bigTable[i][row_10][column_10];

    if(transform10to2(tableValue).length < 4) {
        tableValue_2 = addMissingZeros(transform10to2(tableValue));
    } else {
        tableValue_2 = transform10to2(tableValue);
    }

    console.log(`h${i}: строка - ${row}(2) = ${row_10}(10), стоблец - ${column}(2) = ${column_10}, S${i + 1} = ${tableValue}(10) = ${tableValue_2}`)

    return tableValue_2;
}).join('')

console.log('HString1: ' ,Hstring);

const P = sortString(Hstring, sort5).join('');

const R2 = addModulo2Numbers(P, L1);
const L2 = R1;

console.log('L1: ', L1 );
console.log('P1: ', P );
console.log('R2: ', R2 );
console.log('L2: ', L2 );


// _____Вторая итерация_____

const R2tetr = R2.match(/.{1,4}/g);

console.log('L2: ', L2 );

const ER2 = R2tetr.map((tetr, i) => {
    if (i === 0) {
        return ([R2[31], tetr, R2[4]].join(''))
    }

    if (i === 7) {
        return ([R2[27], tetr, R2[0]].join(''))
    }

    return [R2[i * 4 - 1], tetr, R2[i * 4 + 4]].join('')
})


console.log('ER2: ' ,ER2);
console.log('K2: ' ,K2);

const H2 = addModulo2Numbers(ER2.join(''), K2sorted);

console.log('H2: ' ,H2);

const Hstring2 = String(H).match(/.{1,6}/g).map((item, i) => {
    let tableValue_2;
    const row = item[0] + item[5];
    const row_10 = transform2to10(row);

    const column = item.slice(1, 5);
    const column_10 = transform2to10(column);
    const tableValue = bigTable[i][row_10][column_10];

    if(transform10to2(tableValue).length < 4) {
        tableValue_2 = addMissingZeros(transform10to2(tableValue));
    } else {
        tableValue_2 = transform10to2(tableValue);
    }

    console.log(`h${i}: строка - ${row}(2) = ${row_10}(10), стоблец - ${column}(2) = ${column_10}, S${i + 1} = ${tableValue}(10) = ${tableValue_2}`)

    return tableValue_2;
}).join('')

console.log('HString2: ' ,Hstring2);


const P2 = sortString(Hstring2, sort5).join('');

const R3 = addModulo2Numbers(P2, L2);
const L3 = R2;

console.log('L2: ', L2 );
console.log('P2: ', P2 );
console.log('R3: ', R3 );
console.log('L3: ', L3 );

// Пункт 9

console.log('Этап 9');

console.log('R3: ', R3 );
console.log('L3: ', L3 );

const T = R3 + L3;

console.log('T: ', T );

const TSorted = sortString(T, sort6).join('');

console.log('TSorted: ',TSorted)