const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Izbjeglica = sequelize.define("izbjeglica",{
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        ime :  Sequelize.STRING,
        prezime : Sequelize.STRING,
        spol : Sequelize.STRING,
        adresa :  Sequelize.STRING,
        datumRodjenja : Sequelize.STRING,
        mjestoRodjenja : Sequelize.STRING,
        drzavljanstvo : Sequelize.STRING,
        brojTelefona : Sequelize.STRING,
        jmbg : {
            type: Sequelize.STRING,
        }

    })
    return Izbjeglica;
};

