$(function(){
  var $grid = $('.grid');
  $grid.isotope({
      itemSelector: '.element-item'
  });
  $('#filters a').click(function(){ 
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    return false;
  });
});