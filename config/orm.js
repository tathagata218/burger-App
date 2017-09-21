var connection = require("./connection.js");


var orm = {
    selectAll : function(table_name, cb){
        var query =" SELECT * FROM "+table_name;
        connection.connect(query,function(err,data){
            if(err){
                console.log(err);
            }
            console.log(data);
            cb(data);
        });
    },
    
    insertOne : function(table_name,burgerName,cb){
        var query = "INSERT INTO "+table_name+"(burger_name) VALUES ("+burgerName+")"; 
        connection.connect(query, function(err, data){
            if(err){
                console.log(err);
            }

            console.log(data);
            cb(data);
        });
    },

    updateOne : function(table_name,devYesNo,idGet, cb){
        var query = "update "+table_name+" set devoured = "+devYesNo+"  where ID = "+idGet;
        connection.connect(query,function(err, data){
            if(err){
                console.log(err);
            }
            console.log(data);
            cb(data);
        }); 
    }

}

module.exports = orm;
