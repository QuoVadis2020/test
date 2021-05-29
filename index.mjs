import { assembleChars } from './1.assembleChars.mjs';
const test1 = assembleChars('ddaeddceddbebca');
console.log(test1);

import { lodashJoinToCamelCase } from './2.lodashJoinToCamelCase.mjs';
const test2 = lodashJoinToCamelCase('to_be_or_not_to_be');
console.log(test2);

import { getSumOfNumbersOnSquareMatrixDiagonal } from './3.getSumOfNumbersOnSquareMatrixDiagonal.mjs';
const test3 = getSumOfNumbersOnSquareMatrixDiagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
console.log(test3);

import { countCharactors } from './4.countCharactors.mjs';
const test4 = countCharactors('ddaeddceddbebca');
console.log(test4);

import { convertExcelColumnCodeToNumber } from './5.convertExcelColumnCodeToNumber.mjs';
const test5 = convertExcelColumnCodeToNumber('ACB');
console.log(test5);

import { getAllLeafNames } from './6.getAllLeafNames.mjs';
const test6_data = {
    name: '1',
    children: [
        {
            name: '1-1',
            children: [
                { name: '1-1-1' },
                { name: '1-1-2', children: [{ name: '1-1-2-1' }] },
            ],
        },
        { name: '1-2' },
    ],
};
const test6 = getAllLeafNames(test6_data);
console.log(test6);
