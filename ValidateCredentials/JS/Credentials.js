/* 
 * By: Prof. Dave Retterer
 * 2016
 * Comment out various portions of code to illustrate different
 * ways to approach the problem of validating username/password
 * credentials and of indication the result of the validation.
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

  
    if (ValidateCredentials3(Username,Password))
        NotifyLoginSuccessful();
    else
        NotifyLoginFailed();
/**/
}

function ValidateCredentials2(UN, PWD)
{
     if (UN == "Dave" && PWD == "Retterer")
        alert("Valid Credentials -- You are logged in!");
    else
        alert("Invalid Credentials -- You are guilty of attempted tresspassing!");
}

// ValidateCredentials3 
//     Allows for simple addition of additional credentials and simply
// notifies the caller whether the credentials provided are valid
// or not.  This is a step closer to the Single Responsibility Principle (SRP)
// and satisfies that principle as far as the functionality goes.  It should not 
// also be responsible for defining and storing the valid credentials.  That will
// be corrected when we talk about server side data.
//

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
    
    //  To see what is in the array above at run time uncomment the line below:
    //  alert(ValidCredentials);  
    
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
    // This is a lousy way to indicate that the user is logged in but
    // is being used here just to show where that indication can be 
    // done.  See other code sections below for other ways to do it.
    /* */
     alert("Valid Credentials -- You are logged in :-)");
    
    
    // This is a more meaningful way to indicate that the user is logged in
    // successfully -- though it is somewhat annoying.
    /*
    var cred = document.getElementById("Credentials");
    cred.style.backgroundColor = "#dcf2e0";
    */
  
}

function NotifyLoginFailed()
{
   // This is a lousy way to indicate that the user is logged in but
   // is being used here just to show where that indication can be 
   // done.  See other code sections below for other ways to do it.
    
  alert("Invalid Credentials -- You are guilty of attempted tresspassing :-(");
  /*
   // This is a more meaningful way to indicate that the user is logged in
   // successfully -- though it is somewhat annoying.
   var cred = document.getElementById("Credentials");
   cred.style.backgroundColor = "#f2dce0";
  */ 
    
}

