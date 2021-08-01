function usermail()
            {
                var epass=/\d*[\@]{1}\D+[\.]{1}/;
            var a=document.getElementById("e1").value;
            if(a.search(epass)==-1)
            {
                    // alert("enter valid email format");
                    document.getElementById("s1").innerHTML="*must have(abc@gmail.com)"; 
                    document.getElementById("e1").focus();
                    document.getElementById("e1").select(); 
                    return false; 
            }
               else
                 document.getElementById("s1").innerHTML="✔️✔️✔️";
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

            // function vpass()
            // {
            //     var check=document.getElementById("p1").value ;
            //     var checkcp=document.getElementById("p2").value ; 
            //     if(checkcp!=check)
            //         {
            //             alert("Password Not Match");
            //             document.getElementById("s3").innerHTML="    * Confirm Password Should be match with password "; 
            //             document.getElementById("p2").focus();
            //             document.getElementById("p2").select();
            //             return false;
            //         } 
            //         else  document.getElementById("s3").innerHTML="✔️✔️✔️"; 
            //         return true;         
            // } 

              function validate()
            {
                if(usermail()&&pass()&&format())
                {
                  alert("Login Successful"); 
               return true;
                }
               else{
                   return false;
               }
                
            }


//             $(document).ready(function(){
// // $("#b1").click(function(){
// //     alert('clicked');
// //         $("#s1").html("Confirmed");
// //         $("this").hide();
// //         $("#d1").append(<input type="button"  class="button" id="b2" value="Cancel Deal" /> );
// //     });
// // $("#b2").click(function(){
// //         $("#s1").html("For Rent");
// //         $("this").hide();
// //         $("#b1").show();
// //     });

//     $("#b1").hide();
        
    

 
// });