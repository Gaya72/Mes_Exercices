  // Fonction produit(x, y) qui retourne le produit de deux variables
  function produit(x, y) {
    return x * y;
}

// Fonction pour afficher le résultat du produit
function calculerProduit() {
    const x = parseFloat(document.getElementById('number1').value); // Récupérer le premier nombre
    const y = parseFloat(document.getElementById('number2').value); // Récupérer le deuxième nombre

    if (!isNaN(x) && !isNaN(y)) {
        const resultat = produit(x, y); // Calculer le produit
        document.getElementById('result').innerText = `Le produit de ${x} et ${y} est : ${resultat}`;
    } else {
        document.getElementById('result').innerText = "Veuillez entrer des nombres valides.";
    }
}

// Fonction afficheImg(image) qui affiche une image
function afficheImg(image) {
    const imgElement = document.createElement('img'); // Créer un élément <img>
    imgElement.src = image; // Définir le chemin de l'image
    imgElement.alt = "Image affichée"; // Texte alternatif pour l'image

    const imageContainer = document.getElementById('imageContainer'); // Conteneur de l'image
    imageContainer.innerHTML = ""; // Effacer toute image précédente
    imageContainer.appendChild(imgElement); // Ajouter l'image dans le conteneur
}




 // Fonction strtok pour extraire le nième mot d'une chaîne
 function strtok(str1, str2, n) {
    const words = str1.split(str2); // Diviser la chaîne en utilisant le séparateur
    return words[n] !== undefined ? words[n] : null; // Retourner le nième mot ou null si n'est pas défini
}

// Fonction pour récupérer les valeurs et afficher le résultat
function extractWord() {
    const str1 = document.getElementById("inputString").value; // Récupérer la chaîne d'entrée
    const str2 = document.getElementById("delimiter").value; // Récupérer le séparateur
    const n = parseInt(document.getElementById("wordIndex").value); // Récupérer l'indice

    const result = strtok(str1, str2, n); // Appeler la fonction strtok
    document.getElementById("result").innerText = result !== null ? `Le mot extrait est : "${result}"` : "Mot non trouvé.";
}
