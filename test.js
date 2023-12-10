const itemsDatabase = {
    jewellery: ["Ring", "Necklace", "Bracelet", "Earrings", "Watch", "Brooch", "Anklet", "Cufflinks", "Pendant", "Charm",
                "Pearl Necklace", "Diamond Ring", "Gold Bracelet", "Silver Earrings", "Rose Gold Watch",
                "Sapphire Brooch", "Emerald Anklet", "Platinum Cufflinks", "Ruby Pendant", "Amethyst Charm"],
    electronics: ["Phone", "Laptop", "Headphones", "Tablet", "Smartwatch", "Camera", "Bluetooth Speaker", "Power Bank",
                   "Fitness Tracker", "Gaming Console", "Wireless Earbuds", "Portable Charger", "Action Camera",
                   "Smartphone Gimbal", "Virtual Reality Headset", "E-book Reader", "Digital Camera", "Drone",
                   "Wireless Mouse", "External Hard Drive"],
    bags: ["Backpack", "Handbag", "Briefcase", "Messenger Bag", "Tote Bag", "Duffel Bag", "Clutch", "Wallet",
           "Laptop Bag", "Satchel", "Travel Backpack", "Leather Tote", "Canvas Messenger Bag", "Fashion Backpack",
           "Crossbody Purse", "Business Briefcase", "Weekender Duffel", "Evening Clutch", "RFID Wallet", "Rolling Suitcase"],
    documents: ["Passport", "ID Card", "Certificates", "Driver's License", "Visa Documents", "Insurance Papers", "Tickets",
                "Permits", "Legal Documents", "Contracts", "Degree Certificates", "Birth Certificate", "Marriage License",
                "Medical Records", "Social Security Card", "Diplomas", "Transcripts", "Tax Documents", "Business Contracts",
                "Real Estate Papers", "Insurance Policies"],
    keys: ["House Keys", "Car Keys", "Office Keys", "Locker Keys", "Safe Keys", "Mailbox Keys", "Drawer Keys", "Padlock Keys",
           "Security System Keys", "Cabinet Keys", "Garage Keys", "Bike Lock Keys", "Car Remote Key", "Gate Keys",
           "Electronic Key Fob", "Smart Home Keys", "Vintage Keys", "Master Keys", "Skeleton Keys", "Magnetic Key Holder"]
};

function displayItems() {
    const selectedCategory = document.getElementById('Categories').value;
    const itemsContainer = document.getElementById('itemsContainer');

    // Clear previous items
    itemsContainer.innerHTML = '';

    if (selectedCategory !== 'Select') {
        const items = itemsDatabase[selectedCategory];

        if (items && items.length > 0) {
            items.forEach(item => {
                const itemBox = document.createElement('div');
                itemBox.className = 'item-box';
                itemBox.textContent = item;

                const itemButton = document.createElement('button');
                itemButton.className = 'item-button';
                itemButton.textContent = 'Claim';
                itemButton.onclick = function () {
                    // Replace with the actual URL you want to navigate to
                    window.location.href = 'Auth.html';
                };

                itemBox.appendChild(itemButton);
                itemsContainer.appendChild(itemBox);
            });
        } else {
            itemsContainer.textContent = 'No items available for this category.';
        }
    }
}

function filterByTime() {
    // Implement filtering logic based on the selected time range
    // For demonstration purposes, this is left as a placeholder
    alert('Filtering by time...');
	 displayItems();
}