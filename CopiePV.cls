Attribute VB_Name = "Module10"
Sub Ex�cuterCopiePV()
    Dim cheminBatch As String
    cheminBatch = "C:\Users\maryam\Contacts\Desktop\AutomatREC\CopiePV.bat" ' Chemin de ton fichier batch

    ' V�rifie si le fichier existe avant de l'ex�cuter
    If Dir(cheminBatch) <> "" Then
        ' Ex�cute le fichier batch
        shell cheminBatch, vbNormalFocus
    Else
        MsgBox "Le fichier batch n'a pas �t� trouv� � l'emplacement sp�cifi�.", vbExclamation
    End If
End Sub

