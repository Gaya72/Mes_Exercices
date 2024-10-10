
let sum = 0;  // gumar
let count = 0;  // tveri qanak

// bouton
document.getElementById('addNumber').addEventListener('click', function() {
    let number = parseInt(document.getElementById('numberInput').value); // 

    // Si le nombre est 0, on arrête la saisie
    if (number === 0) {
        alert("Saisie arrêtée.");
        return;  // Arrêter le programme
    }

    // Ajouter le nombre à la somme
    sum += number;
    count++;  // Incrémenter le compteur

    // Calculer la moyenne
    let average = sum / count;

    // Afficher les résultats à l'écran
    document.getElementById('sumResult').textContent = "Somme : " + sum;
    document.getElementById('averageResult').textContent = "Moyenne : " + average;

    // Réinitialiser le champ de saisie
    document.getElementById('numberInput').value = '';
});
    



document.getElementById('showNumbers').addEventListener('click', function() {
    const N = parseInt(document.getElementById('numberInput').value); // Получаем значение N
    let result = ''; // Переменная для хранения чисел

    // Проверяем, является ли N корректным числом
    if (isNaN(N)) {
        result = 'Пожалуйста, введите корректное число.';
    } else {
        // Генерация чисел меньше N
        for (let i = 0; i < N; i++) {
            result += i + ' '; // Добавляем числа к результату
        }
    }

    // Отображаем результат
    document.getElementById('result').textContent = result;

    
});


 // Gestionnaire d'événement pour le bouton
 document.getElementById('calculateMultiples').addEventListener('click', function() {
    const N = parseInt(document.getElementById('nInput').value); // On récupère la valeur de N
    const X = parseInt(document.getElementById('xInput').value); // On récupère la valeur de X
    let result = ''; // Variable pour stocker les résultats

    // Vérification si N et X sont des nombres valides
    if (isNaN(N) || isNaN(X)) {
        result = 'Veuillez entrer des nombres valides.';
    } else {
        // Utilisation d'une boucle for pour calculer les multiples de X
        for (let i = 1; i <= N; i++) {
            result += i + ' × ' + X + ' = ' + (i * X) + '<br>'; // On crée la chaîne de résultat
        }
    }

    // Affichage du résultat
    document.getElementById('result').innerHTML = result;
});


 // Fonction pour compter le nombre de voyelles
 function countVowels() {
    const vowels = "aeiouyAEIOUY"; // Définir les voyelles (majuscule et minuscule)
    let word = document.getElementById("wordInput").value; // Récupérer le mot saisi
    let vowelCount = 0; // Initialiser le compteur de voyelles

    // Parcourir chaque lettre du mot
    for (let i = 0; i < word.length; i++) {
        // Extraire la lettre à la position i
        let letter = word.substring(i, i + 1);

        // Vérifier si la lettre est une voyelle (présente dans la chaîne "vowels")
        if (vowels.indexOf(letter) !== -1) {
            vowelCount++; // Si voyelle trouvée, incrémenter le compteur
        }
    }

    // Afficher le résultat
    document.getElementById("result").innerHTML = `Le mot contient ${vowelCount} voyelle(s).`;
}

// Associer la fonction au bouton "Compter les voyelles"
document.getElementById("countVowels").addEventListener("click", countVowels);