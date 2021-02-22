var menu = [0, 0, 0, 0, 0, 0, 0, 0]

$('.user_btn0').click(function(){
  get_colors(0);
});

$('.user_btn1').click(function(){
  get_colors(1);
});

$('.user_btn2').click(function(){
  get_colors(2);
});

$('.user_btn3').click(function(){
  get_colors(3);
});

$('.user_btn4').click(function(){
  get_colors(4);
});

$('.user_btn5').click(function(){
  get_colors(5);
});

$('.user_btn6').click(function(){
  get_colors(6);;
});

$('.user_btn7').click(function(){
  get_colors(7);
});

function get_colors(key) {
  var i;
  for (i = 0; i < menu.length; i++) {
    if (key != i) {
      menu[i] = 0
    }
    else if (menu[key] === 0) {
      menu[key] = 1
    }
    else {
      menu[key] = 0
    }
  }
  swap_colors(key);
}

function swap_colors(key) {
  var i;
  for (i = 0; i < menu.length; i++) {
    if (key != i) {
      $('.user_btn'+i).css("color", "#838383");
      var act = $('nav ul .feat-show'+i).hasClass("show");
      if (act) {
        $('nav ul .feat-show'+i).toggleClass("show");
        
      }
      console.log("here")
      $('.user_btn'+i).removeClass('hover');
      $('.user_btn'+i).hover(function(){
        $('.user_btn'+i).css("color", "yellow");
        }, function(){
          $('.user_btn'+i).css("color", "#838383");
        }
      );
    }

    else {
      $('nav ul .feat-show'+key).toggleClass("show");
      $('.user_btn'+key).css("color", "yellow");
    }
  }
  const isAllZero = menu.every(item => item === 0);
  if (isAllZero) {
    for (i = 0; i < menu.length; i++) {
      $('.user_btn'+i).css("color", "white");
      hover_method_all_closed(i);
    }
  }

}

function hover_method_all_closed(key){
  $('.user_btn'+key).hover(function(){
    $(this).css("color", "yellow");
    var i;
    for (i = 0; i < menu.length; i++) {
      $('.user_btn'+i).removeClass('hover')
      if(key != i) {
        $('.user_btn'+i).css("color", "#838383");
      }
    }
    }, function(){
      for (i = 0; i < menu.length; i++) {
        $('.user_btn'+i).css("color", "white");
      }
    }
  );
}