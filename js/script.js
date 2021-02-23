var menu = [0, 0, 0, 0, 0, 0, 0, 0]

setup();

function setup(){
  var i;
  for (i = 0; i < menu.length; i++) {
    let x = i;
    $('.user_btn'+i).click(function(){
      get_colors(x);
    });
    hover_method_all_closed(i);
  }
}

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
    let x = i;
    if (key != x) {
      $('.user_btn'+x).css("color", "#838383");
      var act = $('nav ul .feat-show'+x).hasClass("show");
      if (act) {
        $('nav ul .feat-show'+x).toggleClass("show");
        
      }
      $('.user_btn'+x).removeClass('hover');
      /*$('.user_btn'+x).hover(function(){
        $('.user_btn'+x).css("color", "yellow");
        }, function(){
          $('.user_btn'+x).css("color", "#838383");
        }
      );*/
    }

    else {
      $('nav ul .feat-show'+key).toggleClass("show");
      $('.user_btn'+key).css("color", "yellow");
    }
  }
  const isAllZero = menu.every(item => item === 0);
  if (isAllZero) {
    for (i = 0; i < menu.length; i++) {
      let x = i;
      $('.user_btn'+x).css("color", "white");
      hover_method_all_closed(x);
    }
  }

}

function hover_method_all_closed(key){
  $('.user_btn'+key).removeClass('hover');
  $('.user_btn'+key).hover(function(){
    $(this).css("color", "yellow");
    var i;
    for (i = 0; i < menu.length; i++) {
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