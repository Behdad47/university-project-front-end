
function signUp() {
    var signUpVar = document.getElementById("sign_up");
    console.log(signUp);
    if (signUpVar.style.display === "none") {
        signUpVar.style.display = "block";
    } else {
        signUpVar.style.display = "none";
    }
}
function login() {
    var loginVar = document.getElementById("log_in");
    if (loginVar.style.display === "none") {
        loginVar.style.display = "block";
    } else {
        loginVar.style.display = "none";
    }
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "demo_post.asp", true);
    xhttp.send();
}