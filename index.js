console.log('DDD')
import {findAndUpdate, findAndUpdateKey} from "./findUpdater.mjs"
/**
 *
 * @param start - начало списка
 * @param stop - конец списка
 * @param func - callback ф-ия, с 2мя параметрами (value, index)
 * @param step - шаг ( по умолчанию 1)
 * @returns {unknown[]}
 */
const range = (start, stop, func= ()=>{}, step=1) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index)=>{return func(value, index)}
    );
let item = {id: 7786, name: `aaa - blyat`, anyKey: 'sdfsdf'}
function ddd(a,b){
    let obj = {id: b, name: `aaa - ${a}`, anyKey: 'sdfsdf'}
    return obj
}
let arr = range(1, 100000, ddd)
console.time('all tyme 1');
console.time('slice');
arr = arr.slice(0)
console.timeEnd('slice');
console.time('findAndUpdate');
arr = findAndUpdate(arr, "anyKey", "sdfsdf", {name: "@@@@@@"})
console.timeEnd('findAndUpdate');

console.time('findAndUpdateKey');
arr = findAndUpdateKey(arr, "anyKey", "sdfsdf", 'name', "@@@@@@")
console.timeEnd('findAndUpdateKey');

console.time('filter update');
arr.filter(el =>{
    if(el.anyKey === "sdfsdf"){
        el.name = '!!!!'
    }
})
console.timeEnd('filter update');
console.timeEnd('all tyme 1');

console.time('all tyme 2');
console.time('JSON');
arr = JSON.parse(JSON.stringify(arr))
console.timeEnd('JSON');
console.time('for update');
for(let el of arr){
    if(el.anyKey === "sdfsdf"){
        el.name = '!!!!'
    }
}
console.timeEnd('for update');
console.timeEnd('all tyme 2');