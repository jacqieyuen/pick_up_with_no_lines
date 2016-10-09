const Inventory = require('../models/inventory');

module.exports = function(app, passport){

  app.get('/', function(req,res, next){ //what is next for?

    Inventory.find(function(err, items){
      if(err){
        res.send(err);
      };
        var itemChunks = [];
        var chunkSize = 3;
        for(var i = 0; i < items.length; i += chunkSize){
          itemChunks.push(items.slice(i, i + chunkSize));
        };
        res.render('shop/menu', {inventory : itemChunks});
    });
  });


// Do Not Delete This Curly Bracket.
// It Is The Closing Bracket Of Module.Exports Function
};
////////////////////////////
