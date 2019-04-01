'use strict'

const store = (function() {
    
    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
    ];

    const findById = function(id) {
        return store.items.find(item => item['id'] === id);
    };

    const addItem = function(name) {
        console.log('adding item');
        try {
            Item.validateName(name);
            this.items.push(Item.create(name));
        } catch(error) {
            console.log(`Cannot add item:${error.message}`);
        }
    };

    const findAndToggleChecked = function(id) {
        const item = findById(id);
        item.checked = !item.checked;       
    }

    const findAndUpdateName = function(id, newName) {
        try {
            Item.validateName(newName);
            const item = findById(id);
            item.name = newName;
        } catch(error) {
            console.log(`Cannot update name: ${error.message}`)
        }
    };

    const findAndDeleteName = function(id) {
        this.items = this.items.filter(item => item.id !== id);
    };

    const toggleCheckedFilter = function() {
        this.hideCheckedItems = !this.hideCheckedItems;
    };

    const setSearchTerm = function(term) {
        this.searchTerm = term;
    };
    
    const hideCheckedItems = false;
    
    const searchTerm = '';

    return {
        items,
        findById,
        addItem,
        findAndUpdateName,
        findAndDelete,
        hideCheckedItems,
        searchTerm,
        findById,
        addItem,
        findAndUpdateName,
        findAndDeleteName,
        findAndToggleChecked,
        toggleCheckedFilter,
        setSearchTerm,
    };

} () );