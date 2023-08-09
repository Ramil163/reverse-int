module.exports = function reverse(n) {
let result;
let str = String(n);

if(str[0] === '-') {str = str.slice(1)};
let resultArr = str.split('');
let resultArr2 = resultArr.reverse();
result = +(resultArr2.join(''));
    return result;
};
