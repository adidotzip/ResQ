const Storage = {
    keys: {
        USER_NAME: 'emergency_app_user_name',
        USER_ID: 'emergency_app_user_id',
        FAMILY_MEMBERS: 'emergency_app_family_members',
        INVENTORY: 'emergency_app_inventory',
        API_KEY: 'emergency_app_api_key',
        SELECTED_MODEL: 'emergency_app_selected_model'
    },

    init() {
        if (!localStorage.getItem(this.keys.INVENTORY)) {
            const defaultInventory = [
                { id: 1, text: "Bottled Water (1 Gallon)", checked: true },
                { id: 2, text: "First Aid Kit", checked: true },
                { id: 3, text: "Flashlight & Batteries", checked: false },
                { id: 4, text: "Non-perishable Food", checked: false },
                { id: 5, text: "Power Bank", checked: false }
            ];
            this.setInventory(defaultInventory);
        }
    },

    getUserName() {
        return localStorage.getItem(this.keys.USER_NAME);
    },

    setUserName(name) {
        localStorage.setItem(this.keys.USER_NAME, name);
    },

    getUserId() {
        let id = localStorage.getItem(this.keys.USER_ID);
        if (!id) {
            id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem(this.keys.USER_ID, id);
        }
        return id;
    },

    getFamilyMembers() {
        return JSON.parse(localStorage.getItem(this.keys.FAMILY_MEMBERS));
    },

    setFamilyMembers(members) {
        localStorage.setItem(this.keys.FAMILY_MEMBERS, JSON.stringify(members));
    },

    getInventory() {
        return JSON.parse(localStorage.getItem(this.keys.INVENTORY));
    },

    setInventory(inventory) {
        localStorage.setItem(this.keys.INVENTORY, JSON.stringify(inventory));
    },

    getApiKey() {
        return localStorage.getItem(this.keys.API_KEY) || '';
    },

    setApiKey(key) {
        localStorage.setItem(this.keys.API_KEY, key);
    },

    getSelectedModel() {
        return localStorage.getItem(this.keys.SELECTED_MODEL) || 'google/gemma-4-31b-it:free';
    },

    setSelectedModel(model) {
        localStorage.setItem(this.keys.SELECTED_MODEL, model);
    }
};

Storage.init();
