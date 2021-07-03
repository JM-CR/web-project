$('input[type="file"]').on('change', function(){
  let ruta = $(this).val();
  let substr = ruta.replace('C:\\fakepath\\', '');
  $('.output p').text(substr);
  $('.output').css({
    "opacity": 1,
    "transform": "translateY(0px)"
  });
  $('.file > p').addClass('change');

    $(".row").append("<div class=\"toogleContanier\">\n" +
      "    <label class=\"switch\">\n" +
      "      <input type=\"checkbox\" class=\"switch-input\">\n" +
      "      <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n" +
      "      <span class=\"switch-handle\"></span>\n" +
      "    </label>\n" +
      "    <h3>Jefe Divisional 1</h3>" +
      "    <label class=\"switch\">\n" +
      "      <input type=\"checkbox\" class=\"switch-input\" checked>\n" +
      "      <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n" +
      "      <span class=\"switch-handle\"></span>\n" +
      "    </label>\n" +
      "    <h3>Jefe Divisional 2</h3>" +
      "    <label class=\"switch\">\n" +
      "      <input type=\"checkbox\" class=\"switch-input\" checked>\n" +
      "      <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n" +
      "      <span class=\"switch-handle\"></span>\n" +
      "    </label>\n" +
      "    <h3>Jefe Divisional 3</h3>" +
      "    <label class=\"switch\">\n" +
      "      <input type=\"checkbox\" class=\"switch-input\" checked>\n" +
      "      <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n" +
      "      <span class=\"switch-handle\"></span>\n" +
      "    </label>\n" +
      "    <h3>Jefe Divisional 4</h3>" +
      "    <label class=\"switch\">\n" +
      "      <input type=\"checkbox\" class=\"switch-input\" checked>\n" +
      "      <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n" +
      "      <span class=\"switch-handle\"></span>\n" +
      "    </label>\n" +
      "    <h3>Jefe Divisional 5</h3>" +
      "  </div>\n"+
      "    <button class=\"btnComp btnComp-green btnComp-border-o\">Compartir</button>\n");


});

