// Jack Molloy js file

$(document).ready(function() {

  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3'],
    navigation: {
          'textColor': '#f2f2f2',
          'bulletsColor': '#ccc',
          'position': 'right',
          'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
      }
    });



  // Grab all elements with the class "hasTooltip"
  $('.hasTooltip').each(function() { // Notice the .each() loop, discussed below
      $(this).qtip({
          content: {
              text: $(this).next('div') // Use the "div" element next to this for the content
          }
      });
  });

});
