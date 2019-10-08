const express = require('express');
const bodyParser = require('body-parser');
const fs =  require('fs');
const app = express(); //express
var url = require('url');
var http = require('http');
const path = require("path");
const db = require('./db.js');
const val = require('./donacije.js');
const router = express.Router();



app.use(express.static('/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);


//kreiramo tabele iz definisanih modela
db.sequelize.sync().then(function(){

});

//da koristimo sve iz publica
app.use(express.static(path.join(__dirname, 'public'))); //tako exportujemo svaki html i css

//kako povezujem html stranice
//moram na formi imati action i method, a u formi button type submit, kad se klikne na button on trazi u index.js app.post i stim se manervise..
//ubacuju se podaci u bazu i slicno pomocu njega
router.get('/naslovna',function(req,res){
  res.sendFile(path.join(__dirname+'/public/naslovna.html'));
});

router.get('/koncept',function(req,res){
  res.sendFile(path.join(__dirname+'/public/koncept.html'));
});

router.get('/zemlje',function(req,res){
  res.sendFile(path.join(__dirname+'/public/countries.html'));
});

router.get('/editGr',function(req,res){
  res.sendFile(path.join(__dirname+'/public/editGr.html'));
});
router.get('/azil',function(req,res){
  res.sendFile(path.join(__dirname+'/public/azil.html'));
});
router.get('/editIz',function(req,res){
  res.sendFile(path.join(__dirname+'/public/editIz.html'));
});
router.get('/faq',function(req,res){
  res.sendFile(path.join(__dirname+'/public/faq.html'));
});

router.get('/kontakt',function(req,res){
  res.sendFile(path.join(__dirname+'/public/kontakt.html'));
});

router.get('/donacije',function(req,res){
  res.sendFile(path.join(__dirname+'/public/donacije.html'));
});

app.get('/',function( req,res){ //otvorilo login formu
    res.sendFile(path.join(__dirname, "public", "login.html"));

});



app.get('/registracija', function(req, res) {
  res.sendFile('/public/'+"signUp.html", {root: __dirname});
});

app.get('/profil', function(req, res) { 
  res.sendFile('/public/'+"profilGr.html", {root: __dirname});
});

app.get('/uzmiGr', function(req, res) {
db.gradjanin.findOne({//vraca zadnjeg
    where: {},order: [ [ 'createdAt', 'DESC' ]],
}).then(function(osoba){
    if(osoba!=null){
      var objekat ={ime: osoba.ime, prezime: osoba.prezime, username: osoba.username, password: osoba.password, spol: osoba.spol, email: osoba.email, brojTelefona: osoba.brojTelefona};
      res.writeHead(200,{"content-type": "application/json"});
      res.end(JSON.stringify(objekat));
    }
});
});

app.get('/greska',function(req,res){
  res.sendFile('/public/'+"greska.html", {root: __dirname});
});


app.get('/uzmiIz', function(req, res) {
  db.izbjeglica.findOne({where: {},order: [ [ 'createdAt', 'DESC' ]],}).then(function(osoba){
    if(osoba!=null){
      var objekat ={ime: osoba.ime, prezime: osoba.prezime, username: osoba.username, password: osoba.password, spol: osoba.spol, jmbg: osoba.jmbg, brojTelefona: osoba.brojTelefona, adresa:osoba.adresa, datumRodjenja: osoba.datumRodjenja, mjestoRodjenja:osoba.mjestoRodjenja, drzavljanstvo:osoba.drzavljanstvo};
      res.writeHead(200,{"content-type": "application/json"});
      res.end(JSON.stringify(objekat));
    }
});
});
app.get('/otvori',function(req,res){
  res.sendFile('/public/'+"login.html", {root: __dirname});
});
app.get('/profilIz', function(req, res) {(
  res.sendFile('/public/'+"profilIz.html", {root: __dirname}));
});

app.get('/provjera/:pw', function(req, res) {
  db.gradjanin.findOne({where:{password: req.params.pw}}).then(function(osoba){
    if(osoba==null){
      console.log(req.params.pw);
      res.redirect('/greska'); 
    }else{
      res.redirect('/profil'); 
    }  
  });
});

app.post('/signUp', function (req, res) {
  res.redirect("/registracija");
});

app.post('/donacije', function(req,res){
  db.donacije.create({
      kolicina: req.body.kolicina,
      ime: req.body.ime,
      prezime: req.body.prezime,
      email: req.body.email,
      adresa: req.body.adresa,
      postanskiBroj: req.body.postanskiBroj,
      grad: req.body.grad,
      brojKreditne: req.body.brojKartice 
  });
  res.redirect('/donacije');
});

app.post('/editGr', function(req,res){
    var imeG= req.body.ime;
    var prezimeG= req.body.prezime;
    var emailG = req.body.email;
    var brojTelG = req.body.brojTelefona;
    var ime, prezime,email,brojTel,objekat;
    console.log(emailG);
    if(imeG!="") ime=imeG;
    if(prezimeG!="")prezime=prezimeG;
    if(emailG!="") email=emailG;
    if(brojTelG!="") brojTel=brojTelG;
    db.gradjanin.findOne({//vraca zadnjeg
      where: {},order: [ [ 'createdAt', 'DESC' ]],
  }).then(function(osoba){
      if(osoba!=null){
        console.log(osoba.email);
        if(imeG=="") ime=osoba.ime;
        if(prezimeG=="")prezime=osoba.prezime;
        if(emailG=="") email=osoba.email;
        if(brojTelG=="") brojTel=osoba.brojTelefona;
    
        db.gradjanin.create({
          ime: ime,
          prezime: prezime,
          spol: osoba.spol,
          email: email,
          brojTelefona: brojTel
      });
      }
    });
  res.redirect('/profil');
});

app.post('/editIz', function(req,res){
  var imeG= req.body.ime;
  var prezimeG= req.body.prezime;
  var jmbgG = req.body.jmbg;
  var adresaG = req.body.adresa;
  var datumG = req.body.datumRodj;
  var mjestoG = req.body.mjestoRodj;
  var drzavljanstvoG = req.body.drzavljanstvo;
  var brojTelG = req.body.brojTel;
  var ime, prezime,jmbg,brojTel,adresa,datum,mjesto,drzavljanstvo;
  
  if(imeG!="") ime=imeG;
  if(prezimeG!="")prezime=prezimeG;
  if(jmbgG!="") jmbg=jmbgG;
  if(brojTelG!="") brojTel=brojTelG;   
  if(adresaG!="") adresa=adresaG;
  if(datumG!="")datum=datumG;
  if(mjestoG!="") mjesto=mjestoG;
  if(drzavljanstvoG!="") drzavljanstvo=drzavljanstvoG;


  db.izbjeglica.findOne({//vraca zadnjeg
    where: {},order: [ [ 'createdAt', 'DESC' ]], }).then(function(osoba){
  console.log("pronasao jednog..OK");
    if(osoba!=null){
      if(imeG=="") ime=osoba.ime;
      if(prezimeG=="")prezime=osoba.prezime;
      if(jmbgG=="") jmbg=osoba.jmbg;
      if(brojTelG=="") brojTel=osoba.brojTelefona;
      if(adresaG=="") adresa=osoba.adresa;
      if(datumG=="")datum=osoba.datumRodjenja;
      if(mjestoG=="") mjesto=osoba.mjestoRodjenja;
      if(drzavljanstvoG=="") drzavljanstvo=osoba.drzavljanstvo;
      db.izbjeglica.create({
        username: osoba.username,
        password: osoba.password,
        ime: ime,
        prezime: prezime,
        spol: osoba.spol,
        adresa: adresa,
        datumRodjenja: datum,
        mjestoRodjenja: mjesto,
        drzavljanstvo:drzavljanstvo,
        brojTelefona: brojTel,
        jmbg: jmbg,
        createdAt: new Date(), 
        updatedAt: new Date()
    });
  
    }
  });
res.redirect('/profilIz');
});

//uzimam podatke i pisem u txt sa signUp forme
app.post('/registracija',function (req, res){
  var objekat ={ime: req.body.ime, prezime: req.body.prezime, username: req.body.username, password: req.body.password, spol: req.body.spol};
  objekat = JSON.stringify(objekat);
  fs.writeFile(__dirname +'/public/podaci.json', objekat, (err) =>{ //upisala u json.file
    if(err) throw err;
  });
});


app.post('/reg',function (req, res) {
    var email = req.body.email;
    var  brojTelefona = req.body.brojTelefona;
    //čitao iz json file.a
    fs.readFile(__dirname +'/public/podaci.json', (err, data) => {
      if (err) throw err;
      let podaci = JSON.parse(data);
      db.gradjanin.create({
        username: podaci.username,
        password: podaci.password,
        ime: podaci.ime,
        prezime: podaci.prezime,
        spol: podaci.spol,
        email: email,
        brojTelefona: brojTelefona
    });
    res.redirect("/profil");
  });
     
});
app.post('/login',function (req, res) {
  var us= req.body.username;
  var pw = req.body.password;
  console.log(pw);
  db.izbjeglica.findOne({where:{password: pw}}).then(function(osoba){
      if(osoba==null){
        res.redirect('/provjera/'+ pw); 
      }else{
        res.redirect('/profilIz'); 
      }      
  });

});

app.post('/izbjeglica',function (req, res) {
  var adresa = req.body.adresa;
  var  datumRodjenja = req.body.datumRodjenja;
  var mjestoRodjenja = req.body.mjestoRodjenja;
  var drzavljanstvo = req.body.drzavljanstvo;
  var jmbg = req.body.jmbg;
  var brojTelefona = req.body.brojTelefona;
  

  fs.readFile(__dirname +'/public/podaci.json', (err, data) => {
    if (err) throw err;
    let podaci = JSON.parse(data);
    db.izbjeglica.create({
      username: podaci.username,
      password: podaci.password,
      ime: podaci.ime,
      prezime: podaci.prezime,
      spol: podaci.spol,
      adresa: adresa,
      datumRodjenja: datumRodjenja,
      mjestoRodjenja: mjestoRodjenja,
      drzavljanstvo: drzavljanstvo,
      jmbg:jmbg,
      brojTelefona: brojTelefona
  });
  res.redirect("/profilIz");
});  
  
});


 


app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

module.exports = app;


