// 正方形をクリックするとクリックした正方形のみslide Upして消えるアニメーション
// thisコードでシンプルにまとめる
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

// HTML要素直下のすべての子要素を取得する
// この場合はul要素の子要素=li要素が対象
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color', 'red');
  });
});