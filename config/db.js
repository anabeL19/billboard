module.exports = {

    dbuser : "mobile_billboard",

    dbpassword : "7adWT9-FyJQ2_q7",

    dbUrl : function (){

        var url = "mongodb+srv://"+ this.dbuser+":"+ this.dbpassword + "@cluster0-pqjui.mongodb.net/test?retryWrites=true"

        return url;

    }

}