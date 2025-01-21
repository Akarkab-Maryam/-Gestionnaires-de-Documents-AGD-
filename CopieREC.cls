Attribute VB_Name = "Module11"
Sub CopierFichiersREC()
    Dim shell As Object
    Dim pythonScript As String
    Dim pythonExe As String
    
    ' Définir le chemin du script Python
    pythonScript = "C:\Users\maryam\Documents\AutomRec\env\Lib\site-packages\CopieRec.py"  ' Remplace par le chemin de ton script Python
    
    ' Définir le chemin de l'exécutable Python
    pythonExe = "C:\Users\maryam\AppData\Local\Programs\Python\Python312\python.exe"  ' Remplace par le chemin vers ton exécutable Python
    
    ' Créer un objet Shell pour exécuter la commande
    Set shell = VBA.CreateObject("WScript.Shell")
    
    ' Exécuter le script Python
    shell.Run """" & pythonExe & """ """ & pythonScript & """"
End Sub

