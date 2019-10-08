const Sequelize = require("sequelize");
const sequelize = new Sequelize("rw","root","",{host:"localhost",dialect:"mysql",logging:false});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//importovanje modela(tabela)
db.gradjanin = sequelize.import(__dirname+'/gradjanin.js');
db.izbjeglica = sequelize.import(__dirname+'/izbjeglica.js');
db.donacije = sequelize.import(__dirname+'/donacije.js');

//export
module.exports=db;