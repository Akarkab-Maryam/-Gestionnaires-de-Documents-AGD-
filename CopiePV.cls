Attribute VB_Name = "Module10"
Sub ExécuterCopiePV()
    Dim cheminBatch As String
    cheminBatch = "C:\Users\maryam\Contacts\Desktop\AutomatREC\CopiePV.bat" ' Chemin de ton fichier batch

    ' Vérifie si le fichier existe avant de l'exécuter
    If Dir(cheminBatch) <> "" Then
        ' Exécute le fichier batch
        shell cheminBatch, vbNormalFocus
    Else
        MsgBox "Le fichier batch n'a pas été trouvé à l'emplacement spécifié.", vbExclamation
    End If
End Sub

