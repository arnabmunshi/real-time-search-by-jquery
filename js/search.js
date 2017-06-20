$(function() {
  $('body').on('keyup','#search',function() {
    
    var serach_str = $('#search').val();
    var count = $('.name-list div').length;

    for(var i=1; i<=count; i++) {
      var name = $('.name-list div:nth-child('+i+')').attr('name-list');
      if(name.search(serach_str) == -1)
        $('.name-list div:nth-child('+i+')').hide();
      else
        $('.name-list div:nth-child('+i+')').show();
    }
  });
});