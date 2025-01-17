# Projet de Scripts JavaScript

Ce projet contient plusieurs scripts JavaScript utiles pour la gestion de fichiers, leur copie, leur renommage, et la création d’archives ZIP. Chaque script est indépendant et remplit une fonction spécifique.

## Scripts inclus

### 1. **RenameRecole.js**
- **Description** :
  - Permet de renommer des fichiers Excel dans un dossier donné selon des règles précises (avec des préfixes comme "SF", "9C", etc.).
  - Pose des questions à l’utilisateur pour déterminer si un fichier doit être marqué comme OK, NOK ou spam.
- **Utilisation** :
  - Lancer le script et entrer le chemin du répertoire principal.

### 2. **CopiePV.js**
- **Description** :
  - Copie uniquement les fichiers qui commencent par "PV U" ou "U" et qui ont des extensions .xls ou .xlsx, du dossier source vers le dossier de destination.
  - Peut traiter récursivement les sous-dossiers.
- **Utilisation** :
  - Fournir les chemins source et destination lorsqu’on exécute le script.

### 3. **PvZip.js**
- **Description** :
  - Crée une archive ZIP à partir des fichiers Excel filtrés par leur nom (modèle "PV UXXXXXX.XLS").
  - Extrait un identifiant unique (UXXXXXX) pour nommer l'archive.
- **Utilisation** :
  - Fournir le chemin du dossier contenant les fichiers à archiver.

### 4. **ReCZip.js**
- **Description** :
  - Identique à PvZip.js, mais traite les fichiers "REC" avec des noms du type "REC UXXXXXX-OK.XLS".
  - Produit une archive ZIP nommée en fonction de l'identifiant unique.
- **Utilisation** :
  - Fournir le chemin du dossier contenant les fichiers à archiver.

### 5. **CopieRec.js**
- **Description** :
  - Copie les fichiers "REC" (à partir des noms de fichiers qui commencent par "REC" et ont des extensions .xls ou .xlsx) du dossier source vers le dossier de destination.
  - Fonctionne de manière récursive sur les sous-dossiers.
- **Utilisation** :
  - Fournir les chemins source et destination.

## Prérequis

- Node.js installé sur votre machine.
- Les modules Node.js suivants :
  - `fs` (natif)
  - `path` (natif)
  - `readline` ou `readline-sync`
  - `archiver` (installer avec `npm install archiver`)

## Installation
npm install readline-sync archiver
Une fois ces bibliothèques installées, vos scripts fonctionneront correctement.

Si tu as un fichier package.jsonou si tu souhaites en créer un, voici comment tu peux initialiser un projet Node.js avec ces dépendances :
Créez un fichier package.json(si ce n'est pas déjà fait) en exécutant cette commande dans votre terminal à la racine du projet :

npm init -y

Installer les dépendances :
npm install readline-sync archiver

## Exécution des scripts

- Chaque script peut être exécuté en utilisant Node.js :
  ```bash
  node <nom_du_script.js>
  ```
- Suivez les instructions affichées dans le terminal pour fournir les chemins et autres entrées.

## Contribution

![image](https://github.com/user-attachments/assets/ed1b0672-596e-40cb-9300-cf9d0acee556)

![image](https://github.com/user-attachments/assets/0102c256-8b63-4724-9bd0-d82dd92d728e)
![image](https://github.com/user-attachments/assets/cd6ac3cd-d919-40b3-9ac7-d2b874b37812)

![image](https://github.com/user-attachments/assets/f1b0a66b-1e4f-4437-8ef7-3d0c7fc64ba1)




Les contributions sont les bienvenues ! Si vous avez des suggestions d’amélioration ou si vous rencontrez des problèmes, n’hésitez pas à ouvrir une issue ou à soumettre une pull request.
avant d'utuliser les fichiers bat , merci de modifier les chemin 
## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d’informations.

