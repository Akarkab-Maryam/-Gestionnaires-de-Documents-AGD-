const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');
const archiver = require('archiver');

// Demande le chemin du dossier contenant les fichiers
const folderPath = readline.question("Veuillez entrer le chemin du dossier contenant vos fichiers : ");
console.log("Chemin du dossier fourni :", folderPath);

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

    // Filtrer les fichiers correspondant au modèle "PV UXXXXXX.XLS" ou "PV UXXXXXX.XLSX"
    const filteredFiles = files.filter(file => 
        /^PV\s*U\d{6}-\d+\s*\.(xls|xlsx)$/i.test(file.trim()) // Prendre en compte les espaces et les tirets éventuels
    );

    console.log("Fichiers filtrés après application du filtre :", filteredFiles);

    if (filteredFiles.length === 0) {
        console.log("Aucun fichier correspondant n'a été trouvé.");
        return;
    }

    // Extraire l'identifiant commun UXXXXXX du premier fichier
    const fileId = extractIdFromFilename(filteredFiles[0]);
    if (!fileId) {
        console.log("Aucun identifiant valide trouvé dans le fichier :", filteredFiles[0]);
        return;
    }

    console.log("Identifiant extrait pour le nom de l'archive :", fileId);

    // Créer le nom de l'archive avec l'identifiant extrait
    const zipFileName = `PV_${fileId}.zip`;
    const outputPath = path.join(folderPath, zipFileName);
    
    // Créer un flux d'écriture pour l'archive ZIP
    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
        console.log(`Archive créée avec succès : ${zipFileName} (${archive.pointer()} octets)`);
    });

    output.on('error', err => {
        console.error("Erreur lors de la création du fichier ZIP :", err);
        return;
    });

    archive.on('error', err => {
        console.error("Erreur lors de l'archivage des fichiers :", err);
        throw err;
    });

    archive.pipe(output);

    // Ajouter tous les fichiers filtrés à l'archive
    filteredFiles.forEach(file => {
        const filePath = path.join(folderPath, file);
        console.log("Ajout du fichier à l'archive :", filePath);
        archive.file(filePath, { name: file });
    });

    // Finaliser l'archive
    archive.finalize().then(() => {
        console.log("Archivage terminé avec succès.");
    }).catch(err => {
        console.error("Erreur lors de la finalisation de l'archive :", err);
    });
});
