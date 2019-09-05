function validate() {
     if( document.myForm.name.value == "" ) {
            alert( "Please provide your name!" );
            
            return false;
         }

}
<form action="" method="post" name="myForm" onsubmit="return validateForm()" >

<input type="text" name="name" id="name">
<input type="text" name="email" id="email">
<input type="text" name="title" id="title">
<textarea name="message"  id="message"></textarea>
<button type="submit" name="submit" id="submit">Send</button>
</form>
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateForm() 
{
  let name = document.myForm.name.value;
  let email = document.myForm.email.value;
  let title = document.myForm.title.value;
  let message = document.myForm.message.value;
 
  if (name == "") {
    alert('Please provide your name');
    return false;
  }
  if (name.length < 4) {
    alert('Character enter for name must be 4 and above');
    return false;
  }
  if (email == "") {
    alert('Please provide your email');
    return false;
  }
  if (!validateEmail(email)) {
    alert('Please provide your name');
    return false;
  }
  if (title == "") {
    alert('Please provide your title');
    return false;
  }
  if (message == "") {
    alert('Please provide your message');
    return false;
  }
  if (message.length < 25) {
    alert('Character enter for message must be 25 and above');
    return false;
  }
}