//window.addEventListener('DOMContentLoaded', jQueryが読み込まれる前でも影響を受けない
//window.onload = ページ全部が読み込まれた後に実行したい
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});