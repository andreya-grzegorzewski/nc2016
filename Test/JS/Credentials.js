/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ValidateCredentials()
{

    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
    
/*
    if (Username == "Dave" && Password == "Retterer")
        alert("Valid Credentials -- You are logged in.");
    else
        alert("Invalid Credentials -- You are guilty of attempted tresspassing");
*/

/*    
    ValidateCredentials2(Username, Password);
*/

/* */  
    if (ValidateCredentials3(Username,Password))
        NotifyLoginSuccessful();
    else
        NotifyLoginFailed();

}

function ValidateCredentials2(UN, PWD)
{
     if (UN == "Dave" && PWD == "Retterer")
        alert("Valid Credentials -- You are logged in!");
    else
        alert("Invalid Credentials -- You are guilty of attempted tresspassing!");
}

function ValidateCredentials3(UN, PWD)
{
    var ValidCredentials = 
        [
            ["Dave","Retterer"], 
            ["Deb", "Retterer"], 
            ["Missy", "Retterer"], 
            ["Brian", "Retterer"],
            ["Gert", "Retterer"]
        ]
        
    var i;
    
    alert(ValidCredentials);
    for (i=0; i<ValidCredentials.length;i++)
    {
        
        if (UN === ValidCredentials[i][0] && PWD === ValidCredentials[i][1])
        {
            return true;
        }
        
    }
    return false;
}

function NotifyLoginSuccessful()
{
    alert("Valid Credentials -- You are logged in :-)");
}

function NotifyLoginFailed()
{
    alert("Invalid Credentials -- You are guilty of attempted tresspassing :-(");
}