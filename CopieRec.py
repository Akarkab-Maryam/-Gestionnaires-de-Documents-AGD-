# -*- coding: utf-8 -*-
"""
Created on Tue Nov 19 11:41:34 2024

@author: maryam
"""

import os
import shutil

# Fonction pour parcourir récursivement les dossiers et copier les fichiers ciblés
def copy_rec_files(src, dest):
    try:
        # Liste des fichiers et sous-dossiers dans le dossier source
        for root, dirs, files in os.walk(src):
            print(f"Exploration du dossier : {root}")

            for file in files:
                current_path = os.path.join(root, file)  # Chemin complet du fichier actuel
                dest_path = os.path.join(dest, file)  # Chemin du fichier dans le dossier de destination

                # Vérifie si le fichier a les extensions .xls ou .xlsx
                if file.lower().endswith(('.xls', '.xlsx')):
                    print(f"Fichier trouvé et au bon format : {file}")
                    try:
                        # Copie du fichier vers le dossier de destination
                        shutil.copy2(current_path, dest_path)
                        print(f"Fichier copié avec succès : {file}")
                    except Exception as e:
                        print(f"Erreur lors de la copie de {file} vers {dest_path}: {e}")
                else:
                    print(f"Fichier ignoré (mauvais format ou nom) : {file}")

    except Exception as e:
        print(f"Erreur lors de l'exploration : {e}")

# Fonction principale pour demander les chemins à l'utilisateur
def main():
    # Demander le chemin source
    source_dir = input("Entrez le chemin du dossier source : ")
    # Demander le chemin de destination
    dest_dir = input("Entrez le chemin du dossier de destination : ")

    # Crée le dossier de destination s'il n'existe pas
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    # Appel de la fonction pour copier les fichiers
    copy_rec_files(source_dir, dest_dir)

if __name__ == "__main__":
    main()
