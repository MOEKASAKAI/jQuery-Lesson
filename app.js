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
  $('.box2').mouseout(function(){
    $('.box2').css({'background-color' : '#FF0000'});
  });
});

// class属性を追加する／解除する
$(function(){
  $('.box2').mouseover(function(){
    $('.box2').addClass('box2-ext');
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box2-ext');
  });
});

// 「マウスクリック」イベントを設定する
//  クリック後に複数のイベントが行われるようにしたいので、onを付けて記入
$(function(){
  $('.box2').on('click', function(){
    $('.bos2').removeClass('box2-ext');
  });
  $('.box2').mouseout(function(){
    $('.box2').addClass('box2-ext');
  });
});