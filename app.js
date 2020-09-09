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
    currentState: null,
    totalCalories: 0
  }

  return {
    logData: function () {
      return data;
    }
  }
})();
// UI controller
const UICtrl = (function () {

})();
// App controller
const AppCtrl = (function (ItemCtrl, UICtrl) {

})(ItemCtrl, UICtrl);