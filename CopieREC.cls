Attribute VB_Name = "Module11"
Sub CopierFichiersREC()
    Dim shell As Object
    Dim pythonScript As String
    Dim pythonExe As String
    
    ' D�finir le chemin du script Python
    pythonScript = "C:\Users\maryam\Documents\AutomRec\env\Lib\site-packages\CopieRec.py"  ' Remplace par le chemin de ton script Python
    
    ' D�finir le chemin de l'ex�cutable Python
    pythonExe = "C:\Users\maryam\AppData\Local\Programs\Python\Python312\python.exe"  ' Remplace par le chemin vers ton ex�cutable Python
    
    ' Cr�er un objet Shell pour ex�cuter la commande
    Set shell = VBA.CreateObject("WScript.Shell")
    
    ' Ex�cuter le script Python
    shell.Run """" & pythonExe & """ """ & pythonScript & """"
End Sub

