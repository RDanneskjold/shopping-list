'use strict'

const Item = (function() {

    const validateName = function(name){
        console.log(name);
        if (!name){
            throw new TypeError( "Name does not exist!");
        } else {
            return true;
        }
    };

    const create = function(name) {
        return {
            id : cuid(),
            name: name,
            checked : false,
        }
    };
    return {
        validateName: validateName,
        create: create,
    };
} () );
