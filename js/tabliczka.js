var dzial = document.getElementById("dzialanie");
var tabl = 0;
var qt = 0; // qoutity to do
var z = 0;
var sw = 0; // calculated aswer
var d = 0; //good aswer
var w = 0; // wrong aswer
var cza = 0;
var mierz = false;
var myVar; 
var i = 0, qwer = 0; 
var fir = [], sec = [], val = [], us = [], times = [];


function start() {
    qt = Number(document.getElementById('qty').value);
    console.log(qt);
    
    var ed = document.getElementById('tabliczka').innerHTML;
    var de = ed.replace('>: <' , '> = <');
    console.log(de);
    document.getElementById('tabliczka').innerHTML = de;
    document.getElementById('qty').setAttribute('id' , 'wynik');
    
    var ed = document.getElementById('przycisk').innerHTML;
    var de = ed.replace('"start()"> Start' , '"sprawdz()"> Sprawdź');
    console.log(de);
    document.getElementById('przycisk').innerHTML = de;
    
    var eb = document.getElementById('timex').innerHTML;
    var be = ed.replace('<div id="time"> </div>' , 'Czas :<div id="time"> </div> sek.');
    console.log(de);
    
    document.getElementById('przycisk').innerHTML = de;
    losu();
    myVar = setInterval(counttime, 10);
}
    
function losu() {
    console.log("losuje");
    var a = Math.floor((Math.random()*10)+2);
    var b = Math.floor((Math.random()*10)+2);
    if (a > 10) {
        a = a - 4;
    }
    if (b > 10) {
        b = b - 4;
    }
    document.getElementById('dzialanie').value = a +" * "+b;
    sw = a * b;  
    console.log(sw +' '+ a);
    fir.push(a);
    sec.push(b);
    val.push(sw);
}

function sprawdz() {
    var wyn = document.getElementById("wynik");
    var kon = document.getElementById("koniec");
    w = Number(document.getElementById("wynik").value);
    us.push(w);
    times.push(i);
    tabl++;
    if (sw == w) {
        d++;
    } else {
        z++;
    }
    qwer = tabl-z;
    console.log('number :'+qwer);
    if (qwer != qt) {
        if (sw == w) {
            kon.innerHTML = "Dobrze, jedziemy dalej!!";
            losu();
            wyn.value = "";
            
        } else {
            document.getElementById("koniec").innerHTML = "Cos poszło nie tak ... poprawny wynik mnożenia to : "+ sw;
            losu();
            wyn.value = "";
            mierz = false;
        }
    } else {
        clearInterval(myVar);
        
        var tim = i/100;
        if (z == 0) {
        document.getElementById("koniec").innerHTML = "Brawo zadanie skończone <br> Wykonałeś "+ (tabl) +" zadań ";
        document.getElementById("koniec").innerHTML += "w tym "+ z +" zle!!";
        document.getElementById("koniec").innerHTML += " Twój czas to: "+tim+" sek.</br></br>";    
        } else {
        document.getElementById("koniec").innerHTML = "Brawo zadanie skończone <br> Wykonałeś "+ (tabl) +" zadań ";
        document.getElementById("koniec").innerHTML += "w tym "+ z +" zle!!"; 
        document.getElementById("koniec").innerHTML += " Twój czas to: "+tim+" sek. </br></br>";  
        }
        summary();
    }
    

};

function counttime() {

    i++;
    var tim = i/100;
    document.getElementById("time").innerHTML = 'Czas: '+tim+' sek.'; 

}  



function summary() {
    var lines;
    for (lines = 0; lines < tabl; lines++ ) {
        if (val[lines] == us[lines]) {
            document.getElementById("koniec").innerHTML += 'Działanie nr.'+ (lines+1) +' Zrobione <B>DOBRZE</B> : '+fir[lines] +'*'+sec[lines];
            document.getElementById("koniec").innerHTML += '='+val[lines];
        } else {
            document.getElementById("koniec").innerHTML += 'Działanie nr.'+ (lines+1) +'  zrobione <B>ŹLE</B>, powinno być : '+fir[lines] +'*'+sec[lines];
            document.getElementById("koniec").innerHTML += '='+val[lines] +' a Twój wynik to:'+us[lines];
        }
        if (lines == 0) {
            document.getElementById("koniec").innerHTML += ' w czasie : '+(times[lines])/100+' sekund.</br>';
        } else {
            var ti =lines-1;
            var t = (times[lines] - times[ti])/100;
            document.getElementById("koniec").innerHTML += ' w czasie : '+t+' sekund.</br>';
        }
    }
}