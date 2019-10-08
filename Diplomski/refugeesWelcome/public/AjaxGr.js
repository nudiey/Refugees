var AjaxGr = (function(){
    var konstruktor = function(div){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            if (ajax.readyState == 4 && ajax.status == 200){
                var sadrzaj = JSON.parse(ajax.responseText);
                document.getElementById('imePrezime').innerHTML= sadrzaj.ime +"  "+ sadrzaj.prezime;
               document.getElementById('ime').innerHTML= sadrzaj.ime;
               document.getElementById('prezime').innerHTML= sadrzaj.prezime;
               document.getElementById('spol').innerHTML= sadrzaj.spol;
               document.getElementById('email').innerHTML= sadrzaj.email;
               document.getElementById('broj').innerHTML= sadrzaj.brojTelefona;
            }
        }
        ajax.open("GET", "http://localhost:3000/uzmiGr", true);   
        ajax.send();
    
    }
    return konstruktor;
    }());

 