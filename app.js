//window.addEventListener('DOMContentLoaded', jQueryが読み込まれる前でも影響を受けない
//window.onload = ページ全部が読み込まれた後に実行したい
$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
        'background-color': '#0000FF',
        'height': '100px',
        'width': '200px'
    }).slideUp();
  });
});