


                                                                    
 var example=document.getElementById('title');
 example.onmouseenter = function()
{
   
    document.getElementById('myname').value= myJson.name;
    document.getElementById('myemail').value= myJson.email;
    document.getElementById('message').value= myJson.message;
    
}
example.onmouseleave = function()
{
   
    document.getElementById('myname').value= "";
    document.getElementById('myemail').value="";
    document.getElementById('message').value= "";
   
}



var mybutton = document.getElementById('bbb');

mybutton.onclick =function()
{

  var x=document.getElementById("myname").value,
      y= document.getElementById("myemail").value,
      k=document.getElementById("message").value;

    let myinput = {myname:x, myemail:y,message:k };
    let output = JSON.stringify(myinput);
      console.log(output);
  
}



