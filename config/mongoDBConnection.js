const mongoose = require("mongoose");

const connectDb = async () => {
    try{
        const connection = await mongoose.connect("mongodb+srv://maobakg:pWResSro3qdalaGq@cluster0.hnqx1u5.mongodb.net/?retryWrites=true&w=majority/FinancialLog");
        console.log(`database connnect to ${connection.connection.host}`)
    }catch (err){
        console.log(err)
        process.exit(1)
    }
};

/*

mongodb+srv://maobakg:pWResSro3qdalaGq@cluster0.hnqx1u5.mongodb.net/?retryWrites=true&w=majority

*/

module.exports = connectDb;