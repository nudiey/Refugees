function Validacija(){

    var kol = document.getElementById('kol').value;
    var Valkol = true;
    var ime = document.getElementById('ime').value;
    var Valime= true;
    var prezime = document.getElementById('prezime').value;
    var valPrezime = true;
    var email = document.getElementById('email');
    var ValEmail=true;
    var adresa = document.getElementById('adresa').value;    
    var ValAdresa = true;
   
    var select = document.getElementById('country');
    var zip = document.getElementById('zip');
    var ValZip=true;
    var Grad = document.getElementById('grad').value;
    var ValGrad=true;
    var ValSel=true;
    var card=document.getElementById('card');
    var ValCard=true;
  


    if((kol>='A' && kol<='Z')||(kol>='a' && kol<='z')) Valkol= false;
    else if(kol=="") Valkol=false;
    else Valkol=true;

    if(ime>='0' && ime<='9') Valime = false;
    else if(ime=="") Valime = false;
    else Valime=true;

    if(prezime>='0' && prezime<='9') valPrezime = false;
    else if(prezime=="") valPrezime = false;
    else valPrezime=true;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) //provjera email-a
    { 
        ValEmail=true;
     }
    else ValEmail=false; 

    if(adresa>='0' && adresa<='9') ValAdresa = false;
    else if(adresa=="") ValAdresa = false;
    else ValAdresa=true;

     if(select.value) ValSel=true; //provjeravanje selecta
     else ValSel=false;

    if(/^\d{5}$|^\d{5}-\d{4}$/.test(zip.value)){ //postanski broj regex.. 5 brojeva
        ValZip=true;
    }else ValZip=false;

    if(/^\d{16}$/.test(card.value)){
        ValCard=true;
    }else ValCard=false;

    if(Grad>='0' && Grad<='9') ValGrad = false;
    else if(Grad=="") ValGrad = false;
    else ValGrad=true;

    if(Valkol==false){
        document.getElementById('kol').style.borderColor = "red";
    }else{
        document.getElementById('kol').style.borderColor = "grey";
    }

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

    if(ValEmail==false){
        document.getElementById('email').style.borderColor = "red";
    }else{
        document.getElementById('email').style.borderColor = "grey";
    }

    if(ValAdresa==false){
        document.getElementById('adresa').style.borderColor = "red";
    }else{
        document.getElementById('adresa').style.borderColor = "grey";
    }
     
    if(ValSel==false){
        document.getElementById('country').style.borderColor = "red";
    }else{
        document.getElementById('country').style.borderColor = "grey";
    }

    if(ValZip==false){
        document.getElementById('zip').style.borderColor = "red";
    }else{
        document.getElementById('zip').style.borderColor = "grey";
    }

    if(ValGrad==false){
        document.getElementById('grad').style.borderColor = "red";
    }else{
        document.getElementById('grad').style.borderColor = "grey";
    }

    if(ValCard==false){
        document.getElementById('card').style.borderColor = "red";
    }else{
        document.getElementById('card').style.borderColor = "grey";
    }


}
