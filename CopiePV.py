import os
import shutil
import re

def copy_files_recursive(source_dir, dest_dir):
    try:
        # Parcours récursif des fichiers et sous-dossiers
        for root, dirs, files in os.walk(source_dir):
            print(f"Exploration du dossier : {root}")
            
            for file in files:
                file_path = os.path.join(root, file)  # Chemin complet du fichier
                dest_path = os.path.join(dest_dir, file)  # Chemin dans le dossier de destination
                
                # Vérifie si le fichier correspond aux critères
                if re.match(r'^PV U\d+', file, re.IGNORECASE) and file.lower().endswith(('.xls', '.xlsx')):
                    print(f"Fichier trouvé et au bon format : {file}")
                    try:
                        shutil.copy2(file_path, dest_path)  # Copie le fichier
                        print(f"Fichier copié avec succès : {file}")
                    except Exception as e:
                        print(f"Erreur lors de la copie du fichier {file} : {e}")
                else:
                    print(f"Fichier ignoré (pas au bon format ou nom) : {file}")
    except Exception as e:
        print(f"Erreur lors du traitement : {e}")

# Exemple d'utilisation
if __name__ == "__main__":
    source_directory = input("Entrez le chemin du dossier source : ")
    destination_directory = input("Entrez le chemin du dossier de destination : ")
    
    # Crée le dossier de destination s'il n'existe pas
    if not os.path.exists(destination_directory):
        os.makedirs(destination_directory)
    
    copy_files_recursive(source_directory, destination_directory)
