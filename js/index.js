function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function Submitfunction() {

    //If you are actually checking out the code behind this... Screw you!!!

    let Username = document.getElementById("SubmitName").value;
    let Password = document.getElementById("SubmitPassword").value;

    if (!Username) {
        return document.getElementById("alert_messages").innerHTML = "Please submit a name!";
    }

    if (!Password) {
        return document.getElementById("alert_messages").innerHTML = "Please submit a password!";
    }

    /*
    if (!passwords.includes(Password)) {

        return document.getElementById("alert_messages").innerHTML = "Please register first!";

    }
    */

    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("username", Username);
        localStorage.setItem("password", Password);
    } else {
        document.getElementById("alert_messages").innerHTML = "Sorry, your browser does not support Web Storage!";
    }

    window.location.href = "options.html";

    //If you are actually checking out the code behind this... Screw you!!!

}

function RegsiterFunction() {

    let Username = document.getElementById("SubmitName").value;
    let Password = document.getElementById("SubmitPassword").value;

    if (!Username) {
        return document.getElementById("alert_messages").innerHTML = "Please submit a name!";
    }

    if (!Password) {
        return document.getElementById("alert_messages").innerHTML = "Please submit a password!";
    }


    const CheckUserName = localStorage.getItem('username');
    const CheckPassWord = localStorage.getItem('password');

    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("username", Username);
        localStorage.setItem("password", Password);
    } else {
        document.getElementById("alert_messages").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

    document.getElementById("alert_messages").innerHTML = "Successfully created an Account!";

    window.location.href = "options.html";

}

window.onload = function GetCurrentAccount() {

    if (!document.getElementById("CurrentAccount")) return;

    if (localStorage.getItem("username")) {

        document.getElementById("CurrentAccount").innerHTML = localStorage.getItem("username");

    } else {

        document.getElementById("CurrentAccount").innerHTML = ("Not logged in yet!");

    }

};

function LogOut() {

    if (!localStorage.getItem("username")) {

        alert('You will be re-directed to our Log-In Page!');
        window.location.href = "account.html";
        return;
    }

    localStorage.clear();

    document.getElementById("CurrentAccount").innerHTML = ("Succesfully logged out!");

    location.reload();
}