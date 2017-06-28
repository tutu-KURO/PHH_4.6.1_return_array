/*複数の戻り値を個別の変数に代入する。
一つの配列オブジェクト
 */

function getMaxMin(...nms){
    return [Math.max(...nms),Math.min(...nms)];
}
let result = getMaxMin(10,2,-5,3,78,73,34);
console.log(result);

let[max,min] = getMaxMin(10,2,-5,3,78,73,34);
console.log(max);
console.log(min);
