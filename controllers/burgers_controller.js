var express = require("express");
var router = express.Router();

var burger_item = require("../models/burger.js");

router.get('/', function(req,res){
    burger_item.all(function(data){
      
        //console.log(data);
        res.render("index", data);
    });
});


router.post('/',function(req,res){
    burger_item.create(res.body.name, function(){
        res.redirect("/");
    });
});

router.put("/:id",function(){
    var idFromHTML =  res.params.id;
    burger_item.update(res.body.condition, idFromHTML, function(){
        res.redirect("/");
    });

});

module.exports = router;