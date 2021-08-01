function uname()
            {
                
                var username=document.getElementById("t1").value;
                if(username.length<6  )
                {
                    // alert("Usename Cannot be less than 6 characters dear");
                    console.log("Usename Cannot be less than 6 characters dear");
                    document.getElementById("s1").innerHTML="    *Usename Cannot be less than 6 characters dear"; 
                    document.getElementById("t1").focus();
                    document.getElementById("t1").select();
                        return false;
                }
                else  document.getElementById("s1").innerHTML="✔️✔️✔️"; 
                return true;   
            }

            function uvar()
            {
                 var ch=/^\D+$/;
                var username=document.getElementById("t1").value;
                if( username.search(ch)==-1)
                {
                    // alert("Usename Cannot be less than 6 characters dear");
                    // console.log("Only characters are allowed");
                    document.getElementById("s1").innerHTML="    *Only characters are allowed"; 
                    document.getElementById("t1").focus();
                    document.getElementById("t1").select();
                        return false;
                }
                else  document.getElementById("s1").innerHTML="✔️✔️✔️"; 
                return true;   
            }




            function pass()
            { 
                var check=document.getElementById("p1").value;
               
                if(check.length<8)
                {
                    // alert("enter valid format");
                    document.getElementById("s2").innerHTML="    *Password Cannot be less than 8 characters dear"; 
                    document.getElementById("p1").focus();
                    document.getElementById("p1").select();
                    return false;
                }
                else  document.getElementById("s2").innerHTML="✔️✔️✔️"; 
                return true;}
                
            function cpass()
            {
                var checkcp=document.getElementById("p2").value;
                    if(checkcp.length<8)
                    {
                        // alert("enter valid format");
                        document.getElementById("s3").innerHTML="    * Confirm Password Cannot be less than 8 characters"; 
                        document.getElementById("p2").focus();
                        document.getElementById("p2").select();
                        return false;
                    } 
                    else  document.getElementById("s3").innerHTML="✔️✔️✔️"; 
                    return true;
            }
                
            function vpass()
            {
                var check=document.getElementById("p1").value ;
                var checkcp=document.getElementById("p2").value ; 
                if(checkcp!=check)
                    {
                        // alert("Password Not Match");
                        document.getElementById("s3").innerHTML="    * Confirm Password Should be match with password "; 
                        document.getElementById("p2").focus();
                        document.getElementById("p2").select();
                        return false;
                    } 
                    else  document.getElementById("s3").innerHTML="✔️✔️✔️"; 
                    return true;         
            }  
      
            
            function format()
            {
                var fpass=/\d*[\!@#$%^&*()~`/*-+.]+\D*/;
            var a=document.getElementById("p1").value;
            if(a.search(fpass)==-1)
            {
                    // alert("enter valid format");
                    document.getElementById("s2").innerHTML="*Atleast one(Letter&Symbol&Numeric value)"; 
                    document.getElementById("p1").focus();
                    document.getElementById("p1").select(); 
                    return false; 
            }
               else{
                document.getElementById("s2").innerHTML="✔️✔️✔️"; 
                        return true;
               }
            }
            function eformat()
            {
                var epass=/\d*[\@]{1}\D*[\.]{1}/;
            var a=document.getElementById("e1").value;
            if(a.search(epass)==-1)
            {
                    // alert("enter valid email format");
                    document.getElementById("s4").innerHTML="*must have('@'  && '.')"; 
                    document.getElementById("e1").focus();
                    document.getElementById("e1").select(); 
                    return false; 
            }
               else
                 document.getElementById("s4").innerHTML="✔️✔️✔️";
                        return true;
               
            }
            

            function validate()
            {
                if(uname()&&pass()&&cpass()&&vpass()&&format() &&eformat()&&uvar())
                {
                  alert("Registration Successful"); 
               return true;
                }
               else{
                   return false;
               }
                
            }
