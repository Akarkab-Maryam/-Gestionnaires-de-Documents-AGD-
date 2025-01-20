const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Fonction pour renommer les fichiers Excel dans un dossier donné
function traiterFichiersExcel(dossier) {
    return new Promise((resolve) => {
        fs.readdir(dossier, (err, fichiers) => {
            if (err) {
                console.error("Erreur lors de la lecture du dossier :", err);
                resolve();
                return;
            }

            // Filtrer les fichiers pour ne garder que ceux avec le nom spécifié (commence par "PV_UE")
            const fichiersCibles = fichiers.filter(fichier => 
                fichier.startsWith('PV_UE') && 
                (fichier.endsWith('.xls') || fichier.endsWith('.xlsx'))
            );

            // Si des fichiers cibles sont trouvés, les renommer
            if (fichiersCibles.length > 0) {
                const numeroDossier = path.basename(dossier); // On prend le nom du dossier actuel
                const nouveauNom = `PV ${numeroDossier}`;

                fichiersCibles.forEach(fichier => {
                    const cheminFichier = path.join(dossier, fichier);
                    const extension = path.extname(fichier);
                    const nouveauChemin = path.join(dossier, `${nouveauNom}${extension}`);

                    // Renomme le fichier
                    fs.rename(cheminFichier, nouveauChemin, (err) => {
                        if (err) {
                            console.error(`Erreur lors du renommage de ${fichier} :`, err);
                        } else {
                            console.log(`${fichier} renommé en ${nouveauNom}${extension}`);
                        }
                    });
                });
            }
            resolve(); // Résout la promesse une fois tous les fichiers traités
        });
    });
}

// Fonction pour traiter les dossiers et les sous-dossiers
async function traiterDossiers(dossier) {
    try {
        const fichiers = await fs.promises.readdir(dossier);

        // Traiter les fichiers Excel dans le dossier courant
        await traiterFichiersExcel(dossier);

        // Traiter les sous-dossiers
        for (const fichier of fichiers) {
            const cheminFichier = path.join(dossier, fichier);
            const stats = await fs.promises.stat(cheminFichier).catch(err => {
                console.warn(`Le chemin ${cheminFichier} n'existe pas :`, err.message);
                return null;
            });

            if (stats && stats.isDirectory()) {
                // Appel récursif pour traiter le sous-dossier seulement s'il existe
                await traiterDossiers(cheminFichier);
            }
        }
    } catch (err) {
        console.error(`Erreur lors du traitement du dossier ${dossier} :`, err);
    }
}

// Création d'une interface de lecture pour demander le chemin du dossier
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Demander à l'utilisateur de saisir le chemin du dossier
rl.question('Veuillez fournir le chemin du répertoire principal : ', (cheminDossierPrincipal) => {
    if (!cheminDossierPrincipal) {
        console.error('Veuillez fournir un chemin de répertoire valide.');
        rl.close();
        return;
    }

    // Traitement des fichiers
    traiterDossiers(cheminDossierPrincipal.trim()).then(() => {
        console.log('Traitement terminé.');
        rl.close();
    }).catch((err) => {
        console.error('Erreur lors du traitement :', err);
        rl.close();
    });
});
