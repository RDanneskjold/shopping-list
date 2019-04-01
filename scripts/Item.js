'use strict'

const Item = (function() {

    function validateName(name){
        console.log(name);
        if (!name){
            throw new TypeError( "Name does not exist!");
        } else {
            return true;
        }
    };

    function create(name) {
        return {
            id : cuid(),
            name: name,
            checked : false,
        }
    }
    return {
        validateName: validateName,
        create: create,
    };
} () );
