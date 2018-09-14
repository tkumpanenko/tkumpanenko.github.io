$(function(){
  var $grid = $('.grid');
  $grid.isotope({
      itemSelector: '.element-item',
      resizable: false, // disable normal resizing
      layoutMode: 'fitRows' 
  });
  
  $('#filters a').click(function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('#filters a').removeClass('active'); 
    $(this).toggleClass('active');
    return false;
  });
});