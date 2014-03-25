$(document).ready(function() {

  $('#keyword').focus(function() {
    $('#search').val('');
    $('#feed').empty(); //erase last search
  });


  //user clicks button (event listener)
  $('#search').click(function(){ 

    //get search term
    var keyword = $('#keyword').val();

    //include search term into AJAX request URL
    var url = 'http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+keyword+'&jsoncallback=?';

    //make AJAX request
    $.getJSON(url, function(data) {

      console.log(data);

      $.each(data.photos.photo, function(i, photo) {

        var content = '<img src="http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg">';

        $('#feed').append(content);

      });
    
    });

  });


    //build the image urls from the data

    //render in the document


});

/*

Flickr API url: http://www.flickr.com/services/api/request.rest.html


Example AJAX request URL with tags=cat:

http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=cat&jsoncallback=?


Info about creating photo url from json data: http://www.flickr.com/services/api/misc.urls.html

Example constructing photo url: http://farm{farm#}.staticflickr.com/{server-id}/{id}_{secret}.jpg

*/