const Inventory = require('../models/inventory');

module.exports = function(app, passport){

  function findInventoryDatabase(req, res, next) {
      Inventory.find(function(err, items){
      if(err){
        res.send(err);
      };
      var itemChunks = [];
      var chunkSize = 3;
      for(var i = 0; i < items.length; i += chunkSize){
        itemChunks.push(items.slice(i, i + chunkSize));
      };
      req.inventory = itemChunks;
      next();
    });
  };

  function distinctInventoryCategory(req, res, next){
    Inventory.distinct('category', function(err, items){
      if(err){
        res.send(err);
      };
      req.category = items;
      next()
    });
  };

  function renderMenu(req, res){
    res.render('shop/menu', {
        inventory: req.inventory,
        category: req.category
    });
  };

  app.get('/', findInventoryDatabase, distinctInventoryCategory, renderMenu);


  // function(req,res, next){ //what is next for?

  //   Inventory.find(function(err, items){
  //     if(err){
  //       res.send(err);
  //     };
  //     var itemChunks = [];
  //     var chunkSize = 3;
  //     for(var i = 0; i < items.length; i += chunkSize){
  //       itemChunks.push(items.slice(i, i + chunkSize));
  //     };

  //     res.render('shop/menu', {inventory : itemChunks});
  //   });
  // }, function(req, res, next){
  //   Inventory.distinct('categories', function(err, categories){
  //     if(err){
  //       res.send(err)
  //     };
  //     res.render('shop/menu', {category : categories});
  //     });
  // });

  // app.get('/categories', function(req,res, next){ //what is next for?

  //   Inventory.distinct('category', function(err, categories){
  //     if(err){
  //       res.send(err);
  //     };
  //     res.render('partials/menu_filter_nav_bar.pug', {category : categories});
  //   });
  // });


// Do Not Delete This Curly Bracket.
// It Is The Closing Bracket Of Module.Exports Function
};
////////////////////////////
