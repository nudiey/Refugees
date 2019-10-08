const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Donacije = sequelize.define("donacije",{
        kolicina: Sequelize.INTEGER,
        ime :  Sequelize.STRING,
        prezime : Sequelize.STRING,
        email: Sequelize.STRING,
        adresa :  Sequelize.STRING,
        postanskiBroj : Sequelize.STRING,
        grad : Sequelize.STRING,
        brojKreditne : Sequelize.STRING,
      

    })
    return Donacije;
};

