var Inventory = require('../models/inventory').model;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/P_U_w_N_L');

var inventories = [
  // Pastry 6
  new Inventory({
  title: 'Croissant',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 10,
  category: 'Pastries',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_hypnotise/simplylife_open_kitchen_to_hypnotise_r19_c1.jpg',
  }),
  new Inventory({
  title: 'Cinammon Roll',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 10,
  category: 'Pastries',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_hypnotise/simplylife_open_kitchen_to_hypnotise_r19_c1.jpg',
  }),
  new Inventory({
  title: 'Chocolate Croissant',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 10,
  category: 'Pastries',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_hypnotise/simplylife_open_kitchen_to_hypnotise_r19_c1.jpg',
  }),
  new Inventory({
  title: 'Peach Danish',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 10,
  category: 'Pastries',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_hypnotise/simplylife_open_kitchen_to_hypnotise_r19_c1.jpg',
  }),
  new Inventory({
  title: 'Blueberry Muffin',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 10,
  category: 'Pastries',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_hypnotise/simplylife_open_kitchen_to_hypnotise_r19_c1.jpg',
  }),
  new Inventory({
  title: 'Fruit Tart',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 10,
  category: 'Pastries',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_hypnotise/simplylife_open_kitchen_to_hypnotise_r19_c1.jpg',
  }),
  //Salad 2
  new Inventory({
  title: 'Big Salad"',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 25,
  category: 'Salads',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r7_c2.jpg',
  }),
  new Inventory({
  title: 'Small Salad"',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 15,
  category: 'Salads',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r7_c2.jpg',
  }),
  // Sandwich 6
  new Inventory({
  title: 'Salami and Brie',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 28,
  category: 'Sandwiches',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r15_c2.jpg',
  }),
  new Inventory({
  title: 'Parma Ham and Cheddar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 28,
  category: 'Sandwiches',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r15_c2.jpg',
  }),
  new Inventory({
  title: 'Egg and Ham',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 28,
  category: 'Sandwiches',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r15_c2.jpg',
  }),
  new Inventory({
  title: 'Avocado and Egg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 28,
  category: 'Sandwiches',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r15_c2.jpg',
  }),
  new Inventory({
  title: 'Tuna and Parmasean',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 28,
  category: 'Sandwiches',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r15_c2.jpg',
  }),
  new Inventory({
  title: 'Portobello, Tomato and Mozarella',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 28,
  category: 'Sandwiches',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r15_c2.jpg',
  }),
// Soup 3
  new Inventory({
  title: 'Pumpkin',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 24,
  category: 'Soups',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r22_c5.jpg',
  }),
  new Inventory({
  title: 'Mushroom',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 24,
  category: 'Soups',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r22_c5.jpg',
  }),
  new Inventory({
  title: 'Vegetable',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 24,
  category: 'Soups',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_comfort/simplylife_open_kitchen_to_comfort_r22_c5.jpg',
  }),
  // Snacks 9
  new Inventory({
  title: 'Fruit Cup',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  new Inventory({
  title: 'Kettle Chips, BBQ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  new Inventory({
  title: 'Kettle Chips, Cheddar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  new Inventory({
  title: 'Apple',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  new Inventory({
  title: 'Bananna',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  new Inventory({
  title: '70% Chocolate',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  new Inventory({
  title: 'Coffee Flavoured Chocolate',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  new Inventory({
  title: 'Chilli Nut Trail',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  new Inventory({
  title: 'Oat Bar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Snacks',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r20_c2.jpg',
  }),
  // Beverages 12
  new Inventory({
  title: 'Cappucino',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Latte',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Flat White',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Espresso',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Americano',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Berry Smoothie',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Greenie Smoothie',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Orange Juice',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Grapefruit Juice',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Apple Juice',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Sparkling Water',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
  new Inventory({
  title: 'Water',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 13,
  category: 'Beverages',
  imagePath: 'http://www.simplylife.com.hk/img/kitchen/to_wake/Simplylife_open_kitchen_to_wake_r8_c5.jpg',
  }),
];

var done = 1
for(var i = 0; i < inventories.length; i++){
  inventories[i].save(function(err, result){
    done++;
    if(done===inventories.length){
      exit();
    };
  });
};

function exit(){
  mongoose.disconnect();
};