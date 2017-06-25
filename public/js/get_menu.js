var menu
  , raw_response;

function get_menu() {
    var displayResources = $('#display-resources');
    displayResources.text('Loading data from JSON source...');

    $.ajax({
      type: "GET",
      dataType: 'json',
      url: "http://dbarner.me/dist/sample.json",

      success: function(data) {
        raw_response = data;
        menu = data.menu;
            displayResources.text('Got the menu!');
      }
    });
};
