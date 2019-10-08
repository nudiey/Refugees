var AjaxIz = (function(){
    var konstruktor = function(div){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            if (ajax.readyState == 4 && ajax.status == 200){
                var sadrzaj = JSON.parse(ajax.responseText);
               document.getElementById('imePrezime').innerHTML= sadrzaj.ime + "  "+sadrzaj.prezime;
               document.getElementById('ime').innerHTML= sadrzaj.ime;
               document.getElementById('prezime').innerHTML= sadrzaj.prezime;
               document.getElementById('spol').innerHTML= sadrzaj.spol;
               document.getElementById('jmbg').innerHTML= sadrzaj.jmbg;
               document.getElementById('broj').innerHTML= sadrzaj.brojTelefona;
               document.getElementById('adresa').innerHTML= sadrzaj.adresa;
               document.getElementById('datumRodj').innerHTML= sadrzaj.datumRodjenja;
               document.getElementById('mjestoRodj').innerHTML= sadrzaj.mjestoRodjenja;
               document.getElementById('drzavljanstvo').innerHTML= sadrzaj.drzavljanstvo;
            }
        }
        ajax.open("GET", "http://localhost:3000/uzmiIz", true);   
        ajax.send();
    
    }
    return konstruktor;
    }());

 