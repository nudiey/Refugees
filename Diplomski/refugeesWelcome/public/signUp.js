function PrikaziG(){
    var prikaz = document.getElementById("gradjanin");
    var forma = document.getElementById("izbjeglica");

    if(forma.style.visibility=="visible"){
     forma.style.visibility="hidden"; 
    }
    prikaz.style.visibility="visible";

}
function ValidirajGr(){
    var email = document.getElementById('email');
    var ValEmail=true;

    var broj = document.getElementById('broj').value;
    var ValBroj =true;
    console.log(email.value);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) //provjera email-a
    { 
        console.log('usao');
        ValEmail=true;
     }
    else ValEmail=false; 

    if(/^[0]\d{2}[-]\d{3}[-]\d{3}$/.test(broj)){
        ValBroj=true;
    }else ValBroj=false;

    if(ValEmail==false){
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('email').value="Unesite validan email";
    }else{
        document.getElementById('email').style.borderColor = "grey";
    }

    if(ValBroj==false){
        document.getElementById('broj').style.borderColor = "red";
        document.getElementById('broj').value="0xx-xxx-xxx";
    }else{
        document.getElementById('broj').style.borderColor = "grey";
    }
    if(ValBroj && ValEmail){
        location.href= document.getElementById('otvori').href ;
    }
}
function PrikaziI(){
    var prikaz = document.getElementById("gradjanin");
    var forma = document.getElementById("izbjeglica");
    
    if(prikaz.style.visibility=="visible"){
     prikaz.style.visibility="hidden"; 
    }
    forma.style.visibility="visible";

}
function ValidirajIz(){
    var adresa = document.getElementById('adresa').value;    
    var ValAdresa = true;
    var datumRod = document.getElementById('date').value;
    var ValDatum = true;
    var mjesto = document.getElementById('mjestoRodj').value;
    var valMjesto = true;
    var drzavljanstvo = document.getElementById('drzavljanstvo').value;
    var valDrzavljanstvo = true;
    var broj = document.getElementById('broj1').value;
    var ValBroj =true;
    var jmbg=document.getElementById('jmbg').value;
    var ValJMBG = true;

    if(/^\d{13}$/.test(jmbg)){
        ValJMBG=true;
    }else{
        ValJMBG=false;
    }
    console.log(broj);
    if(/^[0]\d{2}[-]\d{3}[-]\d{3}$/.test(broj)){
        ValBroj=true;
    }else ValBroj=false;

    if(drzavljanstvo>='0' && drzavljanstvo<='9') valDrzavljanstvo = false;
    else if(drzavljanstvo=="") valDrzavljanstvo = false;
    else valDrzavljanstvo=true;

    if(adresa>='0' && adresa<='9') ValAdresa = false;
    else if(adresa=="") ValAdresa = false;
    else ValAdresa=true;

    if(mjesto>='0' && mjesto<='9') valMjesto = false;
    else if(mjesto=="") valMjesto = false;
    else valMjesto=true;

    if(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(datumRod)){
        ValDatum=true;
    }else ValDatum =false;



    if(ValAdresa==false){
        document.getElementById('adresa').style.borderColor = "red";
        document.getElementById('adresa').value="Unesite validnu adresu";
    }else{
        document.getElementById('adresa').style.borderColor = "grey";
    }

    if(valDrzavljanstvo==false){
        document.getElementById('drzavljanstvo').style.borderColor = "red";
        document.getElementById('drzavljanstvo').value="Unesite validno drzavljanstvo";
    }else{
        document.getElementById('drzavljanstvo').style.borderColor = "grey";
    }

    
    if(ValDatum==false){
        document.getElementById('date').style.borderColor = "red";
        document.getElementById('date').value="Unesite validan datum rodjenja: DD/MM/YYYY";
    }else{
        document.getElementById('date').style.borderColor = "grey";
    }

    if(ValBroj==false){
        document.getElementById('broj1').style.borderColor = "red";
        document.getElementById('broj1').value="0xx-xxx-xxx";
    }else{
        document.getElementById('broj1').style.borderColor = "grey";
    }

    if(valMjesto==false){
        document.getElementById('mjestoRodj').style.borderColor = "red";
        document.getElementById('mjestoRodj').value="Unesite validno mjesto rodjena";
    }else{
        document.getElementById('mjestoRodj').style.borderColor = "grey";
    }

    if(ValJMBG==false){
        document.getElementById('jmbg').style.borderColor = "red";
        document.getElementById('jmbg').value="Validan JMBG ima 13 cifara";
    }else{
        document.getElementById('jmbg').style.borderColor = "grey";
    }
    console.log(ValBroj);
    if(valDrzavljanstvo && valMjesto && ValAdresa && ValBroj && ValDatum && ValJMBG){
        location.href= document.getElementById('otvoriIz').href ;
    }
}

function Validiraj(x){
    var ime = document.getElementById('ime').value;
    var Valime= true;
    var prezime = document.getElementById('prezime').value;
    var valPrezime = true;
    var us = document.getElementById('username').value;
    var valUs = true;
    var pw = document.getElementById('pw').value;
    var valPw = true;


    if(ime>='0' && ime<='9') Valime = false; //testiram ime, ako je broj ili prazno polje onda je false
    else if(ime=="") Valime = false;
    else Valime=true;

    if(prezime>='0' && prezime<='9') valPrezime = false; //testiram prezime, ista logika
    else if(prezime=="") valPrezime = false;
    else valPrezime=true;

    if(us=="") valUs = false;
    else valUs=true;

    if(pw=="") valPw = false;
    else valPw=true;

    if(Valime==false){
        document.getElementById('ime').style.borderColor = "red";
    }else{
        document.getElementById('ime').style.borderColor = "grey";
    }

    if(valPrezime==false){
        document.getElementById('prezime').style.borderColor = "red";
    }else{
        document.getElementById('prezime').style.borderColor = "grey";
    }

    if(valUs==false){
        document.getElementById('username').style.borderColor = "red";
    }else{
        document.getElementById('username').style.borderColor = "grey";
    }

    if(valPw==false){
        document.getElementById('pw').style.borderColor = "red";
    }else{
        document.getElementById('pw').style.borderColor = "grey";
    }
    if(Valime && valPw && valUs && valPrezime){
        var button= document.getElementById('grad').id;
        var buttonIz = document.getElementById('iz').id;

        if(button==x.id){
            PrikaziG();
        }
        else if(buttonIz==x.id){
            PrikaziI();
        }
    }

}

var god,edit;
var god=function(){
    god = new AjaxGr(document.getElementById("glavniSadrzaj"));
 
}



var izb;
var izb=function(){
    izb = new AjaxIz(document.getElementById("glavniSadrzaj"));
}

var promjeni=function(){
    document.getElementById('azil').innerHTML="Status se obrađuje.";
}