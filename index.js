function validateForm() {
    var x = document.forms["myForm"]["Nickname"].value;
    x.focus();
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var y = document.forms["myForm"]["email"].value;
    y.focus();
    if (y == "") {
      alert("Email must be filled out");
      return false;
    }
   
  }

function success(){
  alert("Tahniah!Anda sudah berjaya hantar");
}