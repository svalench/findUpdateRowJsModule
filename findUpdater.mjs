/**
 * valenchits 25.04.23
 */

/**
 * Находит объекты в массиве которые удовлетворяют условию arr[i][objKeyFind] === objValueFind,
 * после чего создает новый элемент из 2х - arr[i] = {...arr[i], ...objUpdate}
 * @param arr - входящий массив объектов
 * @param objKeyFind - ключ для поиска в объекте
 * @param objValueFind - значение по которому ищем вхождения
 * @param objUpdate - объект с ключами который необходимо обновить
 */
function findAndUpdate(arr = [],
                       objKeyFind='',
                       objValueFind,
                       objUpdate={},
                       ){
    arr.filter(el =>{
        if(el.hasOwnProperty(objKeyFind) && el[objKeyFind] === objValueFind){
            Object.assign(el, objUpdate)
        }
    })
    return arr
}


function findAndUpdateKey(arr = [],
                       objKeyFind='',
                       objValueFind,
                       objKeyUpd='',
                       objValueUpd
                       ){
    arr.filter(el =>{
        if( el.hasOwnProperty(objKeyFind) && el[objKeyFind] === objValueFind){
            el[objKeyUpd] = objValueUpd
        }
    })
    return arr
}
export {findAndUpdate, findAndUpdateKey}