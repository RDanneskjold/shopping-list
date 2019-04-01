'use strict'

const store = (function() {
    
    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
    ];

    const findByID = function(id) {
        return store.items.find(item => item['id'] === id);
    };

    const addItem = function(name) {
        try {
            Item.validateName(name);
            this.items.push(Item.create(name));
        } catch(error) {
            console.log(`Cannot add item:${error.message}`);
        }
    };

    const hideCheckedItems = false;
    
    const searchTerm = '';

    return {
        items,
        hideCheckedItems,
        searchTerm,
    }

} () );