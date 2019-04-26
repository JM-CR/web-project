$(function(){
  $('#toggle').click(function(){
    $('#target').toggleClass('active');
  });
});

//Acciones si se presiona el boton Home
$( ".left-nav a:nth-child(1)" ).click(function() {
  //alert($(".left-nav a:nth-child(1)").text());
  $(document).ready(function(){
    $(".row").html("<div class=\"file\">\n" +
      "            <div class=\"output\">\n" +
      "              <p></p>\n" +
      "            </div>\n" +
      "            <p></p>\n" +
      "            Subir archivo\n" +
      "            <input type=\"file\">\n" +
      "          </div>");
  });
});
//Acciones si se presiona el boton de archivos
$( ".left-nav a:nth-child(2)" ).click(function() {
  //alert($(".left-nav a:nth-child(2)").text());
  $(document).ready(function(){
    $(".row").html("<section>\n" +
      "    <button class=\"btn btn-green btn-border-o\">1 seccion</button>\n" +
      "    <button class=\"btn btn-blue btn-border-o\">2da seccion</button>\n" +
      "    <button class=\"btn btn-purple btn-border-o\">3ra seccion</button>\n" +
      "    <button class=\"btn btn-navy btn-border-o\">4ta seccion</button>\n" +
      "    <button class=\"btn btn-orange btn-border-o\">5ta seccion</button>\n" +
      "    <button class=\"btn btn-red btn-border-o\">6ta seccion</button>\n" +
      "    <button class=\"btn btn-green btn-border-o\">7ta seccion</button>\n" +
      "  </section>");
  });
});
//Acciones si se presiona el boton contactos
$( ".left-nav a:nth-child(3)" ).click(function() {
  //alert($(".left-nav a:nth-child(3)").text());
  $(document).ready(function(){
    $(".row").html("<div class=\"content\">\n" +
      "    <div class=\"template-list-contact-content\">\n" +
      "      <div class=\"contact-list\">\n" +
      "        <div class=\"contact\">\n" +
      "          <div class=\"imgprofile\">\n" +
      "            <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" alt=\"picture contact\" class=\"picprofile\"></img>\n" +
      "          </div>\n" +
      "          <div class=\"phonenumber\">\n" +
      "          <span class=\"phone\">Jefe divisional 1</span>\n" +
      "          </div>\n" +
      "\n" +
      "        </div>\n" +
      "        <div class=\"contact\">\n" +
      "          <div class=\"imgprofile\">\n" +
      "            <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" alt=\"picture contact\" class=\"picprofile\"></img>\n" +
      "          </div>\n" +
      "          <div class=\"phonenumber\">\n" +
      "          <span class=\"phone\">Jefe divisional 2</span>\n" +
      "          </div>\n" +
      "\n" +
      "        </div>\n" +
      "        <div class=\"contact\">\n" +
      "          <div class=\"imgprofile\">\n" +
      "            <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" alt=\"picture contact\" class=\"picprofile\"></img>\n" +
      "          </div>\n" +
      "          <div class=\"phonenumber\">\n" +
      "          <span class=\"phone\">Jefe divisional 3</span>\n" +
      "          </div>\n" +
      "\n" +
      "        </div>\n" +
      "        <div class=\"contact\">\n" +
      "          <div class=\"imgprofile\">\n" +
      "            <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" alt=\"picture contact\" class=\"picprofile\"></img>\n" +
      "          </div>\n" +
      "          <div class=\"phonenumber\">\n" +
      "          <span class=\"phone\">Jefe Divisional 4</span>\n" +
      "          </div>\n" +
      "\n" +
      "        </div>\n" +
      "        <div class=\"contact\">\n" +
      "          <div class=\"imgprofile\">\n" +
      "            <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" alt=\"picture contact\" class=\"picprofile\"></img>\n" +
      "          </div>\n" +
      "          <div class=\"phonenumber\">\n" +
      "          <span class=\"phone\">Jefe Divisional 5</span>\n" +
      "          </div>\n" +
      "        </div>\n" +
      "      </div>\n" +
      "    </div>\n" +
      "    ");
  });
});
//Acciones si se presiona el boton de pendientes
$( ".left-nav a:nth-child(4)" ).click(function() {
  alert($(".left-nav a:nth-child(4)").text());
});
//Acciones si se presiona el boton de configuracion
$( ".left-nav a:nth-child(5)" ).click(function() {
  alert($(".left-nav a:nth-child(5)").text());
});
