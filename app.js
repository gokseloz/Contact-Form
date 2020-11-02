// first name validation function
function fnameValid() {
    var fname = document.getElementById("fname").value
    var regfname = /^[A-Za-z\s\-\']{2,15}$/ // input can include capital letters, small letters, spaces, dash(-) and apostrophe('). Must be at 2-15 characters

    if (regfname.test(fname)) {
        fname;
        document.getElementById("fnamePrompt").innerHTML = ""

    } else {
        document.getElementById("fnamePrompt").innerHTML = "2-15 character & only letters"

    }
}

// last name validation function
function lnameValid() {
    var lname = document.getElementById("lname").value
    var reglname = /^[A-Za-z\s\-\']{2,30}$/ /// input can include capital letters, small letters, spaces, dash(-) and apostrophe('). Must be at 2-30 characters
    if (reglname.test(lname)) {
        lname;
        document.getElementById("lnamePrompt").innerHTML = ""

    } else {
        document.getElementById("lnamePrompt").innerHTML = "2-30 character & only letters"
    }
}

// age validation function
function ageValid() {
    var age = document.getElementById("age").value;
    var regAge = /^[0-9]{1,3}$/

    if (regAge.test(age) & age >= 18) {
        age;
        document.getElementById("agePrompt").innerHTML = ""

    } else {
        document.getElementById("agePrompt").innerHTML = "numbers only & must be older than 18"
    }
}

// submit button function. After displaying alert, page refreshes.
function btn() {
    alert("Thank you for submitting your form.");
    location.reload()
}