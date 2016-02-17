/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    alert("init");
    document.body.style.textAlign = "center";
    document.body.style.border = "20px solid green";
}

function theAnchorOnClick(ItemNum)
{
    alert("In theAnchorClick()");
    document.getElementById("divMenuItem1").style.visibility = "hidden";
    document.getElementById("divMenuItem2").style.visibility = "hidden";
    document.getElementById("divMenuItem3").style.visibility = "hidden";
    
    document.getElementById("divMenuItem"+ItemNum).style.visibility = "visible";
}
