// Storage controller

// Item controller
const ItemCtrl = (function () {
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  // Data structure / State
  const data = {
    items: [{
        id: 0,
        name: 'Steak Dinner',
        calories: 1200
      },
      {
        id: 1,
        name: 'Cookie',
        calories: 400
      },
      {
        id: 2,
        name: 'Eggs',
        calories: 100
      }
    ],
    currentItem: null,
    totalCalories: 0
  }
  // When we return from the module anything after return becomes public
  return {
    getItems: function () {
      return data.items
    },
    addItem: function (name, calories) {
      // Create ID
      let ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1

      } else {
        ID = 0
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      data.items.push(newItem);

      return newItem
    },
    logData: function () {
      return data;
    }
  }
})();

// UI controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }
  return {
    populateItemList: function (items) {
      let html = '';

      items.forEach(function (item) {
        html += `<li class="collection-item" id="${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`
      });
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    getSelectors: function () {
      return UISelectors;
    }
  }
})();

// App controller
const App = (function (ItemCtrl, UICtrl) {

  // Load event listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();
    // Add item event listener
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get form input from the UI controller
    const input = UICtrl.getItemInput()

    // Check for name and claorie input
    if (input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories)
    }

    e.preventDefault();
  }

  // Public Methods
  return {
    init: function () {

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Polulate list with items
      UICtrl.populateItemList(items)

      // Load event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);

// Initialize App
App.init();