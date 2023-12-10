let lostItems = [];
let foundItems = [];

function reportLostItem() {
    const itemName = document.getElementById('itemName').value;
    const description = document.getElementById('description').value;

    if (!itemName || !description) {
        alert('Please fill in all fields.');
        return;
    }

    lostItems.push({ itemName, description, status: 'reported' });
    document.getElementById('itemName').value = '';
    document.getElementById('description').value = '';

    updateLostItemsList();
}

function updateLostItemsList() {
    const lostItemsList = document.getElementById('lostItemsList');
    lostItemsList.innerHTML = '';

    lostItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.itemName}: ${item.description} (${item.status})`;
        lostItemsList.appendChild(listItem);
    });

    // After updating the lost items, try to find matches
    findMatches();
}

function findMatches() {
    foundItems.forEach((foundItem) => {
        const matchingLostItem = lostItems.find(
            (lostItem) =>
                lostItem.itemName.toLowerCase() === foundItem.itemName.toLowerCase() &&
                lostItem.status === 'reported'
        );

        if (matchingLostItem) {
            // Update status and notify users
            matchingLostItem.status = 'matched';
            alert(`Match found! ${foundItem.itemName} has been matched with a reported item.`);
        }
    });

    // Update both lost and found items lists
    updateLostItemsList();
    updateFoundItemsList();
}

function updateFoundItemsList() {
    const foundItemsList = document.getElementById('foundItemsList');
    foundItemsList.innerHTML = '';

    foundItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.itemName} (${item.status})`;
        foundItemsList.appendChild(listItem);
    });
}

// Sample data for found items
foundItems.push({ itemName: 'Phone', status: 'found' });

// Initial update of both lists
updateLostItemsList();
updateFoundItemsList();

function reportFoundItem() {
    const itemName = prompt('Enter the name of the found item:');
    
    if (!itemName) {
        alert('Please enter the name of the found item.');
        return;

    }

    foundItems.push({ itemName, status: 'found' });

    // Update the found items list
    updateFoundItemsList();

    // Attempt to find matches
    findMatches();

}


    function toFindItem() {
        const itemName = prompt('Enter the name of the found item:');

        if (!itemName) {
            alert('Please enter the name of the found item.');
            return;
        }

        // Assuming you want to redirect to a new site, replace 'https://example.com/find' with your desired URL
        window.location.href = 'find.html';
    }



// Update the "Lost Items" and "Found Items" lists after reporting a found item
function updateListsAfterFoundItem() {
    updateLostItemsList();
    updateFoundItemsList();
}

// Sample data for found items (in addition to the existing data)
foundItems.push({ itemName: 'Book', status: 'found' });

// Initial update of both lists
updateListsAfterFoundItem();



