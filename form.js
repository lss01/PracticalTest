function myForm() {
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];
    var what = document.forms["RegForm"]["Bank"];
    var prove = document.forms["RegForm"]["prove"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert(
          "Please enter your telephone number.");
        phone.focus();
        return false;
    }


    if (what.selectedIndex < 1) {
        alert("Please enter your bank.");
        what.focus();
        return false;
    }

    if (prove.value == "") {
        alert("Please provide prove to proceed.");
        what.focus();
        return false;
    }

    return true;
}