// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

$document).ready(function() {
  $('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    var rows = $('#input_height').val();
    var columns = $('#input_width').val();
      for (var x=1; x<= rows; x++) {
        $('table'). append('<tr></tr>');
        for (var y=1; y<= columns; y++) {
          $('tr.last').append('<td></td>');
          $('td').attr("class", 'cells');
        }
      }
    grid.preventDefault();
    
    $('.cells').click(function(event) {
      var color = $('colorPicker').val();
      $(event.target().css('background-color', color);
    })
  })
  });
                          
