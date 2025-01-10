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

1. Clonez ce dépôt :
   ```bash
   git clone <url_du_depot>
   ```
2. Accédez au dossier du projet :
   ```bash
   cd <nom_du_dossier>
   ```
3. Installez les dépendances requises :
   ```bash
   npm install
   ```

## Exécution des scripts

- Chaque script peut être exécuté en utilisant Node.js :
  ```bash
  node <nom_du_script.js>
  ```
- Suivez les instructions affichées dans le terminal pour fournir les chemins et autres entrées.

## Contribution

Les contributions sont les bienvenues ! Si vous avez des suggestions d’amélioration ou si vous rencontrez des problèmes, n’hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d’informations.

