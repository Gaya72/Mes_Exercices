

//  Exercice 1  
/*
prompt bacum e poqrik patuhan hastatelu hamar 
erkrord toxum hajord harcy
alert-ov yndunum e patasxany;
\n hagord toxi ancumn e
*/


let name = prompt("Votre Prenom :");
let lastname = prompt("Votre nom :");
alert("Ravi(e) de faire votre connaissance.");


// Exercice1/2 
/*nuyn patuhani tarbraky 
if-ete
else-hakarak depqum
tarberaki porc*/


let x = prompt("Comment allez-vous?");
if(x === "bien") {
    alert("oh, c'est tres bien");
} else {
    alert("pourquoi?");
}

//Excercice1/3 xax
/* havaqum enq baller
ete if chisht e havaqum enq 1 nish everjum hashvum e qanaky
karelie sharunakel harcery
*/


let points = 0;
let resp0 = prompt("Quelle est la capitale d'Armenie?");
if(resp0 === "EREVAN") {
    points = points + 1;
}
let resp1 = prompt("Quelle est la capital du france?");
if(resp1 === "PARIS") {
    points = points + 1;
}
let resp2 = prompt("Quelle est la capital de la Russie?")
if(resp2 === "MOSCOU"){
    points = points + 1;
}
alert("Vos points!\n" + points + "/3");

//EX.3
/*entrer les degrés Celsius
convertir en Fahrenheit*/

let celsius = parseFloat(prompt("Entrez la température en degrés Celsius :"));
let fahrenheit = celsiusToFahrenheit(celsius);
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
alert("La température en degrés Fahrenheit est : " + fahrenheit.toFixed(2) + " °F");

//Ex.4
/*opérateure
exercice*/


let a = "100";
 if(a === "100") {
  alert("Ceci est une chaîne de caractère :" + " " + 100);
}else {
  alert("C'est un nombre");
}

let b = 100;
 b --;
let b1 = b;
  alert(b1);

let c = 1.00;
let c1 = a + c;
  alert(c1);

let d = true;
 boolean = d;
  if(Boolean === d){
    alert("true");
}
else{
    alert("false");
}

   

//Ex.5/1
function testerPairImpair() {
  // Demander à l'utilisateur de saisir un nombre
  var nombre = parseInt(prompt("Entrez un nombre :"));

  // Vérifier si le nombre est pair ou impair en utilisant l'opérateur modulo
  if (nombre % 2 === 0) {
    alert("Le nombre " + nombre + " est pair.");
  } else {
    alert("Le nombre " + nombre + " est impair.");
  }
}

// Appeler la fonction pour exécuter le programme
testerPairImpair();


//ex.5/2

// Fonction pour calculer l'âge et déterminer si l'utilisateur est majeur ou mineur
function calculerAge() {
  // Demander l'année de naissance à l'utilisateur
  var anneeNaissance = prompt("Veuillez entrer votre année de naissance (par exemple, 2000) :");

  // Obtenir l'année actuelle
  var anneeActuelle = new Date().getFullYear();

  // Calculer l'âge
  var age = anneeActuelle - anneeNaissance;

  // Vérifier si l'âge est valide (année de naissance réaliste)
  if (age >= 0 && age <= 120) {
    // Vérifier si l'utilisateur est majeur ou mineur
    if (age >= 18) {
      alert("Vous avez " + age + " ans. Vous êtes majeur(e).");
    } else {
      alert("Vous avez " + age + " ans. Vous êtes mineur(e).");
    }
  } else {
    alert("L'année de naissance que vous avez entrée est invalide.");
  }
}

// Appeler la fonction pour exécuter le programme
calculerAge();


//ex.5/3


function calculer() {
  // Saisie des deux nombres
  var nombre1 = parseInt(prompt("Entrez le premier nombre entier :"));
  var nombre2 = parseInt(prompt("Entrez le deuxième nombre entier :"));

  // Saisie de l'opérateur
  var operateur = prompt("Entrez un opérateur (+, -, *, /) :");

  // Vérification de l'opérateur et exécution du calcul correspondant
  var resultat;
  if (operateur === "+") {
    resultat = nombre1 + nombre2;
  } else if (operateur === "-") {
    resultat = nombre1 - nombre2;
  } else if (operateur === "*") {
    resultat = nombre1 * nombre2;
  } else if (operateur === "/") {
    // Gestion de la division par zéro
    if (nombre2 === 0) {
      alert("Erreur : Division par zéro impossible !");
      return; // On arrête l'exécution du programme en cas d'erreur
    } else {
      resultat = nombre1 / nombre2;
    }
  } else {
    // Si l'opérateur est invalide
    alert("Erreur : Opérateur non valide !");
    return; // On arrête l'exécution du programme
  }

  // Affichage du résultat
  alert("Le résultat de " + nombre1 + " " + operateur + " " + nombre2 + " est : " + resultat);
}

// Appeler la fonction pour exécuter le programme
calculer();




