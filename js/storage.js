const Storage = {
    keys: {
        USER_NAME: 'emergency_app_user_name',
        FAMILY_MEMBERS: 'emergency_app_family_members',
        INVENTORY: 'emergency_app_inventory',
        API_KEY: 'emergency_app_api_key',
        SELECTED_MODEL: 'emergency_app_selected_model'
    },

    init() {
        if (!localStorage.getItem(this.keys.USER_NAME)) {
            localStorage.setItem(this.keys.USER_NAME, 'Sarah');
        }
        if (!localStorage.getItem(this.keys.FAMILY_MEMBERS)) {
            const defaultFamily = [
                {
                    id: 'sarah',
                    name: "Sarah (You)",
                    relation: "Self",
                    lat: 28.6139,
                    lng: 77.2090,
                    avatar: "https://i.pravatar.cc/150?u=sarah",
                    status: "safe",
                    lastSeen: "Just now",
                    battery: "84%",
                    phone: ''
                },
                {
                    id: 'david',
                    name: "David",
                    relation: "Husband",
                    lat: 28.6250,
                    lng: 77.2150,
                    avatar: "https://i.pravatar.cc/150?u=david",
                    status: "safe",
                    lastSeen: "2 mins ago",
                    battery: "62%",
                    phone: '+1234567890'
                },
                {
                    id: 'emma',
                    name: "Emma",
                    relation: "Daughter",
                    lat: 28.5900,
                    lng: 77.1900,
                    avatar: "https://i.pravatar.cc/150?u=emma",
                    status: "danger",
                    lastSeen: "Offline (45m)",
                    battery: "12%",
                    phone: '+1098765432'
                }
            ];
            this.setFamilyMembers(defaultFamily);
        }
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
