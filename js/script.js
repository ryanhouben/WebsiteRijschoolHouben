/**
 * Created by Ryan on 1-4-2017.
 */
function geslaagdeLatenZien() {

    var geslaagde = ["Kenny Debeij", "Ryan Houben", "Tom Muijsers", "Joep Webers", "Denise Klumpkens", "Raf Houben", "Margot Bloemers",

        "Dylan Corvers", "Luke Jetten", "Shanon Koster", "Julia Poussart"];



    return geslaagde[Math.floor(Math.random() * geslaagde.length)];

}

for (i = 0; i < 6; i++) {

    document.getElementById('p' + (i + 1)).innerHTML = geslaagdeLatenZien();

    console.log('p' + (i + 1));

}