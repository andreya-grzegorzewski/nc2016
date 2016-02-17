/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    document.body.style.textAlign = "center";
    document.body.style.border = "10px solid green";
}

function theAnchorOnClick(ItemNum)
{
    document.getElementById("divMenuItem1").style.display = "none";
    document.getElementById("divMenuItem2").style.display = "none";
    document.getElementById("divMenuItem3").style.display = "none";
    
    document.getElementById("divMenuItem"+ItemNum).style.display = "block";
}
