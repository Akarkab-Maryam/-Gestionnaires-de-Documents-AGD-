const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');
const archiver = require('archiver');

// Demande le chemin du dossier contenant les fichiers
const folderPath = readline.question("Veuillez entrer le chemin du dossier contenant vos fichiers : ");

// Fonction pour extraire l'identifiant UXXXXXX du nom du fichier
function extractIdFromFilename(filename) {
    const match = filename.match(/U\d{6}/); // Recherche de U suivi de 6 chiffres
    return match ? match[0] : null;
}

// Lire les fichiers dans le dossier spécifié
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error("Erreur lors de la lecture du dossier : ", err);
        return;
    }

    console.log("Fichiers trouvés dans le dossier :", files);

    // Récupérer tous les fichiers qui contiennent un identifiant UXXXXXX
    const filteredFiles = files.filter(file => 
        /^REC U\d{6}-\d+ (OK|NOK)\.(xls|xlsx)$/i.test(file)
    );

    if (filteredFiles.length === 0) {
        console.log("Aucun fichier correspondant n'a été trouvé.");
        return;
    }

    // Extraire l'identifiant commun UXXXXXX du premier fichier
    const fileId = extractIdFromFilename(filteredFiles[0]);
    if (!fileId) {
        console.log("Aucun identifiant valide trouvé.");
        return;
    }

    // Créer le nom de l'archive avec l'identifiant extrait
    const zipFileName = `REC_${fileId}.zip`;
    const outputPath = path.join(folderPath, zipFileName);
    
    // Créer un flux d'écriture pour l'archive ZIP
    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
        console.log(`Archive créée : ${zipFileName} (${archive.pointer()} octets)`);
    });

    archive.on('error', err => {
        throw err;
    });

    archive.pipe(output);

    // Ajouter tous les fichiers filtrés à l'archive
    filteredFiles.forEach(file => {
        const filePath = path.join(folderPath, file);
        archive.file(filePath, { name: file });
    });

    // Finaliser l'archive
    archive.finalize();
});
