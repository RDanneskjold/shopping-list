'use strict'

const Item = function() {
    const foo = 'bar';

    return {};
}

function validateName(name){
    if (!name){
        throw new TypeError( "Name does not exist!");
    }
    else return true;
}

console.log(Item);
console.log(foo);