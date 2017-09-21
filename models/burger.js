var orm = require("../config/orm.js");


var burger = {

    all : function(cb) {
        orm.selectAll("burgers", function (res){
            console.log(res);
        });
    },

    create : function(burgerName,cb){
        orm.insertOne("burgers",burgerName, function(res){
            cb(res);
        });
    },
    
    update : function(devYesNo,idGet,cb) {
        orm.updateOne("burgers", devYesNo, idGet, function(res){
            cb(res);
        });
    }

}

module.exports = burger;