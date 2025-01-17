Attribute VB_Name = "Module12"
Sub ExécuterPvZip()
    Dim cheminNode As String
    Dim cheminScript As String
    Dim folderPath As String
    Dim commande As String

    ' Chemin vers Node.js (à ajuster si nécessaire)
    cheminNode = "C:\Program Files\nodejs\node.exe"

    ' Chemin vers le script PvZip.js
    cheminScript = "C:\Users\maryam\Contacts\Desktop\AutomatREC\PvZip.js"

    ' Dialogue pour sélectionner le dossier contenant les fichiers
    With Application.FileDialog(msoFileDialogFolderPicker)
        .Title = "Sélectionnez le dossier contenant vos fichiers"
        If .Show = -1 Then
            folderPath = .SelectedItems(1)
        Else
            MsgBox "Aucun dossier sélectionné. Opération annulée.", vbExclamation
            Exit Sub
        End If
    End With

    ' Construire la commande pour exécuter le script Node.js
    commande = """" & cheminNode & """ """ & cheminScript & """ """ & folderPath & """"

    ' Exécuter la commande
    shell commande, vbNormalFocus

    ' Message de confirmation
    MsgBox "Le script PvZip a été exécuté. Veuillez vérifier les résultats.", vbInformation
End Sub

