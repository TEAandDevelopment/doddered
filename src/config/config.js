var DEV_CONFIG = {
    port: 1963,
    db: "mongodb://testdbuser:450634506@dbh45.mongolab.com:27457/mytestdb"//my db connection
};//development config

var PROD_CONFIG = {
    port: 3000,
    db: ""
};//production config

module.exports = function(){
    switch(process.env.NODE_ENV){
        case "development":
            return DEV_CONFIG;

        case "production":
            return PROD_CONFIG;

        default:
            return DEV_CONFIG;
    }
};
