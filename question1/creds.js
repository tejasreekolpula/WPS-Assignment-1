function check(){
    var usn=document.getElementById("username").value;
    var psw=document.getElementById("pswd").value;
  
    if (usn=="") {
      alert("Please enter your username!")
    } else if (usn!="STAFF123") {
      alert("The Username is incorrect! Try again")
    } else if (psw=="") {
      alert("Please enter your password!")
    } else if (psw!="CLGVCE") {
      alert("The password was incorrect! Try again")
    } else {
      window.open("move.html");
      close();
    }
  }