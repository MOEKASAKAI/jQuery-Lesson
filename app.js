// アニメーションを入れる場合はslideDown()の第一因数に数字を入力する
$(function(){
  $('.box1').slideDown(1000,function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(2000);
  });
});

// jQueryで「マウスオーバー」イベントを設定する
$(function(){
  $('.box2').mouseover(function(){
    $('.box2').css({'background-color': '#0000FF'});
  });
});
