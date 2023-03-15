var vize = document.getElementById("vize");
var final = document.getElementById("final");
var btnHesap = document.getElementById("hesap");
var vizeoran = document.getElementById("vize-oran");
var finaloran = document.getElementById("final-oran");



btnHesap.onclick = function (e) {

    var durum = "";
    var vizenotu = Number(vize.value);
    var finalnotu = Number(final.value);
    var result = document.getElementById("result");
    result.innerHTML = "";
    var ortalama = (vizenotu * (vizeoran.value/100) + finalnotu * (finaloran.value/100));

    if (ortalama >= 50 && finalnotu >= 50) {
        durum = "Geçtiniz."
        result.value = durum;
        result.classList = "pass";
        console.log(ortalama)
    }
    else if (ortalama >= 50 && finalnotu < 50) {

        durum = "Final notunuz 50'den düşük, kaldınız."
        result.value = durum;
        result.classList = "dont-pass";
        result.setAttribute("size", 35)
        console.log(ortalama)

    }
    else {
        durum = "Kaldınız."
        result.value = durum;
        result.classList = "dont-pass";
        console.log(ortalama)

    }
    e.preventDefault();
}