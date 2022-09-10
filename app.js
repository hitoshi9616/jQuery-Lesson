//window.addEventListener('DOMContentLoaded', //
//window.onload = ページ全部が読み込まれた後に実行したい
//$(function(){
  //$('.box1').slideDown();
//});//
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color', 'red');
  });
})