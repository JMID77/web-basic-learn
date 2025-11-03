/* First part */
const lesElements = document.querySelectorAll("li");

function changerValidation(e) {
  if (!e.target.className) {
    e.target.className = "fini";
  } else {
    e.target.className = "";
  }
}

lesElements.forEach((element) => {
  element.addEventListener("click", changerValidation);
});


/* Second part */
// Stocke une référence vers le <h1> dans une variable
const monTitre = document.querySelector("h1");
// Met à jour le contenu texte du <h1>
monTitre.textContent = "Hello world !";


/* Third part */
const monImage = document.querySelector("img");

monImage.addEventListener("click", () => {
  const maSrc = monImage.getAttribute("src");
  if (maSrc === "images/firefox-blue.jpg") {
    monImage.setAttribute("src", "images/firefox.jpg");
  } else {
    monImage.setAttribute("src", "images/firefox-blue.jpg");
  }
});


/* Fourth part */
console.log("✅ Le script est bien chargé !");
let monBouton = document.querySelector("button");
let monTitrePage = document.querySelector("h1");

console.log("myButton =", monBouton);
console.log("myHeading =", monTitrePageJoel);


function definirNomUtilisateur() {
  const monNom = prompt("Veuillez saisir votre nom.");
  if (!monNom) {
    definirNomUtilisateur();
  } else {
    localStorage.setItem("nom", monNom);
    monTitrePage.textContent = `Mozilla est génial, ${monNom}`;
  }
}

if (!localStorage.getItem("nom")) {
  definirNomUtilisateur();
} else {
  const nomEnregistre = localStorage.getItem("nom");
  monTitrePage.textContent = `Mozilla est génial, ${nomEnregistre}`;
}

monBouton.addEventListener("click", () => {
  definirNomUtilisateur();
});