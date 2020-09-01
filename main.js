function validation() {
    var myform = document.getElementById("myform").value;
    var firstname = document.getElementById("firstname").value;
    var sname = document.getElementById("sname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var state = document.getElementById("state").value;
    var input = document.getElementById("input").value;
    var errormessage = document.getElementById("errormessage");
    var text;

    // errormessage.style.padding = "10px"
    // if (firstname.length < 5) {
    // text = "Please enter valid name";
    // errormessage.innerHTML = text;
    // return false;
    // }

    let today = new Date();

    let start = new Date("August 28, 2020 00:00:00");
    let deadline = new Date("August 31, 2020 23:59:59");
    if (today < start) {
        alert('Registration has not commenced.');

    } else if (today >= start && today <= deadline) {
        alert('Registration was successful.');

    } else {
        ('Registration has ended.');
        return true;
    }
}