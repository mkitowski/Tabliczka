var dzial = document.getElementById("dzialanie");
var wyn = document.getElementById("wynik");
var kon = document.getElementById("koniec");
var z = 0;
var sw = 0;
var d = 0;
var w = 0;
var cza = 0;
var mierz = false;

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
    dzial.value = a +" * "+b;
    sw = a * b;    
}

losu();

//function odliczaj(cza) {
    setInterval(function() {
        if (mierz) {
            document.getElementById("czas").innerHTML = "Czas :"+ cza;
            cza++;
            odliczaj(cza)
        }
    }, 1000);
               
               
}(cza);

function sprawdz() {
    console.log("wcisles");
    w = Number(wyn.value);
    if (d < 6) {
        if (sw == w) {
            document.getElementById("koniec").innerHTML = "Dobrze jedziemy dalej!!";
            losu();
            d++;
            wyn.value = "";
            
        } else {
            document.getElementById("koniec").innerHTML = "Cos poszło nie tak ... poprawny wynik mnożenia "+ sw;
            losu();
            z++;
            wyn.value = "";
            mierz = false;
        }
    } else {
        var cal = d+z;
        document.getElementById("koniec").innerHTML = "Brawo zadanie skończone <br> Wykonałeś "+ cal +" zadań ";
        document.getElementById("koniec").innerHTML += "w tym "+ z +" zle";
    }
}


