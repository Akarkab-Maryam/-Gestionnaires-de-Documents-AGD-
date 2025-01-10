const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour copier les fichiers avec les conditions spécifiées
function copyFiles(sourceDir, destDir) {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.log('Erreur lors de la lecture du dossier source:', err);
      return;
    }

    console.log('Liste des fichiers dans le dossier source:', files);

    // Boucle à travers chaque fichier dans le dossier source
    files.forEach(file => {
      const filePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);

      // Vérifier si c'est un dossier
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.log(`Erreur en accédant au fichier/dossier ${filePath}:`, err);
          return;
        }

        if (stats.isDirectory()) {
          // Si c'est un sous-dossier, appel récursif pour explorer les fichiers à l'intérieur
          console.log(`Exploration du sous-dossier: ${file}`);
          copyFiles(filePath, destDir); // Recherche récursive dans les sous-dossiers
        } else {
          // Vérification du nom du fichier (doit commencer par "PV U" ou "U" suivi de chiffres)
          console.log(`Traitement du fichier: ${file}`);

          if (file.match(/^PV U\d+-\d+/i) || file.match(/^U\d+-\d+/i)) {
            // Vérification de l'extension (.xls ou .xlsx)
            if (file.match(/\.xls$/i) || file.match(/\.xlsx$/i)) {
              console.log(`Fichier trouvé et au bon format: ${file}`);
              fs.copyFile(filePath, destPath, (err) => {
                if (err) {
                  console.log(`Erreur lors de la copie du fichier ${file}:`, err);
                } else {
                  console.log(`Fichier copié avec succès: ${file}`);
                }
              });
            } else {
              console.log(`Fichier ignoré (mauvaise extension): ${file}`);
            }
          } else {
            console.log(`Fichier ignoré (pas au bon format ou nom): ${file}`);
          }
        }
      });
    });
  });
}

// Demander les chemins du dossier source et du dossier de destination
rl.question('Entrez le chemin du dossier source: ', (sourceDir) => {
  rl.question('Entrez le chemin du dossier de destination: ', (destDir) => {
    // Lancer la copie des fichiers
    copyFiles(sourceDir, destDir);
    rl.close();
  });
});
