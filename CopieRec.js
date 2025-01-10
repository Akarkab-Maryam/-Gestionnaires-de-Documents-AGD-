const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Création de l'interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction pour demander un chemin à l'utilisateur
function askForPath(question) {
    return new Promise((resolve) => {
        rl.question(question, (input) => {
            resolve(input);
        });
    });
}

async function main() {
    // Demande le chemin source à l'utilisateur
    const sourceDir = await askForPath('Entrez le chemin du dossier source: ');

    // Demande le chemin de destination à l'utilisateur
    const destDir = await askForPath('Entrez le chemin du dossier de destination: ');

    // Appel de la fonction de copie avec les chemins fournis par l'utilisateur
    copyRecFiles(sourceDir, destDir);

    // Ferme l'interface readline
    rl.close();
}

function copyRecFiles(src, dest) {
    fs.readdir(src, (err, files) => {
        if (err) {
            console.error(`Erreur lors de la lecture du dossier: ${src}`, err);
            return;
        }

        files.forEach(file => {
            const currentPath = path.join(src, file);

            fs.stat(currentPath, (err, stats) => {
                if (err) {
                    console.error(`Erreur lors de la récupération des stats pour ${currentPath}`, err);
                    return;
                }

                if (stats.isDirectory()) {
                    // Si c'est un dossier, appel récursif
                    copyRecFiles(currentPath, dest);
                } else if (file.startsWith('REC') && (file.endsWith('.xls') || file.endsWith('.xlsx'))) {
                    // Si c'est un fichier REC au format xls ou xlsx, le copier
                    const destinationPath = path.join(dest, file);
                    fs.copyFile(currentPath, destinationPath, err => {
                        if (err) {
                            console.error(`Erreur lors de la copie de ${currentPath} vers ${destinationPath}`, err);
                        } else {
                            console.log(`Fichier copié: ${destinationPath}`);
                        }
                    });
                }
            });
        });
    });
}

// Démarrer le processus
main();
