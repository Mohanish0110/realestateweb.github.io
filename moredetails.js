function check()
{ 
    var c=document.getElementById("c1") ;
   
    if(c.checked)
    {
        return true;
    }
    else 
    {
        alert("plz Accept Terms & Conditions");
        // document.getElementById("s5").innerHTML="    *plz Accept Terms & Conditions"; 
        // document.getElementById("c1").focus();
        // document.getElementById("c1").select();
        return false;
    }
   
}
function back()
{
    document.getElementById("b1").click().Registration.html;
}