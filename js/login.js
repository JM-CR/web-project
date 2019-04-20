
$( ".button-container button" ).click(function() {
  let name="adela";
  let pass="conver";
  let labelUsername = $(".input-container #labelUsername").val();
  let labelPassword = $(".input-container #labelPassword").val();
  if(name===labelUsername) {
    window.location = 'main.html';
  }
  else{
    alert("Usuario o Password Incorrectos");
  }
});
