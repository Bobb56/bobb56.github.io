// ouverture du fichier
const fileInput = document.getElementById("fileInput");



fileInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0]; // Récupère le premier fichier sélectionné
    
    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const fileContent = event.target.result; // Contenu du fichier sous forme de chaîne de caractères
            var aff = document.getElementById("entree");
            aff.value = fileContent;
        };
    reader.readAsText(selectedFile); // Lecture du contenu du fichier en tant que texte
      
  }
});


// pour sauvegader
const entree = document.getElementById("entree");
const downloadLink = document.getElementById("downloadLink");

function download() {
    const content = entree.value;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    downloadLink.href = url;
    var nom = "programme.ne";//prompt("Nom du fichier :");
    /*if (nom == null)
      return;*/
    downloadLink.download = nom; // Nom du fichier à télécharger
    downloadLink.click();

    // Nettoyage après le téléchargement
    URL.revokeObjectURL(url);
}