module.exports = function reverse(n) {
    str = Math.abs(n);
    let arr = str + "";
    let arr2 = arr.split("");
    let arrRev = arr2.reverse();
    let strRev = arrRev.join("");
    let result = Number(strRev);
    return result;
};
