$(function () {
    var body = $('body');
    var backgrounds = [
      'url(https://images.unsplash.com/photo-1591290689629-8ad3a992b3b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80)',
        'url(https://images.unsplash.com/photo-1580686733996-bfd23485a648?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
      'url(https://images.unsplash.com/photo-1549034802-48414ac0300f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
        'url(https://images.unsplash.com/photo-1586584709507-68462d0781f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
          'url(https://images.unsplash.com/photo-1568259547325-f08f48165cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
      'url(https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80)',
      'url(https://images.unsplash.com/photo-1542882346-4b19cc95a3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        body.css({
          'backgroundRepeat': 'no-repeat',
    			'background-size': 'cover',
          });
        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});
