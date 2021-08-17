module.exports = function reverse(n) {
    let arr = String(n);
    let arr2 = arr.split(" ");
    let arrRev = arr2.reverse();
    let strRev = arrRev.join();
    let ans = Number(strRev);
    return ans;
};
