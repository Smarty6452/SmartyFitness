function validation() {
  // event.preventDefault()  //prevent form for autosubmiting

  var username = document.getElementById("username").value;


  var email = document.getElementById("email").value;


  var phoneno = document.getElementById("phoneno").value;
  

  var textarea = document.getElementById("textarea").value;


  var error_message = document.getElementById("error_message");
  error_message.style.padding = "10px";

  var text;
  if (username.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phoneno) || phoneno.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (textarea.length <= 50) {
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
