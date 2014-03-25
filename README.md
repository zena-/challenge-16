---
languages: javascript
tags: jquery, ajax, json, api, function, loops
---

# Flickr API

## Description

This lab asks that you write the jQuery/JavaScript neccesary to gather the users search term they type from the input field in index.html and use the serach term to query the Flicker API and append the search results that are returned as JSON into the index,html display feed element showing the picture results.

## Instructions

1. Fork this repository.
2. Clone your fork.
3. `cd` into the locally cloned repo folder for this lab.
4. Browse the **index.html** file and make a note of the id the elements have been tagged with.
5. In **js/flickrSearch.js** write the code neccesary to capture the users search term upon clicking the search button an send out an AJAX request to the Flicker API. Using the provided link and API key:
`http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+{your_search_term_here}+'&jsoncallback=?`
Replace the `{your_search_term_here}` for the tag URI parameter with your variable holding the users search term. It is suggested that you use jQuery's `$.getJSON()` method described here: [http://api.jquery.com/jQuery.getJSON/](http://api.jquery.com/jQuery.getJSON/)
6. You should recieve back some JSON that looks like the following:
```JSON
jsonFlickrApi({
    "photos": {
        "page": 1,
        "pages": 46641,
        "perpage": 100,
        "total": "4664056",
        "photo": [
            {
                "id": "7790251192",
                "owner": "80992738@N00",
                "secret": "50b0af1b38",
                "server": "8440",
                "farm": 9,
                "title": "Friends",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0
            },
```

You must use a loop to iterate over each photo and construct an image URI than can be inserted into an `<img>` element to be appended into the display feed element in ***index.html***. Here is an example URI:
`http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg`
Replace the {foo} with the actual values from the JSON so it should look like this:
`http://farm9.staticflickr.com/8440/7790251192_50b0af1b38.jpg`

Read more about constructing image URI here: [http://www.flickr.com/services/api/misc.urls.html](http://www.flickr.com/services/api/misc.urls.html)

Read more about Flickr API here: [http://www.flickr.com/services/api/request.rest.html](http://www.flickr.com/services/api/request.rest.html)

## BONUS:

Add the jQuery fancybox plugin to make images model (light-box) when you click on them.

Directions at: [http://fancyapps.com/fancybox/](http://fancyapps.com/fancybox/)
