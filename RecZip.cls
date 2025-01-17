Attribute VB_Name = "Module13"
Sub ExécuterReCZip()
    Dim cheminNode As String
    Dim cheminScript As String
    Dim folderPath As String
    Dim commande As String

    ' Chemin vers Node.js (ajustez si nécessaire)
    cheminNode = "C:\Program Files\nodejs\node.exe"

    ' Chemin vers le script ReCZip.js
    cheminScript = "C:\Users\maryam\Contacts\Desktop\AutomatREC\ReCZip.js"

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

    ' Exécuter le script Node.js
    shell commande, vbNormalFocus

    ' Message de confirmation
    MsgBox "Le script ReCZip a été exécuté. Veuillez vérifier les résultats.", vbInformation
End Sub

