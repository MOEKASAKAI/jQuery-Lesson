$(function(){
  $('.box1').slideDown(1000,function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(2000);
  });
});

// アニメーションを入れる場合はslideDown()の第一因数に数字を入力する


