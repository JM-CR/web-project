$('input[type="file"]').on('change', function(){
  var ruta = $(this).val();
  var substr = ruta.replace('C:\\fakepath\\', '');
  $('.output p').text(substr);
  $('.output').css({
    "opacity": 1,
    "transform": "translateY(0px)"
  });
  $('.file > p').addClass('change');
});
