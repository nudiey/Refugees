const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Gradjanin = sequelize.define("gradjanin",{
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        ime :  Sequelize.STRING,
        prezime : Sequelize.STRING,
        spol : Sequelize.STRING,
        email : Sequelize.STRING,
        brojTelefona : Sequelize.STRING,
    })
    return Gradjanin;
};