var menu=[0,0,0,0,0,0,0,0];function setup(){var e;for(e=0;e<menu.length;e++){let o=e;$(".user_btn"+e).click((function(e){e.preventDefault(),get_colors(o)})),hover_method_all_closed(e)}}function get_colors(e){var o;for(o=0;o<menu.length;o++)e!=o?menu[o]=0:0===menu[e]?menu[e]=1:menu[e]=0;swap_colors(e)}function swap_colors(e){var o;for(o=0;o<menu.length;o++){let s=o;if(e!=s)$(".user_btn"+s).css("color","#838383"),$("nav ul .feat-show"+s).hasClass("show")&&$("nav ul .feat-show"+s).toggleClass("show");else $("nav ul .feat-show"+e).toggleClass("show"),$(".user_btn"+e).css("color","yellow")}if(menu.every((e=>0===e)))for(o=0;o<menu.length;o++){let e=o;$(".user_btn"+e).css("color","white"),hover_method_all_closed(e)}}function hover_method_all_closed(e){$(".user_btn"+e).removeClass("hover"),$(".user_btn"+e).hover((function(){var o;for($(this).css("color","yellow"),o=0;o<menu.length;o++)e!=o&&$(".user_btn"+o).css("color","#838383")}),(function(){for(i=0;i<menu.length;i++)$(".user_btn"+i).css("color","white")}))}setup();
//# sourceMappingURL=script.js.map